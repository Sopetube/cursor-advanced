//1
// let digits = +prompt('Input digits:');
// let array = digits;
// function getMaxDigit(){
//     return Math.max(1,2,3,4,5,6);
// }



// digits = +prompt('input');
// console.log(Math.max(digits));


let digits = +prompt('input', "");
console.log(digits);
let array = (""+digits).split("").map(Number);

for (let i=1; i<=array.length; i++){
    console.log(Math.max[array]);
}
// console.log(array);