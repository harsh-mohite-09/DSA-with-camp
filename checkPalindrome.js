// Problem Statement:  Given a number check if it is a palindrome.

function checkPalindrome(num) {
  let a = num;
  let right = 1;
  let left = countDigits(num) - 1;
  // let left = a.toString().length - 1
  while (right <= left) {
    let leftDigit = Math.floor(a / 10 ** left) % 10;
    let rightDigit = Math.floor((a % 10 ** right) / 10 ** (right - 1));
    // console.log(leftDigit, rightDigit);
    if (leftDigit !== rightDigit) return false;
    right++;
    left--;
  }
  return true;
}

function countDigits(num) {
  let n = num;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(checkPalindrome(123454321));
console.log(checkPalindrome(12346321));
console.log(checkPalindrome(145214412541));
