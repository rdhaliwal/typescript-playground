const blah = (s: string): number => {
  console.log(s);
  return Math.random();
};

["IX", "MCMXCIV", "XVI", "XX", "MDC"].forEach((input) => {
  console.log(`Input: ${input} Output: ${blah(input)} \n---`);
});
