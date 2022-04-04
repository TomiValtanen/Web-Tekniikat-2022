document.getElementById("submit").onclick=function(){
    document.getElementById("fname").innerHTML="";
    let inputField = document.getElementById("fname").value;
    let danger = document.getElementById("alert-danger");
    let safe = document.getElementById("alert-success");



    if (inputField.length > 0 ) {
        safe.style.display = "block";

        danger.style.display = "none";



    }
    else {
        danger.style.display = "block";

        safe.style.display = "none";


    }
    return false;

}