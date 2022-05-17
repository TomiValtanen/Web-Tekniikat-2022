let albumImg=[
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"',
    },
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"',
    },
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"' ,
    },
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"', 
    },
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"',
    },
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"',
    },
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"' ,
    },
    { 
        image:'src="./images/halxagon-gc745e5c81_1280.jpg"', 
    }

];





let button=document.querySelector(".harrastukset button");
button.addEventListener("click",album);


function album(){
    
    let lightBox='<div class="row row-cols-4">';
    for (let i=0; i<albumImg.length;i++){
        lightBox+='<div class="col">';
        lightBox+="<img "+ albumImg[i].image + ">";
        lightBox+="</div>";
    }
    lightBox+="</div>";
    document.getElementById("albumia").innerHTML=lightBox;
}