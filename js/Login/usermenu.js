
let usermenu = document.getElementById("ul-usermenu") || [];
usermenu.addEventListener('click', mostrar());
function mostrar() {
    
    if (usermenu.style.display === "none") {
        usermenu.style.display = "block";
    } else {
        usermenu.style.display = "none";
    }

}

