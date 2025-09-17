// Hamburger-Menu (Yves)
let hamburger_button = document.getElementById(`hamburger_button`);
let navli = document.getElementsByClassName(`navli`) [0];

hamburger_button.addEventListener("click", () => {
        navli.classList.toggle("active")
    }
)