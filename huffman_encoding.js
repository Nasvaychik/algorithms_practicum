// Импортируем модуль для работы с приоритетной очередью
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node) {
        this.queue.push(node);
        this.queue.sort((a, b) => a.freq - b.freq);
    }

    dequeue() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }
}

// Узел дерева Хаффмана
class HuffmanNode {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

// Функция для построения дерева Хаффмана
function buildHuffmanTree(frequencies) {
    const pq = new PriorityQueue();

    // Создаем узлы для каждого символа и добавляем их в очередь
    for (const [char, freq] of Object.entries(frequencies)) {
        pq.enqueue(new HuffmanNode(char, freq));
    }

    // Строим дерево
    while (pq.size() > 1) {
        const left = pq.dequeue();
        const right = pq.dequeue();

        const newNode = new HuffmanNode(null, left.freq + right.freq);
        newNode.left = left;
        newNode.right = right;

        pq.enqueue(newNode);
    }

    return pq.dequeue();
}

// Функция для создания кодов Хаффмана
function generateHuffmanCodes(node, prefix = "", codes = {}) {
    if (!node) return;

    if (node.char !== null) {
        codes[node.char] = prefix;
    }

    generateHuffmanCodes(node.left, prefix + "0", codes);
    generateHuffmanCodes(node.right, prefix + "1", codes);

    return codes;
}

// Функция для кодирования строки по алгоритму Хаффмана
function huffman_encode(input) {
    // Подсчет частот символов
    const frequencies = {};
    for (const char of input) {
        frequencies[char] = (frequencies[char] || 0) + 1;
    }

    // Построение дерева Хаффмана
    const huffmanTree = buildHuffmanTree(frequencies);

    // Генерация кодов Хаффмана
    const huffmanCodes = generateHuffmanCodes(huffmanTree);

    // Кодирование строки
    let encodedString = "";
    for (const char of input) {
        encodedString += huffmanCodes[char];
    }

    // Вывод результатов
    console.log(Object.keys(frequencies).length, encodedString.length);
    for (const [char, code] of Object.entries(huffmanCodes)) {
        console.log(`'${char}': ${code}`);
    }
    console.log(encodedString);

    return { huffmanCodes, encodedString };
}

// Пример вызова функции
huffman_encode("Errare humanum est.");
