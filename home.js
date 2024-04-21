//função para validaçõs no formulário
const form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
    event.preventDefault();


    const formemail = document.getElementById("email")
    const emailValue = formemail.value.trim();


    if (emailValue === "" || !isEmailValid(emailValue)) {
        alert("por favor, preencha o seu email corretamente!")
        return;
    }
    form.submit();
});


function isEmailValid(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}/
    return emailRegex.test(email);

}

//função para redirecionamento ao wpp

function wpp(){
    let confirmacao = confirm("ao clicar em ok você será redirecionado para o nosso whatszapp, deseja prosseguir?")
}



