// Sum of all divisors from 1 to n

// Given a positive integer N., The task is to find the value of    \sum_{i=1}^{i=n} F(i)
// where function F(i) for the number i be defined as the sum of all divisors of ‘i‘.

// const sumOfDivisors = (n) => {
//   let sum = 0;
//   for (let i = 2; i <= n; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0) sum += j;
//     }
//   }
//   return sum + n;
// };

const sumOfDivisors = (n) => {
  if (n === 1) return 1;
  return helper(n) + sumOfDivisors(n - 1);
};

const helper = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
};

console.log(sumOfDivisors(5));

// Print all divisors

const printDivisors = (n) => {
  let divisors = "";
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisors += `${i} `;
  }
  return divisors;
};

const printDivisors2 = (n) => {
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors += `${i} `;
      if (i != n / i) {
        divisors += `${n / i} `;
      }
    }
  }
  return divisors;
};

console.log(printDivisors(36));
console.log(printDivisors2(36));
