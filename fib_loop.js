// Сама функция 
function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    let prev = 1, curr = 1;
    for (let i = 3; i <= n; i++) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return curr;
}

// Замеры времени выполнения для нескольких ззначений n
const testValues = [5, 10, 15, 20, 30];
testValues.forEach(n => {
     const startTime = performance.now(); 
    const result = fib(n); 
    const elapsedTime = performance.now() - startTime; 
    console.log(`n = ${n}, Фибоначчи = ${result}, Время = ${elapsedTime.toFixed(4)} мс`);
});