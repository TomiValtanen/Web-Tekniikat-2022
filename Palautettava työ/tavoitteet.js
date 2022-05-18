let persoona = document.querySelector("#navUl li:nth-child(2)");
let mietteitä = document.querySelector("#navUl li:last-child");


persoona.addEventListener("click", openPersoona);
mietteitä.addEventListener("click", openMietteitä);

function openPersoona() {
    document.querySelector("div.mietteitä").style.display = "none";
    document.querySelector("div.persoona").style.display = "block";
}

function openMietteitä() {
    document.querySelector("div.persoona").style.display = "none";
    document.querySelector("div.mietteitä").style.display = "block";
}

function readMore(site) {
    let dots = document.querySelector(`.blog-post[data-site="${site}"] .dots`);
    let moreText = document.querySelector(`.blog-post[data-site="${site}"] .more`);
    let btnText = document.querySelector(`.blog-post[data-site="${site}"] .myBtn`);


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Lue lisää";
        moreText.style.display = "none";

    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Piilota";
        moreText.style.display = "inline";
    }
}