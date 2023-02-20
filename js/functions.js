//1. Функция для проверки длины строки.

function checkLength (string, maxLength) {
  return (string.length <= +maxLength) ? 'true' : 'false';
}

console.log(checkLength('проверяемая строка', 10));

//2. Функция для проверки, является ли строка палиндромом.

function isPalindrome (string) {
  return string.replaceAll(' ', '').split('').reverse().join('').toLowerCase() === string.replaceAll(' ', '').toLowerCase() ? 'isPalindrome' : 'noPalindrome';
}

console.log(isPalindrome ('Лёша на полке клопа нашёл '));

// 3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9

function getNumbers (string) {
  let numbers = '';
  for (let i = 0; i <= string.length; i++) {
    if (string.at(i) <= 9) {
      numbers = numbers + +string.at(i);
    }
  }
  return numbers;
}

console.log(getNumbers ('1 кефир, 0.5 батона')); // ??? Почему в таком варианте пробел добавляется в результат и функция работает некорректно?

//4. Функция возвращает исходную строку, дополненную указанными символами до заданной длины.

function fixSymbol(string, minLength, symbol) {
  let quantitySymbols = minLength - (string).length, repeatSymbol = '';
  for (; quantitySymbols > 0; quantitySymbols--) {
    repeatSymbol += symbol.slice(0, quantitySymbols);
  }

  return (symbol === undefined || symbol === '') ? string : repeatSymbol + string;
}

document.writeln(fixSymbol('1', 2, '0'));
// Как сделать, чтобы 4я функция работала не только с числами и выводила результат через console.log?
