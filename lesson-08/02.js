/*
Задание: Реализация интерактивного отсчёта запуска ракеты

Цель задания: Написать код для обработки событий нажатия на кнопки "Старт" и "Отмена", реализуя обратный отсчёт с помощью JavaScript.

Задача:

1. Добавить обработчик событий для кнопки "Старт":

- При нажатии на кнопку "Старт" должен начаться обратный отсчёт с 3 до 1. Значение счётчика должно отображаться в элементе countdownDisplay. Цифра 3 должна отобразиться немедленно.
- Каждую секунду значение счётчика должно уменьшаться на 1.
- Когда счётчик достигнет 0, вместо 0 должен отображаться эмодзи ракеты "🚀" и таймер должен быть остановлен. Пользователь видит: 3 -> 2 -> 1 -> 🚀


2. Добавить обработчик событий для кнопки "Отмена":

- При нажатии на кнопку "Отмена" таймер должен быть остановлен
- В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
- Отмена таймера возможна только во время его работы
- После отмены таймера возможен повторный запуск ракеты

Обратите внимание на корректность работы таймера: повторное нажатие на "Старт" не должно приводить к нескольким одновременно работающим таймерам.

Подсказки:
- 🧙‍♂️ Для выполнения этого задания нужно познакомиться с браузерными функциями setInterval (https://doka.guide/js/setinterval/) и clearInterval(https://doka.guide/js/clearinterval/). Они очень похоже на setTimeout и clearTimeout.
 */

const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false // Флаг для проверки состояния таймера
let timerId = null // Идентификатор интервала

startButton.addEventListener('click', () => {
    if (isTimerStarted) return; // Предотвращаем запуск нескольких таймеров
    isTimerStarted = true; // Таймер запущен
    let counter = 3 // Начальное значение

    function start() {
        countdownDisplay.textContent = counter // обновляем текст на таймер
        counter-- // уменьшаем оставшееся время

        if (counter < 0) {
            clearInterval(timerId); // Останавливаем таймер
            countdownDisplay.textContent = "🚀"
            isTimerStarted = false; // Разрешаем повторный запуск
        }
    }

// Запускаем обновление каждую секунду
    timerId = setInterval(start, 1000);
    start(); // Показываем сразу "3", не дожидаясь 1 секунды
})


cancelButton.addEventListener('click', () => {
    if (isTimerStarted) {
        clearInterval(timerId) // останавливаем таймер
        isTimerStarted = false; // Разрешаем повторный запуск
        countdownDisplay.textContent = "Отменено" // Показываем сообщение
    }
})
