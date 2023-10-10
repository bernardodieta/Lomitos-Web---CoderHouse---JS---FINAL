let guardar = document.getElementById("submit");
guardar = addEventListener("submit", crearmodeloUsuario);

let alerta = document.querySelector(".registrocompletado");
alerta.className = "registrocompletado desactivado";

let listaUsuarios = []
let login = []


function crearmodeloUsuario(e) {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let dire = document.getElementById("dire").value;
    let next = document.getElementById("next").value;
    let nint = document.getElementById("nint").value;
    let celular = document.getElementById("celular").value;
    let vetdog = document.getElementById("vetdog").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    e.preventDefault();


    if (password != password2) {
        // let alerta = document.getElementById("alerta");
        // alerta.textContent = "Las Contraseñas no coinciden."
    } else {
        let user = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "dire": dire,
            "next": next,
            "nint": nint,
            "celular": celular,
            "vetdog": vetdog,
            "username": username,
            "password": password
        }
        let logi = {
            "username": username,
            "password": password
        }


        let alerta = document.querySelector(".registrocompletado");
        alerta.className = "registrocompletado activo";

        let formulario = document.getElementById("estado");
        formulario.className = "desactivado";
        grabarUsuario(user, logi);
    }
    
}

const grabarUsuario = (user, logi) => {
    listaUsuarios.push(new Usuario(user));

    login.push(new Usuario(logi));
    sessionStorage.setItem("Login", JSON.stringify(login));
 
    localStorage.setItem("Lista de Usuarios", JSON.stringify(listaUsuarios));

}
