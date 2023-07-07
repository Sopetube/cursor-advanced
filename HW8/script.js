class Student {
    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.dismissed = false;
      this.marks = [4, 5, 5, 4];
    }
    
    getInfo() {
        return `Студент ${this.course} ${this.university}, ${this.fullName}`;
    }
    
    get studentMarks() {
      return this.dismissed ? null : this.marks
    }
    
    set setMarks(value) {
        if(!this.dismissed){
            this.marks.push(value);
        }
    }
    getAverageMark(){
        let count = 0;
        for(let i = 0; i < this.marks.length; i++){
            count += this.marks[i];
        }
        return count / this.marks.length;
    }
    dismiss(){
        this.dismissed = true
    }
    recover(){
        this.dismissed = false
    }
  }

const roman = new Student(
    "Вищої Школи Психотерапії м.Одеса",
    "1го курсу",
    "Остап Родоманський Бендер"
    );


class BudgetStudent extends Student{
    constructor(university, course, fullName){
        super(university, course, fullName)
        console.log(this.studentMarks)
        setInterval(() => {
            this.getScholarship()
        }, 1000);
    } 
    getScholarship(){
        if(this.getAverageMark() >= 4 && !this.dismissed){
            console.log('Ви отримали 1400 грн. стипендії');
        } else {
            console.log('Ви не отримуєте стипендію');
        }
    }
}
const olha = new BudgetStudent(
    "Вищої Школи Психотерапії м.Одеса",
    "1го курсу",
    "Ольга Родоманська Бендер"
    );    

olha.dismiss();
olha.recover();


console.log(roman.getInfo());
console.log(roman.studentMarks);
roman.setMarks = 5;
console.log(roman.studentMarks);
console.log(roman.getAverageMark());
roman.dismiss();
console.log(roman.studentMarks);
roman.recover();
console.log(roman.studentMarks);

