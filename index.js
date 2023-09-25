var sectionB = document.getElementsByClassName("sectionB");

var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm");

var errorMessage = document.getElementById("error-message");
var errorMessage_blank = document.getElementById("error-message-blank");

var button = document.getElementById("submit");

function showError() {
    
    password.classList.add("error");
    confirmPassword.classList.add("error");

    errorMessage.removeAttribute("hidden");
    errorMessage_blank.removeAttribute("hidden");

    button.classList.add("disabled");
    button.disabled = true;
}

function removeError() {
    
    password.classList.remove("error");
    confirmPassword.classList.remove("error");

    errorMessage.setAttribute("hidden", true);
    errorMessage_blank.setAttribute("hidden", true);

    button.classList.remove("disabled");
    button.disabled = false;
}

password.addEventListener("change", ()=>{
    
    var pass = password.value;
    var confirm = confirmPassword.value;

    console.log(pass, confirm);

    if(pass !== confirm){
        showError();

    } else {
        removeError();
    }

}, true);

confirmPassword.addEventListener("change", ()=>{
    
    var pass = password.value;
    var confirm = confirmPassword.value;

    console.log(pass, confirm);

    if(pass !== confirm){
        showError();

    } else {
        removeError();
    }

}, true);