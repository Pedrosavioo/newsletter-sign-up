let container = document.querySelector(".container");
let sign = document.getElementById("sign-up");
let btn = document.querySelector(".button-subscribe");

// problema: quando na tela mobile, o design fica diferente

btn.addEventListener("click", function(){

    container.style.display = "none";
    sign.classList.toggle("hide"); 
});