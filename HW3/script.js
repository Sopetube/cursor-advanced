// let number = +prompt('input', "");
// function getMaxDigit(number) {
//     const arr = number.toString().split('');
//     return Math.max(...arr)
// }
// // const maxNumber = getMaxDigit(number);
// // console.log(maxNumber);

// // 2nd

// let yourName = prompt('Input your name', '')

// function toUppercase(param){
//     let name = param.toLowerCase();
//     name = name[0].toUpperCase() + name.slice(1);
//     return name
// }
// console.log(toUppercase(yourName))

// // 3rd

// let salary = +prompt('Input a salary','');

// function totalProfit(sum){
//     const tax1 = sum / 100 * 18;
//         tax2 = sum / 100 * 1.5;
//         profit = sum - tax1 - tax2;
//     return profit
// }
// console.log(totalProfit(salary))

// 4

// let start = +prompt('З якого числа','');
// let end = +prompt('По яке число','');

// function randomNum(start,end){
//     return Math.round(Math.random() * (end - start + 1) + start);
// }

// console.log(randomNum(start,end))

// 5

function currencyConvertor(amount, currency){
    let rate = 37;
    if (currency.includes('$')){
            const toUah =  amount * rate;
            return currencyConvertor + (amount + ' USD🇺🇸 to UAH🇺🇦 ' + '= ' + toUah);
        } else {
            const toUsd = amount / rate;
            return currencyConvertor + (amount + ' UAH🇺🇦 to USD🇺🇸 ' + '= ' + toUsd);
    }
}
console.log(currencyConvertor(100, '$'))





// function currencyConvertor(amount, currency){
//     let rate = 37.5;
//     if (currency.includes('$')){
//             const toUah =  amount * rate;
//             console.log(amount + ' USD🇺🇸 to UAH🇺🇦 ' + '= ' + toUah);
//         } else {
//             const toUsd = amount / rate;
//             console.log(amount + ' UAH🇺🇦 to USD🇺🇸 ' + '= ' + toUsd);
//     }
//     return currencyConvertor
// }
// console.log(currencyConvertor(100, '$'))
