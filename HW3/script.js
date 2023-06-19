// 1st (#1 from exercises)
let num = +prompt('Введіть значення в якому потрібно знайти найбільше число:', '');

function getMaxDigit(number) {
    const arr = number.toString().split('');
    return Math.max(...arr)
}
// console.log(getMaxDigit(num));

// ======================================================
// 2nd (#3 from exercises)
let yourName = prompt('Введіть ім\'я для форматування:', '')

function toUppercase(param){
    let name = param.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);
    return name
}
// console.log(toUppercase(yourName))

// ======================================================
// // 3rd (#4 from exercises)

let salary = +prompt('Впишіть значення заробітньої плати:','');

function totalProfit(sum){
    const tax1 = sum / 100 * 18;
        tax2 = sum / 100 * 1.5;
        profit = sum - tax1 - tax2;
    return profit.toFixed(2)
}
// console.log(totalProfit(salary))

// ======================================================
// 4 (#5 from exercises)
let start = +prompt('З якого числа генеруємо число:','');
let end = +prompt('По яке число генеруємо','');

function randomNum(start,end){
    return Math.round(Math.random() * (end - start + 1) + start);
}

// console.log(randomNum(start,end))

// ======================================================
// 5+6 (#7+#8 from exercises)
const answer = prompt('Введіть суму та валюту ("напр. 100$")', '');

function currencyConvertor(response){
    let rate = 37;
    if (response.includes('$')){
        const toUah =  parseInt(response) * rate;
        return (parseInt(response) + '$🇺🇸 to UAH🇺🇦 ' + '= ' + toUah.toFixed(2) + 'UAH');
    } if (response.toLowerCase().includes('uah')){
        const toUsd = parseInt(response) / rate;
        return (parseInt(response) + ' UAH🇺🇦 to $🇺🇸 ' + '= '  + '$' + toUsd.toFixed(2));
    } else {
        return 'Невідома валюта'
    }
}

// console.log(currencyConvertor(answer))

// ======================================================
// 7 (#6 from exercises)
const wrd = prompt('Введіть слово або речення в якому будемо рахувати кількість вживання літери:', '');
const ltr = prompt('Введіть літеру для обрахунку кількості:', '');

function letterCounter(word, letter){
    let counter = 0;
    for (let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() === letter.toLowerCase()){
            counter++ 
        }
    }
    return counter
}
// console.log(letterCounter(wrd, ltr))

// ======================================================
// 8 (#10 from exercises)
const text = prompt('Текст в якому будемо видаляти букви:', '');
const letterWantToRemove = prompt('Літери які будемо видаляти:', '')

function toRemove(sentence, letterToRemove){
    sentence = sentence.toLowerCase().replaceAll(letterToRemove.toLowerCase(), '');
    return sentence
} 
// console.log(toRemove(text, letterWantToRemove))

console.log(`
Функція №1: ${getMaxDigit(num)}\n
Функція №2: ${toUppercase(yourName)}\n
Функція №3: ${totalProfit(salary)}\n
Функція №4: ${randomNum(start,end)}\n
Функція №5+6: ${currencyConvertor(answer)}\n
Функція №7: ${letterCounter(wrd, ltr)}\n
Функція №8: ${toRemove(text, letterWantToRemove)}`)