let navLanguage = document.getElementById("language");
let navSignIn = document.getElementById("login");
let emailHomePage = document.getElementById("email");
let getStartNavButton = document.getElementsByClassName("getstart");


const emailHeroSection = () => {
        if(emailHomePage === "ujjwalsinghgaekwad@gmail.com") {
            navSignIn;
        } else {
            alert("Wrong email please cheek");
        }
}

// let getstartbutton = () => {
//     getStartNavButton;
// }

// let getStartbutton =() => {
//     getStartbutton.addEventListener('click', () => {
//         emailHeroSection();
// })
// }


// const openSignInForm = () => {
//     navSignIn.addEventListener('click', () => {
//         navSignIn.innerHTML = "href = signin.html";
//     })
// }

// function language() {
//     navLanguage.addEventListener('dblclick', () => {
//         navLanguage.innerText = "  हिंदी ";  
//     })
// }
// language();