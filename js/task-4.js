'use strict'

console.log('Задание 2-4!')

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет
// в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
    const text = string
    const maxLengthSnringv = 40
    if (string.length > maxLengthSnringv) {
        return `${text.slice(0, maxLengthSnringv - 1)}...`
    } else {
        return string
    }
}

//  2 вариант

// function formatString(string) {
//   return string.length > 40 ? `${string.slice(0, 39)}...` : string;
//   }

// 3 вариант

// const formatString = (string, stringMaxLength = 40) =>
// string.length > stringMaxLength ? `${string.slice(0, stringMaxLength - 1)}...` : string;

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'))
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'))
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'))
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
    )
)
// вернется форматированная строка
