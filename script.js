let signUpBtn = document.querySelector(".signup-btn");
let signInBtn = document.querySelector(".signin-btn");
let tosignup = document.querySelector(".tosignup");
let tosignin = document.querySelector(".tosignin");
let signup = document.querySelector(".signup");
let signin = document.querySelector(".signIn");


signUpBtn.addEventListener("click", ()=>{
    tosignin.style.display = "block";
    tosignup.style.display = "none";
    signup.style.display = "block";
    signin.style.display = "none";
    signup.classList.add("show");
    tosignin.classList.add("show");
})
signInBtn.addEventListener("click", ()=>{
    tosignin.style.display = "none";
    tosignup.style.display = "block";
    signup.style.display = "none";
    signin.style.display = "block";
})


