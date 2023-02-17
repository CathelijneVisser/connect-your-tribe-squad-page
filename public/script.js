let button = document.querySelector(".freeze");
let articles = document.querySelectorAll("article");
let li = document.querySelectorAll("li");


button.addEventListener("click", stop);

li.forEach((list) => {
    link.addEventListener("click",focus);
})


function stop () {
    articles.forEach(article => {
        article.classList.toggle("pause")
    });
}

function focus () {
    button.focus()
}