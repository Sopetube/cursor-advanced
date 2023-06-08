let hat = 15.678;
let bag = 123.965;
let shoes = 90.2345;
let min = Math.min(hat, bag, shoes);
let max = Math.max(hat, bag, shoes);

console.log('Min value: ', min)
console.log('Max value: ', max);

let sum = hat+bag+shoes;
console.log('Sum: ', sum);
console.log('Floor price of hat: ', Math.floor(hat));
console.log('Floor price of bag: ', Math.floor(bag));
console.log('Floor price of shoes: ', Math.floor(shoes));

let sumTotal = Math.floor(hat)+Math.floor(bag)+Math.floor(shoes);
console.log('Sum of floor prices: ', sumTotal);

let sumRounded = Math.round(sum / 100) * 100;
console.log('Sum rounded: ', sumRounded);

let isSumEven = Math.floor(sum) % 2 === 0;
console.log("Is sum even?", isSumEven);

let remainder = 500 - sum;
console.log("Remainder:", remainder);

let avgValue = (hat + bag + shoes) / 3;
avgValue = avgValue.toFixed(2);
console.log("Average value:", +avgValue);

// HARD
let Discount = +Math.ceil(Math.random() * 100).toFixed(2);
console.log('Discount: ', Discount);

let amount = +(sum * (Discount / 100)).toFixed(2);
console.log('Total with discount: ', amount);

let price = + ( (sum / 100) * 10).toFixed(2);
let cost = (sum / 2).toFixed(2)
let earn = (cost - price);
console.log('Clean Earn:', earn);

let price2 = + ( (sum / 100) * 90).toFixed(2);
let cost2 = (sum / 2).toFixed(2)
let earn2 = +(cost2 - price2).toFixed(2);
console.log('Clean Earn 2nd:', earn2);
// Advanced

const fullInfo = `
Min value: ${min}, Max value: ${max}, Sum: ${sum}, Sum of floor prices: ${sumTotal}, Sum rounded: ${sumRounded}, Is sum even? ${isSumEven}, Remainder: ${remainder}, Average value: ${avgValue}, Discount: ${Discount}, Total with discount: ${amount}, Clean Earn: ${earn}, Clean Earn 2nd: ${earn2}
`;
console.log(fullInfo);