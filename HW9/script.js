const main = document.getElementById("main_div");
const gnrtBlock = document.querySelector("#generate");
const swithColor = document.querySelector("#switch_color");


const mainStyle = {
    width: '125px',
    height: '125px',
    display: 'flex',
    flexWrap: 'wrap',
}

for(let key in mainStyle){
    main.style[key] = mainStyle[key]
}


function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const mainColor = `rgb(${red}, ${green}, ${blue})`;
    return mainColor 
}


const generateBlocks = () => {
    for(let i = 0; i < 25; i++){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add('item');
        innerDiv.style.width = '25px';
        innerDiv.style.height = '25px';

        main.appendChild(innerDiv);
        
    }
}

const addItemColor = () => {
    const divs = Array.from(document.getElementsByClassName('item'));
    divs.forEach (function (div){
        div.style.backgroundColor = getRandomColor();
    })
}

function generateBlocksInterval(){
    setInterval(addItemColor, 1000)
}

gnrtBlock.onclick = function(){
    generateBlocks();
    addItemColor();
};
swithColor.onclick = function() {
    generateBlocksInterval();
}