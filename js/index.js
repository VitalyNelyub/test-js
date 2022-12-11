//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Cansel

// let num = prompt("Введіть число більше ста");
// let check = false;
// console.log(num);
// do {
//   if (num < 100) {
//     check = true;
//     num = prompt("Число меньше ста, спробуйте ще раз")
//   } else {
//     check = false;
//   }

// } while (check)

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElement = fruits[fruits.length - 1];
// // fruits[lastElement] = fruits[fruits.length - 1];
// console.log(lastElement);

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]
// getExtremeElements = [1, 2, 3, 4, 5];

// function makeArray(firstArray, secondArray, maxLength) {

//   const finalArray = firstArray.concat(secondArray);
//   if (finalArray.length > maxLength) {
//     makeArray = finalArray.slice(0, maxLength);
//   } else {
//     makeArray = finalArray;
//   }
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 2);
// console.log(makeArray);

// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i += 1) {
//   // Change this line
//   console.log(i);
// }

// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і
// повертає суму всіх цілих чисел від одиниці і до цього числа.
//   Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let number = 0;
//   for (i = 1; i <= number; i += 1) {
//     number += i;
//   }
// }

// calculateTotal(1);
// console.log(calculateTotal)

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення
// console.log(calculateTotal)

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = number;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//     console.log(sum)
//     return sum
//   }
// }
// calculateTotal(6);
// console.log(calculateTotal);

// const target = 3;
// let sum = 0;

// for (let i = 1; i <= target; i += 1) {
//   sum += i;
//   console.log(i)
// }

// console.log(sum);

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
// //   // Change code below this line
// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }
// //   // Change code above this line
// //   return total;
// // }

// // calculateTotalPrice([12, 85, 37, 4]); //повертає 138
// // console.log(calculateTotalPrice);

// const drawCats = function (howManyTimes) {
//   for (let i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//   }
// };
// drawCats(20);
// console.log(drawCats.split(" "))

// function findLongestWord(string) {
//   let array = string.split(" ");
//   console.log(array);

//   let longerWorld = array[0].length;

//   console.log(longerWorld);

//   for (let word of array) {
//     if (word.length > longerWorld) {
//      return word = longerWorld;
//       console.log(longerWorld);
//     }
// return word;
//   }

// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
//  console.log(longestWorld);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   fruit.includes(fruits);
//   return fruit;
// }
// checkFruit("plum");

// function getCommonElements(array1, array2) {
//   let newArray = ;
//   for (array1.includes(array2)) {
//     newArray =
//   }

// }

// getCommonElements([1, 2, 3], [2, 4]);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let number = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       number = result.push(number);
//     }
//   }
//   return number;

//   // Change code above this line
// }

// getEvenNumbers(3, 11); //[4, 6, 8, 10]

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   if (client === 'Ajax')
//   console.log(client);
// }
// const age = 15.2
// console.log(typeof age)

// const message = "JavaScript is awesome!";
// confirm(Number(message));

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"
console.log(typeof (1 + 2 + "4"));
const test = "aBouT to My SKillS";

console.log(test.toLowerCase());
console.log(message.toLowerCase());
