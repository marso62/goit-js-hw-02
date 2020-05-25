'use strict';

console.log('Задание 2-3!');

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке
//     будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const listWord = string.split(' '); //разбиваем по словам
// / return listWord
//   for (const word of listWord) {       //почему в данном случае цикл не перебирает массив, а останавливается на первом элементе?
//     return word
//     let x = 0;
//   let y =' ';
//   if (x < word.length) {
//     x = word.length
//     y = word
//   }
// //    return (`Самое длинное слово ${y}.`)
//  }

//  та ж проблема(

// function findLongestWord(string) {
//     const listWord = string.split(' ');
//   let word = listWord[0]
//     for (const words of listWord) {

//     if (words.length > word.length) {
//       word = words
//     }
//      return (`Самое длинное слово ${word}.`)
//    }
//   };

const findLongestWord = function (string) {
  const listWord = string.split(' '); //разбиваем по словам
  let word = listWord[0]; // переменная для слов
  for (let i = 1; i < listWord.length; i++) {
    if (listWord[i].length > word.length) word = listWord[i];

    return `Самое длинное слово в предложении "${word}".`;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
