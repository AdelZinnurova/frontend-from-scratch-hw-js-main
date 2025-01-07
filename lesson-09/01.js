/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

// Реализация собственной функции filter
function filter(array, callback) {
    const result = []; // Новый массив для хранения отфильтрованных элементов
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) { // Если callback возвращает true
            result.push(array[i]); // Добавляем элемент в результат
        }
    }
    return result;
}

// Использование собственной реализации filter
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = filter(array, (element, index) => {
    return element % 2 !== 0; // Условие: оставить только нечетные элементы
});

console.log(newArray); // Ожидаемый результат: [1, 3, 5, 7]



