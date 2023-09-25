var sectionB = document.getElementsByClassName("sectionB");

var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm");

var errorMessage = document.getElementById("error-message");
var errorMessage_blank = document.getElementById("error-message-blank");

function showError() {
    
    password.classList.add("error");
    confirmPassword.classList.add("error");

    errorMessage.removeAttribute("hidden");
    errorMessage_blank.removeAttribute("hidden");
}

function removeError() {
    
    password.classList.remove("error");
    confirmPassword.classList.remove("error");

    errorMessage.setAttribute("hidden", true);
    errorMessage_blank.setAttribute("hidden", true);
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