import { ISettings } from '../interfaces/quiz.interface';

const SETTINGS_STORAGE_KEY = 'quizlet_sound_settings';

export const DEFAULT_SETTINGS: ISettings = {
  enabled: true,
  masterVolume: 0.8,
  sfxVolume: 0.8,
  bgmVolume: 0.5,
  bgmPlaying: false,
};

/**
 * Settings Service - Quản lý cấu hình âm thanh và hệ thống
 * Tuân thủ Repository/Service Pattern, async/await sẵn sàng cho Backend User Settings API.
 */
export const settingsService = {
  /**
   * Lấy cấu hình cài đặt hiện tại
   */
  async getSettings(): Promise<ISettings> {
    await new Promise((r) => setTimeout(r, 10));
    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (!raw) return { ...DEFAULT_SETTINGS };
      const parsed = JSON.parse(raw);
      return {
        enabled: typeof parsed.enabled === 'boolean' ? parsed.enabled : DEFAULT_SETTINGS.enabled,
        masterVolume: typeof parsed.masterVolume === 'number' ? parsed.masterVolume : DEFAULT_SETTINGS.masterVolume,
        sfxVolume: typeof parsed.sfxVolume === 'number' ? parsed.sfxVolume : DEFAULT_SETTINGS.sfxVolume,
        bgmVolume: typeof parsed.bgmVolume === 'number' ? parsed.bgmVolume : DEFAULT_SETTINGS.bgmVolume,
        bgmPlaying: typeof parsed.bgmPlaying === 'boolean' ? parsed.bgmPlaying : DEFAULT_SETTINGS.bgmPlaying,
      };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  },

  /**
   * Cập nhật một phần hoặc toàn bộ cấu hình cài đặt
   */
  async saveSettings(partial: Partial<ISettings>): Promise<ISettings> {
    await new Promise((r) => setTimeout(r, 15));
    try {
      const current = await this.getSettings();
      const updated: ISettings = { ...current, ...partial };
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    } catch (err) {
      console.error('Failed to save settings:', err);
      return { ...DEFAULT_SETTINGS };
    }
  },

  /**
   * Khôi phục cài đặt mặc định ban đầu
   */
  async resetSettings(): Promise<ISettings> {
    await new Promise((r) => setTimeout(r, 10));
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
      return { ...DEFAULT_SETTINGS };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  },
};
