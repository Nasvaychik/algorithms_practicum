// Функция для декодирования строки по алгоритму Хаффмана
function huffman_decode(symbolCount, encodedSize, codes, encodedString) {
    // Инвертируем словарь кодов для поиска символов по кодам
    const reversedCodes = Object.fromEntries(
        Object.entries(codes).map(([char, code]) => [code, char])
    );

    let decodedString = "";
    let buffer = "";

    // Проходим по закодированной строке, восстанавливая исходные символы
    for (const bit of encodedString) {
        buffer += bit;
        if (reversedCodes[buffer]) {
            decodedString += reversedCodes[buffer];
            buffer = "";
        }
    }

    // Вывод восстановленной строки
    console.log(decodedString);
    return decodedString;
}

// Пример вызова функции
const symbolCount = 12;
const encodedSize = 60;
const codes = {
    ' ': '1011',
    '.': '1110',
    'D': '1000',
    'c': '000',
    'd': '001',
    'e': '1001',
    'i': '010',
    'm': '1100',
    'n': '1010',
    'o': '1111',
    's': '011',
    'u': '1101'
};
const encodedString = "100011110001001101000111111011001010011000010110011010111110";

huffman_decode(symbolCount, encodedSize, codes, encodedString); // Ожидаемый вывод: Docendo discimus.