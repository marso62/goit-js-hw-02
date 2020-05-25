'use strict';

console.log('Задание 2-2!');

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай
// функцию calculateEngravingPrice(message, pricePerWord) принимающую строку
//  (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую
// цену гравировки всех слов в строке.

// function calculateEngravingPrice (message, pricePerWord) {
//   let wordCount = 0;
//   for (let i = 0; i < message.split(' ').lenght; i++) {
//    wordCount += 1;
//   }
// return `Цена гравировки одного слова ${pricePerWord}. Текст содержит ${wordCount} слов. Цена гравировки всех слов ${wordCount*pricePerWord}`;
// };

// Подскажите чем отличаются эти 2е функции? (не пойму в чем различия)

function calculateEngravingPrice(message, pricePerWord) {
  let wordCount = 0;
  for (let i = 0; i < message.split(' ').length; i++) {
    wordCount += 1;
  }
  return `Цена гравировки одного слова ${pricePerWord}. Текст содержит ${wordCount} слов. Цена гравировки всех слов ${
    wordCount * pricePerWord
  }.`;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
