let btn = document.querySelector(".button-subscribe");

btn.addEventListener("click", function(e){
    
   e.preventDefault(); //parar envio formulário

    const sign = document.getElementById("sign-up");
    const container = document.querySelector(".container");
    const email = document.querySelector("#email");
    const spanEmail = document.querySelector(".email-entered");
    let value;

    
    if (email.value == '' || email.value == 'ash@loremcompany.com') {
        const pError = document.querySelector('#error')

        email.style.border = '1px solid var(--tomato)';
        email.style.background = 'hsl(5, 100%, 90%)';
        email.value = 'ash@loremcompany.com';
        pError.classList.toggle('hide')

    } else {
        container.style.display = "none";
        sign.classList.toggle("hide");
        
        value = email.value;
    
        spanEmail.innerHTML = value;
        spanEmail.style.color = '#000';
    }
});
