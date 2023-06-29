const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    }, 
    {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    }, 
    {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
}];
// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
// science"] - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
// замінити на пробіл

function getSubjects(student){
    const subjects =  Object.keys(student.subjects);
    const editedSubjects = subjects.map(subject => {
        const editedSubject = subject.replace('_', ' ');
        return editedSubject.charAt(0).toUpperCase() + editedSubject.slice(1);
    });
    return editedSubjects;
}


console.log(getSubjects(students[2]));

// =============================================
// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
// середню оцінку по усім предметам для переданого студента НЕ МАСИВА
// СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
// попередніх домашніх завданнях :)


function getAverageMark(student) {
    const marks = [].concat(...Object.values(student.subjects));
    const sum = marks.reduce((total, mark) => total + mark, 0);
    const average = sum / marks.length;
    return average.toFixed(2);
}
  
console.log(getAverageMark(students[2]));

// =============================================
// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
// "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
// переданому студенту (вам знадобиться функція з попереднього завдання).
// Повинна бути виведена інформація: курс, ім'я, середня оцінка.



function getStudentInfo(student){
    const name = student.name,
     course = student.course,
     averageMark = getAverageMark(student);

    return {name, course, averageMark}
}

console.log(getStudentInfo(students[1]))

// =============================================
// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students){
    let names = students.map(student => student.name);
    names.sort(function(a, b){
        if (a < b) {
            return -1;
        }
        if (a > b){
        return 1;
    }
    return 0
    });
    return names
}

console.log(getStudentsNames(students));

// =============================================
// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
// кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
    let bestAvg = 0;
    let bestStudent = '';

    students.forEach(student => {
        const avg = parseFloat(getAverageMark(student));
        if (avg > bestAvg) {
            bestAvg = avg;
            bestStudent = student.name;
        }
    });

    return bestStudent;
}

console.log(getBestStudent(students));

// =============================================
// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// повторень.

function calculateWordLetters(word) {
    const count = {};

    for (let i = 0; i < word.length; i++) {
        if (count[word[i]]) {
            count[word[i]] += 1;
        } else {
            count[word[i]] = 1;
        }
    }

    return count;
}

console.log(calculateWordLetters('тест'));