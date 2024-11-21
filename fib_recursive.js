// Рекурсив функции для вычсиления числа фибоначи 
function fib(n){
    if (n <= 1){
        return n;
    } else{
        return fib(n - 1) + (n - 2);
    }
}

// Функция для замера времени
function measuringtheexecutiontime(n){
    const start = performance.now();
    const result = fib(n);
    const end = performance.now();
    console.log(`fib(${n}) = ${result}, выполнено за ${(end - start).toFixed(3)} милисекунды`);
}

//Тесты 
const   testValues = [5, 10, 15, 20, 24];
testValues.forEach(n => measuringtheexecutiontime(n));