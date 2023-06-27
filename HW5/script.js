// (1).2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

let numbers = [1, 2, 3, 4, 5, 5, 4, 322, 2, 2, 2];
function getModa(numbers) {
    let max = 0;
    let number = 0;
        // min = 0;
    numbers.forEach(element => {
        const adad = numbers.filter(el => el = element && Number.isInteger(element));
        if(adad.length > max){
            number = element;
        }
    });
    return number
}
console.log(getModa(numbers))

// =======================================================================
// (2).3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
// всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
let counter = 0;

const getAverage = arr.reduce(function (acc, currItem) {
    if (Number.isInteger(currItem)){
        counter++
        return acc + currItem
    } else {
        return acc
    }
}, 0)

console.log(getAverage / counter)

// =======================================================================

//(3).5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
// передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(numbers) {
    const even = numbers.filter(num => num % 2)
    return even
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// =======================================================================
// (4).6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
// чисел більших
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(numbers){
    let counter = numbers.filter(num => num > 0)
        return counter.length
};

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// =======================================================================

// (5).7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
// в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(numbers){
    return numbers.filter(num => !(num % 5))
}
console.log(getDividedByFive([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));

// =======================================================================

// (6).8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
// замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
// розбити масив на слова за допомогою функції .split(" "), після чого масив
// необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
// можливість розширювати cписок цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
// kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

let www = "hello motherfucker fuck shit"
const shit = 'shit',
      fuck = 'fuck';

function replaceBadWords(string){
    return string.split(' ').map(function (word){
        if(word.includes(shit)){
            return word.replaceAll(shit, '****');
        } else if(word.includes(fuck)) {
            return word.replaceAll(fuck, '****');
        }
        return word
    }) 
}
console.log(replaceBadWords(www));
