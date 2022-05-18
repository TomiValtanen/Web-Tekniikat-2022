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

/*Tälläistä myös olin ajatellut , mutta laitoin sitten tuon toisen kun tahoin transition 
,että se olisi omasta mielestä hieman smoothimpi eikä töks töks. HTML puolella sitten oli noi
...(.dots) ja tuo (.more). css puolella oli .more laitettu display none.

*/

/*function readMore(site) {
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
}*/
function readMore(site){
    let p = document.querySelector(`.blog-post[data-site="${site}"] p:nth-child(3)`);
    let btnText = document.querySelector(`.blog-post[data-site="${site}"] .myBtn`);
    if (p.classList.contains('collapsePara')===false) {
        p.classList.add('collapsePara');
        btnText.innerHTML = "Piilota";
      } else {
        p.classList.remove('collapsePara');
        btnText.innerHTML = "Lue lisää";
      }
}

let modal=document.querySelector(".modal");
var img = document.querySelector("#wow");
var modalImg = document.getElementById("img01");

img.addEventListener("click",modalOpen);

function modalOpen(){
  modal.style.display = "block";
  modalImg.src = this.src;
  }

let modalBtn=document.querySelector(".modal button");
let modalBtnClose=document.querySelector("div.modal-footer button");
modalBtn.addEventListener("click",closeModal);
modalBtnClose.addEventListener("click",closeModal);
function closeModal(){
    modal.style.display = "none";
}