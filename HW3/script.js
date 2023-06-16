// 1st (#1 from exercises)
// let number = +prompt('input', "");
// function getMaxDigit(number) {
//     const arr = number.toString().split('');
//     return Math.max(...arr)
// }
// // const maxNumber = getMaxDigit(number);
// // console.log(maxNumber);

// // 2nd (#3 from exercises)

// let yourName = prompt('Input your name', '')

// function toUppercase(param){
//     let name = param.toLowerCase();
//     name = name[0].toUpperCase() + name.slice(1);
//     return name
// }
// console.log(toUppercase(yourName))

// // 3rd (#4 from exercises)

// let salary = +prompt('Input a salary','');

// function totalProfit(sum){
//     const tax1 = sum / 100 * 18;
//         tax2 = sum / 100 * 1.5;
//         profit = sum - tax1 - tax2;
//     return profit
// }
// console.log(totalProfit(salary))

// 4 (#5 from exercises)

// let start = +prompt('З якого числа','');
// let end = +prompt('По яке число','');

// function randomNum(start,end){
//     return Math.round(Math.random() * (end - start + 1) + start);
// }

// console.log(randomNum(start,end))

// 5+6 (#7+#8 from exercises)

const answer = prompt('ddfdfdf', '');

function currencyConvertor(response){
    let rate = 37;
    if (response.includes('$')){
        const toUah =  parseInt(response) * rate;
        return (parseInt(response) + ' USD🇺🇸 to UAH🇺🇦 ' + '= ' + toUah.toFixed(2));
    } if (response.toLowerCase().includes('uah')){
        const toUsd = parseInt(response) / rate;
        return (parseInt(response) + ' UAH🇺🇦 to USD🇺🇸 ' + '= ' + toUsd.toFixed(2));
    } else {
        return 'Невідома валюта'
    }
}

console.log(currencyConvertor(answer))