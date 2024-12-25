// Функция для вычисления n-го числа Фибоначчи с использованием формулы Бине
function fib(n) {
    if (n < 1 || n > 64) {
        throw new Error('n должно быть в диапазоне от 1 до 64');
    }

    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;

    // Вычисление числа Фибоначчи по формуле Бине
    const fibNumber = Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);

    console.log(fibNumber);
    return fibNumber;
}

// Пример вызова функции
fib(32); // Ожидаемый вывод: 2178309
