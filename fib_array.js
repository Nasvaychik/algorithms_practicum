// Функция для вычисления n-го числа Фибоначчи
function fib(n) {
    if (n < 0 || n > 40) {
        throw new Error('n должно быть в диапазоне от 1 до 40');
    }

    // Массив для хранения чисел Фибоначчи
    const fibArray = [0, 1];

    // Заполнение массива до n-го числа
    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    // Вывод массива
    console.log(fibArray);
    return fibArray;
}

// Пример вызова функции
fib(8); // Ожидаемый вывод: [0, 1, 1, 2, 3, 5, 8, 13, 21]
