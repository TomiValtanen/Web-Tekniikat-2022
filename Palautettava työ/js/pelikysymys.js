const taskList = document.querySelector(".task-list");

const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");


let palikat=[
    {
        article :[],
        h2:[],
        pDate:[],
        pText:[],

    }
]

let page = 0;

for (let i = 1; i <= 50; i++) {
    let articlee = document.createElement("article");
    palikat[0].article.push(articlee);
    let h2=document.createElement("h2");
    h2.textContent="Malli otsikko"+i;
    palikat[0].h2.push(h2);
    let pDat=document.createElement("p");
    let pTex=document.createElement("p");
    pDat.textContent="Malli päivä"+i;
    pTex.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque ipsam reprehenderit sapiente, id adipisci enim nisi voluptas blanditiis dolorem eos sit voluptatem nihil obcaecati distinctio aliquam incidunt quis inventore!"+i;
    palikat[0].pDate.push(pDat);
    palikat[0].pText.push(pTex);
}

for (let i = 0; i < page + 5; i++) {
    taskList.appendChild(palikat[0].article[i]);
    taskList.appendChild(palikat[0].h2[i]);
    taskList.appendChild(palikat[0].pDate[i]);
    taskList.appendChild(palikat[0].pText[i]);
    
    
    
}

next.addEventListener("click", nextBtn);

function nextBtn() {
    if (page == palikat[0].h2.length - 5) {
        page = 0;
    }
    else {
        page += 5;
    }
    taskList.innerHTML = "";
    for (let i = page; i < page + 5; i++) {
    taskList.appendChild(palikat[0].article[i]);
    taskList.appendChild(palikat[0].h2[i]);
    taskList.appendChild(palikat[0].pDate[i]);
    taskList.appendChild(palikat[0].pText[i]);
    }
}
previous.addEventListener("click", previousBtn);

function previousBtn() {
    if (page == 0) {
        page=palikat[0].h2.length - 5;
    }
    else {
        page -= 5;
    }
    taskList.innerHTML = "";
    for (let i = page; i < page + 5; i++) {
        taskList.appendChild(palikat[0].article[i]);
        taskList.appendChild(palikat[0].h2[i]);
        taskList.appendChild(palikat[0].pDate[i]);
        taskList.appendChild(palikat[0].pText[i]);
    }
}

first.addEventListener("click", firstBtn);

function firstBtn() {
    page=0;
    taskList.innerHTML = "";
    for (let i = page; i < page + 5; i++) {
        taskList.appendChild(palikat[0].article[i]);
        taskList.appendChild(palikat[0].h2[i]);
        taskList.appendChild(palikat[0].pDate[i]);
        taskList.appendChild(palikat[0].pText[i]);
    }
}
last.addEventListener("click", lastBtn);
function lastBtn() {
    page=palikat[0].h2.length- 5;
    taskList.innerHTML = "";
    for (let i = page; i < page + 5; i++) {
        taskList.appendChild(palikat[0].article[i]);
        taskList.appendChild(palikat[0].h2[i]);
        taskList.appendChild(palikat[0].pDate[i]);
        taskList.appendChild(palikat[0].pText[i]);
    }
}


