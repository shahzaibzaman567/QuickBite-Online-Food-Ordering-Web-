//Logout    Btn 
let Logout = document.querySelector("#Logout");

Logout.addEventListener("click", () => {
    window.location.href = "index.html"

    sessionStorage.clear()
})
