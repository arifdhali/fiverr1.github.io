// log out
let userBtn = document.querySelector(".user-name-button");
userBtn.addEventListener("click", getLogout);
let logout = document.getElementById("logout");
function getLogout() {
    logout.classList.toggle("active");
}

// side nav active
let snavBtn = document.querySelectorAll(".nav__btn");
snavBtn.forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();

        snavBtn.forEach(b=>{
            b.classList.remove('active');            
            a.className = 'nav__btn active';
        })
    })
})