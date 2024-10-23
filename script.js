
const content = document.querySelector('#content');
let page = 0;
let pageSize = 8;

const prev = document.getElementById("prev");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const next = document.getElementById("next");

const pages = [one, two, three, four];

function fetchdata(data) {
    // fetch("https://dummyjson.com/recipes?Limit=1000")
    // .then((res) => res.json())
    // .then(showData);
    showData(data);
}

function showData(data) {
    const recipes = Sampledata;
    let newData = recipes.slice(pageSize * page, pageSize * (page + 1));
    // console.log(data);
    // pushCards([1,2,3,4,5,6,7,8]);
    pushCards(newData);
}
function pushCards(data) {
    data?.forEach((item) => {
        console.log(item);
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = item.name;
        content.append(card);
    });
}

function runApp() {
    setActive();

    fetchdata();
}
runApp();


function setActive() {
    if (page === 0) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }
    if (page === 3) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = 'visible';
    }

    pages.forEach(item => item.classList.remove("active"));
    pages[page].classList.add("active");
}

pages.forEach((item) => {
    item.addEventListener("click", (event) => {
        page = Number(event.target.innerText) - 1;
        content.innerHTML = "";
        fetchdata();
        setActive();
    })
});

prev.addEventListener("click", event => {
    if (page > 0) page--;
    content.innerHTML = '';
    fetchdata();
    setActive();
})
next.addEventListener("click", event => {
    if (page < pages.length) page++;
    content.innerHTML = '';
    fetchdata();
    setActive();
});