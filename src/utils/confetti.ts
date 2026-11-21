import confetti from 'canvas-confetti';

/**
 * 8-cannon multi-angle celebration confetti sequence from Olympia (_reference_ui)
 */
export const fireCelebrationConfetti = () => {
  const makeShot = (particleRatio: number, opts: confetti.Options) => {
    confetti({
      ...opts,
      particleCount: Math.floor(220 * particleRatio),
    });
  };

  // Fire from left side (x: 0.1)
  makeShot(0.25, {
    spread: 60,
    startVelocity: 55,
    origin: { x: 0.1, y: 0.6 },
    angle: 60,
    colors: ['#9F73FF', '#98FD1D', '#FFEE58', '#60B1F3', '#FF4249'],
  });

  makeShot(0.2, {
    spread: 50,
    startVelocity: 45,
    origin: { x: 0.1, y: 0.7 },
    angle: 70,
    colors: ['#98FD1D', '#FFEE58', '#9F73FF'],
  });

  // Fire from center-left (x: 0.3)
  makeShot(0.3, {
    spread: 80,
    startVelocity: 60,
    origin: { x: 0.3, y: 0.6 },
    angle: 75,
    colors: ['#60B1F3', '#98FD1D', '#FF4249'],
  });

  // Fire from center (x: 0.5)
  makeShot(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.85,
    origin: { x: 0.5, y: 0.7 },
    angle: 90,
    colors: ['#9F73FF', '#98FD1D', '#FFEE58', '#FF4249'],
  });

  makeShot(0.2, {
    spread: 120,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.6 },
    angle: 90,
    colors: ['#98FD1D', '#FFEE58', '#60B1F3'],
  });

  // Fire from center-right (x: 0.7)
  makeShot(0.3, {
    spread: 80,
    startVelocity: 60,
    origin: { x: 0.7, y: 0.6 },
    angle: 105,
    colors: ['#60B1F3', '#9F73FF', '#FFEE58'],
  });

  // Fire from right side (x: 0.9)
  makeShot(0.25, {
    spread: 60,
    startVelocity: 55,
    origin: { x: 0.9, y: 0.6 },
    angle: 120,
    colors: ['#98FD1D', '#FF4249', '#60B1F3'],
  });

  makeShot(0.2, {
    spread: 50,
    startVelocity: 45,
    origin: { x: 0.9, y: 0.7 },
    angle: 110,
    colors: ['#9F73FF', '#FFEE58', '#98FD1D'],
  });
};
