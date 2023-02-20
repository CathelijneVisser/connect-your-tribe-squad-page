let button = document.querySelector(".freeze");
let articles = document.querySelectorAll("article");
var input = document.getElementById("myRange");
var output = document.getElementById("value");
value.textContent = input.value


button.addEventListener("click", stop);
input.addEventListener("input", slider);


function stop () {
    
    articles.forEach(article => {
        article.classList.toggle("pause")
    });
}

function slider (event) {
  value.textContent = event.target.value
}