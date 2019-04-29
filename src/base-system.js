const baseSpace = 16;

const multiplySpace = times => baseSpace * times;

export const baseSystem = {
  space: [0].concat(
    [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12, 16, 24, 32, 40, 48].map(multiplySpace)
  )
};
