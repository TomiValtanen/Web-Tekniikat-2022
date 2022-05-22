//queryselectorit
let modal=document.querySelector(".modal");
let img = document.querySelector("#wow");
let modalImg = document.querySelector("#img01");
//eventlistener click
img.addEventListener("click",modalOpen);
// modalin aukasua varten funktio
function modalOpen(){
  modal.style.display = "block";
  modalImg.src = this.src;
  }
// modalin sulkemista varten queryslectorit ja eventlistenerit funktioineen
let modalBtn=document.querySelector(".modal button");
let modalBtnClose=document.querySelector("div.modal-footer button");
modalBtn.addEventListener("click",closeModal);
modalBtnClose.addEventListener("click",closeModal);
function closeModal(){
    modal.style.display = "none";
}