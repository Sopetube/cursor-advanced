const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"],
    man = ["Олександр", "Ігор","Олексій"],
    woman = ["Олена", "Іра", "Світлана"],
    themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"],
    marks = [4, 5, 5, 3, 4, 5];
    
let groups = [],
    groupProject = [],
    stundentMark = [], 
    groupMarks = [];

function groupCreator(){ 
    groups = man.map(function(guy,index){
    return [guy, woman[index]]
})
}

function createProject(){ 
    groupProject = groups.map(function(grp,index){
    return [grp.join(' i '), themes[index]]
})
}

function createMark(){ 
    stundentMark = students.map(function(student,index){
    return [student, marks[index]]
})
}

function createRanomMark(){ 
    groupProject = groupProject.map(function(item,index){
    const randomMark = Math.ceil(Math.random() * 5).toFixed(0)
    return [...item, randomMark,]
})
}


groupCreator();
createProject();
createMark();
createRanomMark();

console.log(groupProject)