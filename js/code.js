function openLogin() {
    closeSignup();

    let popup = document.getElementById("login");
    popup.classList.add("openPop")
}

function openSignup() {
    closeLogin();

    let popup = document.getElementById("signup");
    popup.classList.add("openPop");
}

function closeLogin() {
    let popup = document.getElementById("login");
    popup.classList.remove("openPop");
}

function closeSignup() {
    let popup = document.getElementById("signup");
    popup.classList.remove("openPop");
}