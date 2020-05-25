'use strict';

console.log('Задание 2-1!');

// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента
// массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    let key = i + 1;
    console.log(`${array[i]} - ${key}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
