// This is required for the test to function properly
function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function isPalindrome(str) {
  const lower = str.toLowerCase();
  const reversed = lower.split('').reverse().join('');
  return lower === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
