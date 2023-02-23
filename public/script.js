let button = document.querySelector(".freeze");
let articles = document.querySelectorAll("article");


button.addEventListener("click", stop);


function stop () {
    
    articles.forEach(article => {
        article.classList.toggle("pause")
    });
}

