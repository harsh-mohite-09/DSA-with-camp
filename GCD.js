const lcmAndGcd = function (a, b) {
  let gcd = 0;
  let min = a < b ? a : b;
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return [(a * b) / gcd, gcd];
};

console.log(lcmAndGcd(5, 10));
