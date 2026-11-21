import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { settingsService } from '@services/settingsService';

export type SfxType = 'click' | 'flip' | 'correct' | 'wrong' | 'tick' | 'complete';

export interface ISoundSettings {
  masterVolume: number; // 0 - 100
  musicVolume: number;  // 0 - 100
  sfxVolume: number;    // 0 - 100
  isMuted: boolean;
}

interface ISoundContextType {
  settings: ISoundSettings;
  setMasterVolume: (v: number) => void;
  setMusicVolume: (v: number) => void;
  setSfxVolume: (v: number) => void;
  setIsMuted: (v: boolean) => void;
  playSfx: (type: SfxType) => void;
  toggleBgm: () => void;
  isBgmPlaying: boolean;
}

const defaultSettings: ISoundSettings = {
  masterVolume: 80,
  musicVolume: 50,
  sfxVolume: 80,
  isMuted: false,
};

const SoundContext = createContext<ISoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ISoundSettings>(defaultSettings);
  const [isBgmPlaying, setIsBgmPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bgmOscillatorsRef = useRef<{ stop: () => void } | null>(null);

  // Load initial settings via settingsService
  useEffect(() => {
    const initSettings = async () => {
      try {
        const stored = await settingsService.getSettings();
        setSettings({
          masterVolume: Math.round(stored.masterVolume * 100),
          sfxVolume: Math.round(stored.sfxVolume * 100),
          musicVolume: Math.round(stored.bgmVolume * 100),
          isMuted: !stored.enabled,
        });
      } catch {}
    };
    initSettings();
  }, []);

  // Sync settings to service whenever state changes
  useEffect(() => {
    settingsService.saveSettings({
      enabled: !settings.isMuted,
      masterVolume: settings.masterVolume / 100,
      sfxVolume: settings.sfxVolume / 100,
      bgmVolume: settings.musicVolume / 100,
      bgmPlaying: isBgmPlaying,
    });
  }, [settings, isBgmPlaying]);

  // Init AudioContext on user interaction
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const getEffectiveSfxVolume = useCallback(() => {
    if (settings.isMuted) return 0;
    return (settings.masterVolume / 100) * (settings.sfxVolume / 100);
  }, [settings]);

  const getEffectiveMusicVolume = useCallback(() => {
    if (settings.isMuted) return 0;
    return (settings.masterVolume / 100) * (settings.musicVolume / 100);
  }, [settings]);

  // Web Audio Sound Synthesizer (Zero-latency & Zero external sound file dependency)
  const playSfx = useCallback((type: SfxType) => {
    const volume = getEffectiveSfxVolume();
    if (volume <= 0) return;

    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
        gain.gain.setValueAtTime(volume * 0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'flip') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.08);
        gain.gain.setValueAtTime(volume * 0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'correct') {
        // High-pitched pleasant chord: C5 -> E5 -> G5
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0, now);
          gain.gain.setValueAtTime(volume * 0.4, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.28);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.3);
        });
      } else if (type === 'wrong') {
        // Low buzzy dual tone: F3 & E3 flat
        [174.61, 164.81].forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(volume * 0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.24);
        });
      } else if (type === 'tick') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        gain.gain.setValueAtTime(volume * 0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'complete') {
        // Triumphant victory fanfare: C5, E5, G5, C6
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          const startTime = now + idx * 0.12;
          const duration = idx === notes.length - 1 ? 0.6 : 0.2;
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(volume * 0.45, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + duration + 0.05);
        });
      }
    } catch {}
  }, [getEffectiveSfxVolume, getAudioContext]);

  // Gentle Ambient BGM Synthesizer (calm background music chord progression)
  const startBgm = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (bgmOscillatorsRef.current) {
        bgmOscillatorsRef.current.stop();
      }

      const masterGain = ctx.createGain();
      const volume = getEffectiveMusicVolume();
      masterGain.gain.setValueAtTime(volume * 0.08, ctx.currentTime);

      const chords = [
        [261.63, 329.63, 392.00], // C
        [220.00, 261.63, 329.63], // Am
        [174.61, 220.00, 261.63], // F
        [196.00, 246.94, 293.66], // G
      ];

      let isRunning = true;
      let chordIndex = 0;

      const playChord = () => {
        if (!isRunning) return;
        const now = ctx.currentTime;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.05, now + 1.2);
          gain.gain.linearRampToValueAtTime(0.001, now + 3.8);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(now);
          osc.stop(now + 4);
        });

        if (isRunning) {
          setTimeout(playChord, 3500);
        }
      };

      masterGain.connect(ctx.destination);
      playChord();

      bgmOscillatorsRef.current = {
        stop: () => {
          isRunning = false;
          try {
            masterGain.disconnect();
          } catch {}
        },
      };

      setIsBgmPlaying(true);
    } catch {}
  }, [getAudioContext, getEffectiveMusicVolume]);

  const stopBgm = useCallback(() => {
    if (bgmOscillatorsRef.current) {
      bgmOscillatorsRef.current.stop();
      bgmOscillatorsRef.current = null;
    }
    setIsBgmPlaying(false);
  }, []);

  const toggleBgm = useCallback(() => {
    if (isBgmPlaying) {
      stopBgm();
    } else {
      startBgm();
    }
  }, [isBgmPlaying, startBgm, stopBgm]);

  const setMasterVolume = (v: number) => setSettings((s) => ({ ...s, masterVolume: v }));
  const setMusicVolume = (v: number) => setSettings((s) => ({ ...s, musicVolume: v }));
  const setSfxVolume = (v: number) => setSettings((s) => ({ ...s, sfxVolume: v }));
  const setIsMuted = (v: boolean) => setSettings((s) => ({ ...s, isMuted: v }));

  return (
    <SoundContext.Provider
      value={{
        settings,
        setMasterVolume,
        setMusicVolume,
        setSfxVolume,
        setIsMuted,
        playSfx,
        toggleBgm,
        isBgmPlaying,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): ISoundContextType => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
