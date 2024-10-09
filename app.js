const signUpBtn = document.querySelector("#signUpBtn");
const loginBtn = document.querySelector("#loginBtn")
const bgLayout = document.querySelector("#bgLayout");
const loginForm = document.querySelector("#loginForm");
const signUpContent = document.querySelector("#signUpContent");
const loginContent = document.querySelector("#loginContent");
const signUpForm = document.querySelector("#signUpForm");

signUpBtn.addEventListener("click", ()=>{
    signUpForm.classList.remove("hidden");
    signUpContent.classList.remove("hidden");
    bgLayout.classList.add("move");
    loginForm.classList.add("hidden");
    loginContent.classList.add("hidden");
})

loginBtn.addEventListener("click", ()=>{
    signUpForm.classList.add("hidden");
    signUpContent.classList.add("hidden");
    bgLayout.classList.remove("move");
    loginForm.classList.remove("hidden");
    loginContent.classList.remove("hidden");
})
