const taskList = document.querySelector(".task-list");

const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");


let palikat = [
    {
        article: [],
        h2: [],
        pDate: [],
        pText: [],
        buttons:[],

    }
]

let page = 0;

for (let i = 1; i <= 50; i++) {
    let articlee = document.createElement("article");
    let k= -1+i;
    articlee.id = "mallikas"+k;
    articlee.classList.add("blog-post");
    palikat[0].article.push(articlee);
    let h2 = document.createElement("h2");
    h2.textContent = "Malli otsikko" + i;
    h2.classList.add("blog-post-title");
    palikat[0].h2.push(h2);
    let pDat = document.createElement("p");
    let pTex = document.createElement("p");
    pDat.textContent = "Malli päivä" + i;
    pTex.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem aperiam quaerat voluptatum sapiente dicta necessitatibus ducimus illum repellendus cupiditate asperiores, omnis rerum optio natus voluptas rem quam nemo mollitia. Pariatur aperiam sunt, quia at sequi laborum voluptas dolorum vero doloremque. Iste autem dolore beatae repellendus est, odit esse corrupti ex, blanditiis totam quam non officia ipsum. Necessitatibus, reiciendis nemo! Placeat illum velit fugiat odio quasi iste eveniet ipsa minima, ad omnis inventore quibusdam quos mollitia at labore veritatis sit voluptatem. Illo laudantium maiores quod omnis dignissimos expedita provident mollitia! Minus atque itaque quos esse ex? Suscipit soluta corporis ex eligendi ducimus quis nostrum vitae, voluptatum, ullam reprehenderit nulla nam ipsum culpa possimus veniam voluptate temporibus explicabo iusto ipsa earum! Debitis modi, autem animi ratione, voluptate sit itaque iure esse deserunt rem vero accusantium commodi doloremque quia veniam quaerat vel sapiente atque ad natus ducimus cupiditate error possimus. Repudiandae, ducimus.";
    palikat[0].pDate.push(pDat);
    palikat[0].pText.push(pTex);
    pDat.classList.add("blog-post-meta");
    let button=document.createElement("button");
    button.textContent="Lue Lisää";
    button.classList.add("myBtn");
    palikat[0].buttons.push(button);

}

for (let i = 0; i < page + 5; i++) {
    taskList.appendChild(palikat[0].article[i]);
    palikat[0].article[i].appendChild(palikat[0].h2[i]);
    palikat[0].article[i].appendChild(palikat[0].pDate[i]);
    palikat[0].article[i].appendChild(palikat[0].pText[i]);
    palikat[0].article[i].appendChild(palikat[0].buttons[i]);
    palikat[0].buttons[i].onclick=function () {readMore('#mallikas'+[i])};





}
function readMore(id){
    let p = document.querySelector(`${id} p:nth-child(3)`);
    console.log(p);
    let btnText = document.querySelector(`${id} .myBtn`);
    if (p.classList.contains('collapsePara')===false) {
        p.classList.add('collapsePara');
        btnText.innerHTML = "Piilota";
      } else {
        p.classList.remove('collapsePara');
        btnText.innerHTML = "Lue lisää";
      }
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
        palikat[0].article[i].appendChild(palikat[0].h2[i]);
        palikat[0].article[i].appendChild(palikat[0].pDate[i]);
        palikat[0].article[i].appendChild(palikat[0].pText[i]);
        palikat[0].article[i].appendChild(palikat[0].buttons[i]);
        palikat[0].buttons[i].onclick=function () {readMore('#mallikas'+[i])};
    }
}
previous.addEventListener("click", previousBtn);

function previousBtn() {
    if (page == 0) {
        page = palikat[0].h2.length - 5;
    }
    else {
        page -= 5;
    }
    taskList.innerHTML = "";
    for (let i = page; i < page + 5; i++) {
        taskList.appendChild(palikat[0].article[i]);
        palikat[0].article[i].appendChild(palikat[0].h2[i]);
        palikat[0].article[i].appendChild(palikat[0].pDate[i]);
        palikat[0].article[i].appendChild(palikat[0].pText[i]);
        palikat[0].article[i].appendChild(palikat[0].buttons[i]);
        palikat[0].buttons[i].onclick=function () {readMore('#mallikas'+[i])};
    }
}

first.addEventListener("click", firstBtn);

function firstBtn() {
    page = 0;
    taskList.innerHTML = "";
    for (let i = page; i < page + 5; i++) {
        taskList.appendChild(palikat[0].article[i]);
        palikat[0].article[i].appendChild(palikat[0].h2[i]);
        palikat[0].article[i].appendChild(palikat[0].pDate[i]);
        palikat[0].article[i].appendChild(palikat[0].pText[i]);
        palikat[0].article[i].appendChild(palikat[0].buttons[i]);
        palikat[0].buttons[i].onclick=function () {readMore('#mallikas'+[i])};
    }
}
last.addEventListener("click", lastBtn);
function lastBtn() {
    page = palikat[0].h2.length - 5;
    taskList.innerHTML = "";
    for (let i = page; i < page + 5; i++) {
        taskList.appendChild(palikat[0].article[i]);
    palikat[0].article[i].appendChild(palikat[0].h2[i]);
    palikat[0].article[i].appendChild(palikat[0].pDate[i]);
    palikat[0].article[i].appendChild(palikat[0].pText[i]);
    palikat[0].article[i].appendChild(palikat[0].buttons[i]);
    palikat[0].buttons[i].onclick=function () {readMore('#mallikas'+[i])};
    }
}


