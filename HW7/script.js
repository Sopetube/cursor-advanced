const ukraine = { 
     tax: 0.195,
     middleSalary: 1789,
     vacancies: 11476
 };
const latvia = { 
     tax: 0.25,
     middleSalary: 1586,
     vacancies: 3921
 };
const litva = { 
     tax: 0.15,
     middleSalary: 1509,
     vacancies: 1114
 };


//  1 =========================================
function getMyTaxes(salary){
    return `the tax is ${salary * this.tax }`
}

console.log(getMyTaxes.call(ukraine, 1365));



//  2 =========================================
function getMiddleTaxes(county){
    return `avg tax in the country is ${this.middleSalary * this.tax }`
}

console.log(getMiddleTaxes.call(ukraine));


//  3 =========================================
function getTotalTaxes(country){
    let totalTaxes = this.tax * this.middleSalary * this.vacancies;
    return `the total taxes is ${totalTaxes.toFixed(2)}`
}
console.log(getTotalTaxes.call(ukraine));


//  4 =========================================
function getMySalary(country) {
    let salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    let taxes = country.tax;
    let profit = salary - (salary * taxes);
  
    let mySalary = {
        salary: salary,
        taxes: taxes,
        profit: profit.toFixed(2),
    }
  
    return mySalary;
}

setInterval(function() {
    console.log(getMySalary(ukraine));
}, 10000);

console.log(getMySalary(ukraine));