export interface SM2Result {
  easiness: number;
  interval: number;
  repetitions: number;
}

/**
 * SM-2 spaced repetition algorithm.
 * quality: 0-5 (0=blackout, 5=perfect)
 */
export function sm2(
  quality: 0 | 1 | 2 | 3 | 4 | 5,
  repetitions: number,
  easiness: number,
  interval: number
): SM2Result {
  let newEasiness = easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (newEasiness < 1.3) newEasiness = 1.3;

  let newRepetitions = repetitions;
  let newInterval = interval;

  if (quality < 3) {
    newRepetitions = 0;
    newInterval = 1;
  } else {
    newRepetitions = repetitions + 1;
    if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * newEasiness);
    }
  }

  return {
    easiness: newEasiness,
    interval: newInterval,
    repetitions: newRepetitions,
  };
}
