// 1. In các số từ 1 đến 10
document.write("<h3>1. In các số từ 1 đến 10:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// 2. In các số lẻ nhỏ hơn 100
document.write("<h3>2. In các số lẻ nhỏ hơn 100:</h3>");
for (let i = 1; i < 100; i += 2) {
  document.write(i + "<br>");
}

// 3. In bảng cửu chương của 7
document.write("<h3>3. In bảng cửu chương của 7:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(`7 x ${i} = ${7 * i}<br>`);
}

// 4. In tất cả các bảng cửu chương từ 1 đến 10
document.write("<h3>4. In tất cả các bảng cửu chương từ 1 đến 10:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(`<strong>Bảng cửu chương của ${i}:</strong><br>`);
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} x ${j} = ${i * j}<br>`);
  }
  document.write("<br>");
}

// 5. Tính tổng các số từ 1 đến 10
document.write("<h3>5. Tính tổng các số từ 1 đến 10:</h3>");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
document.write(`Tổng các số từ 1 đến 10 là ${sum}<br>`);

// 6. Tính 10!
document.write("<h3>6. Tính 10!:</h3>");
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
document.write(`10! = ${factorial}<br>`);

// 7. Tính tổng các số chẵn lớn hơn 10 và nhỏ hơn 30
document.write("<h3>7. Tính tổng các số chẵn lớn hơn 10 và nhỏ hơn 30:</h3>");
let evenSum = 0;
for (let i = 12; i < 30; i += 2) {
  evenSum += i;
}
document.write(`Tổng các số chẵn lớn hơn 10 và nhỏ hơn 30 là ${evenSum}<br>`);

// 8. Tạo một hàm để chuyển đổi từ Celsius sang Fahrenheit
document.write("<h3>8. Chuyển đổi từ Celsius sang Fahrenheit:</h3>");
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
document.write(`25°C là ${celsiusToFahrenheit(25)}°F<br>`);

// 9. Tạo một hàm để chuyển đổi từ Fahrenheit sang Celsius
document.write("<h3>9. Chuyển đổi từ Fahrenheit sang Celsius:</h3>");
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
document.write(`77°F là ${fahrenheitToCelsius(77)}°C<br>`);

// 10. Tính tổng các số trong một mảng số
document.write("<h3>10. Tính tổng các số trong một mảng số:</h3>");
function sumArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
document.write(
  `Tổng của mảng [10, 22, 31, 45, 15] là ${sumArray([10, 22, 31, 45, 15])}<br>`
);

// 11. Tính trung bình của các số trong một mảng số
document.write("<h3>11. Tính trung bình của các số trong một mảng số:</h3>");
function averageArray(numbers) {
  let sum = sumArray(numbers);
  return sum / numbers.length;
}
document.write(
  `Trung bình của mảng [11, 32, 30, 43, 77] là ${averageArray([
    11, 32, 30, 43, 77,
  ])}<br>`
);

// 12. Tạo một hàm nhận một mảng số làm đối số và trả về một mảng chỉ chứa các số dương
document.write("<h3>12. Trả về một mảng chỉ chứa các số dương:</h3>");
function getPositiveNumbers(numbers) {
  return numbers.filter((number) => number > 0);
}
document.write(`[${getPositiveNumbers([-10, 4, -6, 33, 82]).join(", ")}]<br>`);

// 13. Tìm số lớn nhất trong một mảng số
document.write("<h3>13. Tìm số lớn nhất trong một mảng số:</h3>");
function findMaxNumber(numbers) {
  return Math.max(...numbers);
}
document.write(`${findMaxNumber([29, 86, 17, 3, 58, 43])}<br>`);

// 14. In 10 số Fibonacci đầu tiên mà không dùng đệ quy
document.write("<h3>14. In 10 số Fibonacci đầu tiên không dùng đệ quy:</h3>");
function In10SoFibonacci() {
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  document.write(`[${fib.join(", ")}]<br>`);
}
In10SoFibonacci();

// 15. Tạo một hàm để tìm số Fibonacci thứ n sử dụng đệ quy
document.write("<h3>15. Tìm số Fibonacci thứ n sử dụng đệ quy:</h3>");
function findNthFibonacci(n) {
  if (n <= 1) return n;
  return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
}
document.write(`${findNthFibonacci(10)}<br>`);

// 16. Tạo một hàm trả về một giá trị Boolean xác định xem một số có phải là số nguyên tố hay không
document.write("<h3>16. Kiểm tra số nguyên tố:</h3>");
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
document.write(`11: ${isPrime(11)}<br>`);
document.write(`8: ${isPrime(8)}<br>`);

// 17. Tính tổng các chữ số của một số nguyên dương
document.write("<h3>17. Tính tổng các chữ số của một số nguyên dương:</h3>");
function sumOfDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}
document.write(`${sumOfDigits(52698)}<br>`);

// 18. In 100 số nguyên tố đầu tiên
document.write("<h3>18. In 100 số nguyên tố đầu tiên:</h3>");
function printFirst100Primes() {
  let primes = [];
  let num = 2;
  while (primes.length < 100) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  document.write(`[${primes.join(", ")}]<br>`);
}
printFirst100Primes();

// 19. Tạo một hàm trả về trong một mảng p số nguyên tố đầu tiên lớn hơn n
document.write(
  "<h3>19. Trả về trong một mảng p số nguyên tố đầu tiên lớn hơn n:</h3>"
);
function getPrimesGreaterThanN(n, p) {
  let primes = [];
  let num = n + 1;
  while (primes.length < p) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  document.write(`[${primes.join(", ")}]<br>`);
}
getPrimesGreaterThanN(30, 6);

// 20. Xoay một mảng sang trái 1 vị trí
document.write("<h3>20. Xoay một mảng sang trái 1 vị trí:</h3>");

function rotateLeft(arr) {
  let firstElement = arr.shift();
  arr.push(firstElement);
  return arr;
}

let rotatedArray = rotateLeft([29, 40, 67, 11, 59]);
document.write(`Mảng sau khi xoay: [${rotatedArray.join(", ")}]<br>`);

// 21. Xoay một mảng sang phải 1 vị trí
document.write("<h3>21. Xoay một mảng sang phải 1 vị trí:</h3>");

function rotateRight(arr) {
  let lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
}

let rotatedRightArray = rotateRight([29, 40, 67, 11, 59]);
document.write(`Mảng sau khi xoay phải: [${rotatedRightArray.join(", ")}]<br>`);

// 22. Đảo ngược một mảng
document.write("<h3>22. Đảo ngược một mảng:</h3>");

function reverseArray(arr) {
  return arr.reverse();
}

let reversedArray = reverseArray([22, 52, 43, 74, 95]);
document.write(`Mảng sau khi đảo ngược: [${reversedArray.join(", ")}]<br>`);

// 23. Đảo ngược một chuỗi
document.write("<h3>23. Đảo ngược một chuỗi:</h3>");

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversedString = reverseString("react");
document.write(`Chuỗi sau khi đảo ngược: ${reversedString}<br>`);

// 24. Tạo một hàm kết hợp hai mảng và trả về kết quả là một mảng mới
document.write("<h3>24. Kết hợp hai mảng:</h3>");

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let mergedArray = mergeArrays([12, 42, 55], [88, 25, 56]);
document.write(`Mảng sau khi kết hợp: [${mergedArray.join(", ")}]<br>`);

// 25. Tạo một hàm nhận hai mảng số làm đối số và trả về một mảng chứa tất cả các số hoặc trong mảng thứ nhất hoặc thứ hai nhưng không phải cả hai
document.write(
  "<h3>25. Các phần tử có trong một trong hai mảng nhưng không phải cả hai:</h3>"
);

function arrayDifference(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}

let differenceArray = arrayDifference([11, 69, 30], [11, 30, 245]);
document.write(`Các phần tử khác nhau: [${differenceArray.join(", ")}]<br>`);

// 26. Tạo một hàm nhận hai mảng và trả về một mảng với các phần tử có trong mảng đầu tiên nhưng không có trong mảng thứ hai
document.write(
  "<h3>26. Các phần tử có trong mảng đầu tiên nhưng không có trong mảng thứ hai:</h3>"
);

function arrayDifferenceFirstOnly(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}

let differenceFirstOnlyArray = arrayDifferenceFirstOnly(
  [22, 62, 37],
  [22, 37, 90]
);
document.write(
  `Các phần tử chỉ có trong mảng đầu tiên: [${differenceFirstOnlyArray.join(
    ", "
  )}]<br>`
);
