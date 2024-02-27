
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  checkForm();  
})
email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})


function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === ""){
      errorInput(username, "Preencha o campo usuário")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailvalue = email.value;

    if (emailvalue === ""){
        errorInput(email, "O email é obrigatório.")
    }else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordvalue = password.value;

    if(passwordvalue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if(passwordvalue.length < 8){
        errorInput(password, " A senha precisa ter no mínimo 8 caracteres.");
    }else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}


function checkInputPasswordConfirmation(){
    const passwordvalue = password.value;
    const confirmationPasswordvalue = passwordConfirmation.value;

    if (confirmationPasswordvalue === ""){
        errorInput(passwordConfirmation, "A confimação de senha é obrigatória.")
    }else if(confirmationPasswordvalue !== passwordvalue){
        errorInput(passwordConfirmation,  "As senhas não são iguais.");
    }else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation(); 

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every((item)  =>{
    return item.className ===  "form-content"
  });

  if (isValid){
    alert('Cadastrado com sucesso!')
  }
}



function errorInput(input, message){
   const formItem = input.parentElement;
   const textMessage = formItem.querySelector('a');

   textMessage.innerText = message;

   formItem.className = "form-content error"
}