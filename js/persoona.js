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