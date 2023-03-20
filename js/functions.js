//1. Функция для проверки длины строки.

const checkLength = (string, maxLength) =>
  (string.length <= +maxLength);

checkLength('проверяемая строка', 10);

//2. Функция для проверки, является ли строка палиндромом.

const isPalindrome = (string) =>
  string.replaceAll(' ', '').split('').reverse().join('').toLowerCase() === string.replaceAll(' ', '').toLowerCase();

isPalindrome ('Лёша на полке клопа нашёл ');

// 3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9

const findNumbers = (string) => {
  if (typeof string === 'number') {
    return +String(string).replaceAll('.', '').replaceAll('-', '');
  }

  let numbers = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      numbers += string.at(i);
    }
  }
  return parseInt(numbers,10);
};

findNumbers ('1 кефир, 0.5 батона');


//4. Функция возвращает исходную строку, дополненную указанными символами до заданной длины.

const addPadStart = (string, minLength, symbol) => {
  const quantitySymbols = minLength - string.length;
  if (quantitySymbols <= 0) {
    return string;
  }

  if (symbol.length === 1) {
    return symbol.slice(0, symbol.length) + symbol.repeat(quantitySymbols - symbol.length) + string;
  }

  if (symbol.length < minLength) {
    return symbol.slice(0, symbol.length - 1) + symbol.repeat(quantitySymbols - symbol.length) + string;
  } else {
    return symbol.slice(0, quantitySymbols - symbol.length) + string;
  }
};

addPadStart('1', 2, '0');
export {findNumbers};
