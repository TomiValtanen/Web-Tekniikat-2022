let button = document.querySelector("#section3 a");
button.addEventListener("click", workExp);

let workPlaces = [
    {
        workPlaceName: "Ristijärven rakennus oy",
        timeSpent: "3 viikkoa",
        duties: "Saneeraustyömaalla rakennusapumiehenä",

    },
    {
        workPlaceName: "Koulunkäynti avustaja",
        timeSpent: "1kk",
        duties: "Avustajana toimiminen yleisopetuksen luokissa. Lisäksi avustajana erityisopetuksen luokissa.",

    },
    {
        workPlaceName: "Mehiläinen , Tipaskoti",
        timeSpent: "2 vuotta",
        duties: "Lähihoitajan toimenkuva. Lääkehoito. Vanhusten viriketuokiot, ruuanlaitto ja siivoaminen",

    },
    {
        workPlaceName: "Terveystalo julkisetpalvelut oy",
        timeSpent: "3,5 vuotta",
        duties: "Lähihoitajan toimenkuva. Lääkehoito, jokapäiväiset askareet , ruuanlaitto ja henkilön omien menojen mukaiset toimet.",

    },
    {
        workPlaceName: "Sotilaslääketieteen keskuksessa, Kajaanin varuskunnan terveysaseman hammaspoliklinikalla",
        timeSpent: " 5kk",
        duties: "Instrumenttihuolto, ajanvaraus ja hammaslääkärin avustaminen",

    },
    {
        workPlaceName: "Rakennusliike halonen oy",
        timeSpent: " 2kk",
        duties: "Rakennusapumiehenä",

    },
    {
        workPlaceName: "Hieroja yrittäjänä",
        timeSpent: " 1v",
        duties: "Hierojan toimenkuvaan liittyvät työtehtävä",

    }
];

function workExp() {
    button.style.display = "none";

    let divWork = document.querySelector("#section3");
    let span = document.createElement("span");
    span.id = "työhommat";

    let newDiv = '<div class="row row-cols-1 row row-cols-sm-2  row-cols-lg-3 my-3 mx-5 ">';
    for (let i = 0; i < workPlaces.length; i++) {
        newDiv += '<div class="col my-3 my-sm-1">'; 
        newDiv += '<div class="card p-3 mx-1"">';
        newDiv += '<div class="card-body">';
        newDiv += "<h5>" + workPlaces[i].workPlaceName + "</h5>";
        newDiv += "<h6>" + workPlaces[i].timeSpent + "</h6>";
        newDiv += "<p>" + workPlaces[i].duties + "</p>";
        newDiv += "</div>";
        newDiv += "</div>";
        newDiv += "</div>";
    };
    newDiv += "</div>";

    divWork.appendChild(span);
    document.getElementById("työhommat").innerHTML = newDiv;

}
