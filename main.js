"use strict";
// ==========================
//        Login Page
// ==========================
const loginForm = document.getElementById("log-in");
const signUpForm = document.getElementById("sign-up");
const loginBtn = document.getElementById("login-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const btn = document.getElementById("btn");
const logInSubmitBtn = document.querySelector(".login-submit-btn");
const signUpSubmitBtn = document.querySelector(".signup-submit-btn");

signUpBtn.addEventListener("click", function () {
  loginForm.style.left = "-750px";
  signUpForm.style.left = "10px";
  btn.style.left = "120px";
});

loginBtn.addEventListener("click", function () {
  loginForm.style.left = "10px";
  signUpForm.style.left = "750px";
  btn.style.left = "0px";
});

signUpSubmitBtn.addEventListener("click", function () {
  alert("You have successfully sign up");
  setInterval(function () {
    location.reload();
  }, 1000);
});

logInSubmitBtn.addEventListener("click", function () {
  const homePage = document.querySelector("#home-page");
  const loginPage = document.querySelector("#login-page");

  alert("You have successfully Log In");
  setInterval(function () {
    // location.href = "home.html";
    loginPage.style.display = "none";
    homePage.style.display = "block";
  }, 1000);
});

// ==========================
//             Home Page
// ==========================
const logo = document.querySelector(".logo");
logo.addEventListener("click", function () {
  location.href = "index.html";
});

const pictureSlide = document.querySelector(".pictures-slide");
function changePic() {
  const pictures = [
    "url(./images/1.jpg)",
    "url(./images/2.jpg)",
    "url(./images/3.jpg)",
    "url(./images/4.jpg)",
    "url(./images/5.jpg)",
    "url(./images/6.jpg)",
    "url(./images/7.jpg)",
    "url(./images/8.jpg)",
    "url(./images/9.jpg)",
  ];

  const pic = pictures[Math.floor(Math.random() * pictures.length)];
  pictureSlide.style.backgroundImage = pic;
}

setInterval(changePic, 1500);
