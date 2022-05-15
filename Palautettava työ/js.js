let button = document.querySelector("#section3 a");
button.addEventListener("click", workExp);

let workPlaces = [
    {
        workPlaceName: "Raksa1",
        timeSpent: "1 viikko",
        duties: "Apupoika",

    },
    {
        workPlaceName: "Koulunkäynti avustaja",
        timeSpent: "4kk",
        duties: "Tunneilla ohjastaminen ja auttaminen.Työhön tutustuminen",

    },
    {
        workPlaceName: "Mehiläinen , Tipaskoti",
        timeSpent: "2 vuotta",
        duties: "Lähihoitajan toimenkuva. Lääkehoito. Vanhusten viriketuokiot, ruuanlaitto ja siivoaminen",

    },
    {
        workPlaceName: "Henkilökohtainen avustaja",
        timeSpent: "6kk",
        duties: "Salillla käyminen ja ohjelman tekeminen. Avustaminen laitteissa ja uimassa käyminen.",

    },
    {
        workPlaceName: "Terveystalo",
        timeSpent: "3 vuotta",
        duties: "Lähihoitajan toimenkuva. Lääkehoito, jokapäiväiset askareet , ruuanlaitto ja henkilön omien menojen mukaiset toimet.",

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
