
var form = document.querySelector("form");

form.addEventListener("submit", function(enviar){
    var data = new FormData(form);
    var output = "";
    for (const entry of data){
        output = `Você selecionou ${entry [1]} de 5`;
        star.innerText = "";
        txt.innerText = "";
        evaluation.innerText = "";
        imgres.setAttribute('src', 'images/illustration-thank-you.svg');
   
        res.innerText = output;
        txtres.innerText = "Obrigada!"
        txt2res.innerText = "Nós agradecemos por responder a pesquisa. Caso tenha alguma dúvida, entre em contato!"
    };

    enviar.preventDefault();
}, false);




