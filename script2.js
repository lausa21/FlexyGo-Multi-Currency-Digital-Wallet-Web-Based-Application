document.querySelector(".login-btn").addEventListener("click", function () {
    window.location.href = "login.html";
});

document.querySelector(".register-btn").addEventListener("click", function () {
    window.location.href = "register.html";
});

function validateLogin(event){
    event.preventDefault() 
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Fields must not be empty");
        return false;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Email must contain @ and .");
        return false;
    }

    alert("Login successful!");
    window.location.href = "HomePage.html";
    return true;
}

function validateRegister(event){
    event.preventDefault() 
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;

    if(email === "" || password === "" || confirm_password === ""){
        alert("Fields must not be empty");
        return false;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Email must contain @ and .");
        return false;
    }

    if(confirm_password != password){
        alert("The password confirmation doesn't exist");
        return false;
    }

    alert("Register Successful");
    window.location.href = "HomePage.html";
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('.login-btn2');
    loginBtn.addEventListener('click', validateLogin);
});

document.addEventListener('DOMContentLoaded', function () {
    const registerBtn = document.querySelector('.register-btn2');
    registerBtn.addEventListener('click', validateRegister);
});
