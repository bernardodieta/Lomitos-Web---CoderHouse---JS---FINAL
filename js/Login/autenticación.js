const cerrar_sesion = () => {
    JSON.stringify(sessionStorage.setItem('status', 'false'))
    location.href = './index.html';
}

function sessionStatus() {
    const btnOcultarRe = document.getElementById('registrarmeRe')
    btnOcultarRe.style.display = "none"
    let divprincipal = document.getElementById('usermenu');
    let ses = JSON.parse(sessionStorage.getItem('status'));
    divprincipal.innerHTML = ``;

    if (ses != true) {
        divprincipal.innerHTML = `
        <img src="../img/nav/1x/iconuser.png" alt="" onclick="mostrar()" class="icon_usermenu">
        <ul class="ul-usermenu" id="ul-usermenu">
            <a href="./login.html"><li>Iniciar Sesion</li></a>
            <a href="./regusers.html"><li>Registrarme</li></a>
        </ul>
        `;
        console.log('No tiene permisos para acceder');            

    }
    else {
        const btnOcultar = document.getElementById('registrarme')   
        const btnOcultarRe = document.getElementById('registrarmeRe')
        btnOcultarRe.style.display = "block"     
        btnOcultar.style.display = "none"        
        console.log('Usuario Logeado');
        divprincipal.innerHTML = `<img src="../img/nav/1x/iconuser.png" alt="" onclick="mostrar()" class="icon_usermenu">
        <ul class="ul-usermenu" id="ul-usermenu">           
            <a href="./regrefugio.html"><li>Registrar mi Refugio</li></a>
            <a href="../pages/adddog.html"><li>Registrar Perro en Adopción</li></a>
            <a href="http://"><li>Editar mi perfil</li></a>
            <a href=""><li onClick="cerrar_sesion()">Cerrar Sesion</li></a>
        </ul>`;
    }
}

sessionStatus();

