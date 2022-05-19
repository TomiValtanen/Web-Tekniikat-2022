
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

