

let workPlaces = [
    {
        workPlaceName: "Ristijärven rakennus oy",
        timeSpent: "3 viikkoa",
        duties: "Saneeraustyömaalla rakennusapumiehenä",
        class:"raksa",

    },
    {
        workPlaceName: "Koulunkäynti avustaja",
        timeSpent: "1kk",
        duties: "Avustajana toimiminen yleisopetuksen luokissa. Lisäksi avustajana erityisopetuksen luokissa.",
        class:"muu",
    },
    {
        workPlaceName: "Mehiläinen , Tipaskoti",
        timeSpent: "2 vuotta",
        duties: "Lähihoitajan toimenkuva. Lääkehoito. Vanhusten viriketuokiot, ruuanlaitto ja siivoaminen",
        class:"lähihoitaja",
    },
    {
        workPlaceName: "Terveystalo julkisetpalvelut oy",
        timeSpent: "3,5 vuotta",
        duties: "Lähihoitajan toimenkuva. Lääkehoito, jokapäiväiset askareet , ruuanlaitto ja henkilön omien menojen mukaiset toimet.",
        class:"lähihoitaja",
    },
    {
        workPlaceName: "Kajaanin varuskunnan terveysasema",
        timeSpent: " 5kk",
        duties: "Armeijan aikana pääsin olemaan hammaspoliklinikalla. Siellä työhön kuului instrumenttihuolto, ajanvaraus ja hammaslääkärin avustaminen",
        class:"muu",
    },
    {
        workPlaceName: "Rakennusliike halonen oy",
        timeSpent: " 2kk",
        duties: "Rakennusapumiehenä",
        class:"raksa",
    },
    {
        workPlaceName: "Hieroja yrittäjänä",
        timeSpent: " 1v",
        duties: "Hierojan toimenkuvaan liittyvät työtehtävä",
        class:"muu",
    }
];

let button = document.querySelector("#section3 button");
button.addEventListener("click", workExp);

function workExp() {

    button.style.display = "none";
    document.querySelector("form").style.display="block";

    let divWork = document.querySelector("#section3");
    let span = document.createElement("span");
    span.id = "workStuff";

    let newDiv = '<div class="row row-cols-1 row row-cols-sm-2 row-cols-lg-3  row-cols-xxl-4 my-3 mx-0 mx-md-5 ">';
    for (let i = 0; i < workPlaces.length; i++) {
        newDiv += '<div class="col my-3 my-sm-1">'; 
        newDiv += '<div class="card p-3 mx-1">';
        newDiv += '<div class="card-body">';
        newDiv += "<h5>" + workPlaces[i].workPlaceName + "</h5>";
        newDiv += "<h6>" + workPlaces[i].timeSpent + "</h6>";
        newDiv += '<p>' + workPlaces[i].duties + "</p>";
        newDiv += "</div>";
        newDiv += "</div>";
        newDiv += "</div>";
    };
    newDiv += "</div>";

    divWork.appendChild(span);
    document.getElementById("workStuff").innerHTML = newDiv;
    let cardDiv= document.querySelectorAll("#workStuff div.col");
    for (let i=0;i<cardDiv.length;i++){
        cardDivArray.push(cardDiv[i]);
    }
    
    
}
let cardDivArray=[];

let form= document.querySelector("form");
form.addEventListener("change",formInput);

function formInput(event){
    

if (event.target.id=="hoitaja"){
    for(let i=0; i<workPlaces.length;i++){
        if(workPlaces[i].class=="lähihoitaja"){
            cardDivArray[i].style.display="block";
        }
        else {
            cardDivArray[i].style.display="none";
        }
    }
}
else if (event.target.id=="rakennusala"){
    for(let i=0; i<workPlaces.length;i++){
        if(workPlaces[i].class=="raksa"){
            cardDivArray[i].style.display="block";
        }
        else {
            cardDivArray[i].style.display="none";
        }
    }
}
else if (event.target.id=="muu"){
    for(let i=0; i<workPlaces.length;i++){
        if(workPlaces[i].class=="muu"){
            cardDivArray[i].style.display="block";
        }
        else {
            cardDivArray[i].style.display="none";
        }
    }
}
else{
    for(let i=0; i<workPlaces.length;i++){
        cardDivArray[i].style.display="block";
    }
}
}

