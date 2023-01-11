const RomanNumeralMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  const numerals = s.split("");
  let count = 0;

  for (let i = 0; i < numerals.length; i++) {
    const num = numerals[i];
    const nextNum = numerals[i + 1];

    if (num === "I" && (nextNum === "V" || nextNum === "X")) {
      count += RomanNumeralMap[nextNum] - RomanNumeralMap[num];
      i++;
    } else if (num === "X" && (nextNum === "L" || nextNum === "C")) {
      count += RomanNumeralMap[nextNum] - RomanNumeralMap[num];
      i++;
    } else if (num === "C" && (nextNum === "D" || nextNum === "M")) {
      count += RomanNumeralMap[nextNum] - RomanNumeralMap[num];
      i++;
    } else {
      count += RomanNumeralMap[num];
    }
  }

  return count;
};

const testCases = [
  { input: "IX", expected: 9 },
  { input: "MCMXCIV", expected: 1994 },
  { input: "XVI", expected: 16 },
  { input: "XX", expected: 20 },
  { input: "MDC", expected: 1600 },
];
testCases.forEach(({ input, expected }) => {
  console.log(`Input: ${input} Expected: ${expected} Got: ${romanToInt(input)} \n---`);
});

