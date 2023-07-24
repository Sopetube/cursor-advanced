const baseUrl = "http://swapi.dev/api/";
const planetsUrl = `${baseUrl}planets`;
let nextPageUrl = null;
const root = document.querySelector(".root");
const nextBtn = document.getElementById("next_btn");
const pre = document.getElementById("prev");
let prePageUrl = null;
const movieNum = document.getElementsByClassName("input");

async function fetchData(url){
    const response = await fetch(url);
    return await response.json();
}
fetchData(baseUrl);

async function getFilmsInfo(){
    const value = movieNum[0].value ? movieNum[0].value : 2;
    const url = `${baseUrl}films/${value}`
    document.getElementById('card_box').innerHTML = '';
    
    fetchData(url).then((response) => {
        response.characters.forEach((charUrl) => {
            fetchData(charUrl).then((charResponse) => {
                let charId = parseInt((charResponse.url).replace(/\D+/g, ""));
                const html = `
                    <div id="char_card">
                    <img src="./images/${charId}.jpg">
                    <h2>${charResponse.name}</h2>
                    <div>${charResponse.birth_year}</div>
                    <div>${charResponse.gender}
                    </div>
                    `;
                document.getElementById('card_box').innerHTML += html;
            })
        })
    })
}

 


const getPlanetsList = (list) => {
    let planetsList = '';
    list.forEach((planetInfo) => {
        const htmlList = `
        <li>${planetInfo.name}</li>
        `
        planetsList += htmlList
    })

    return planetsList;
}

async function getPlanets(url = planetsUrl){
    
    fetchData(url).then((response) => {
            nextBtn.style.display = response.next ? 'block' : 'none' ;
            nextPageUrl = response.next;

            pre.style.display = response.previous ? 'block' : 'none';
            prePageUrl = response.previous;


            const planetList = getPlanetsList(response.results);
            root.innerHTML = planetList;
        })
}

nextBtn.addEventListener('click', () => {
    getPlanets(nextPageUrl);
})

pre.addEventListener('click', () => {
    getPlanets(prePageUrl);
})