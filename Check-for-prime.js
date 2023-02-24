// Problem Statement: Given a number, check whether it is prime or not.
// A prime number is a natural number that is only divisible by 1 and by itself.

const checkPrime = (n) => {
  if (n == 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(checkPrime(1), 1);
console.log(checkPrime(2), 2);
console.log(checkPrime(3), 3);
console.log(checkPrime(15), 15);
console.log(checkPrime(17), 17);
console.log(checkPrime(43), 43);
