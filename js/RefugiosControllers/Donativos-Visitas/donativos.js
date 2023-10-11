
const btn_donar = document.getElementById('donativo');
let islogin = JSON.parse(sessionStorage.getItem('status'))
let modal = document.getElementById("ventanaModal");
let boton = document.getElementById("abrirModal");
let span = document.getElementsByClassName("cerrar")[0];


btn_donar.addEventListener("click", function () {
    modal.style.display = "block";
});
span.addEventListener("click", function () {
    modal.style.display = "none";
    //location.href = '../pages/refugiocard.html';
});
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
});


const donarAlimento = () => {
    if (islogin === true) {
        let btnsDonaciones = document.getElementById('btn_donaciones');
        let contenidoDonaciones = document.getElementById('contenido_donaciones');
        btnsDonaciones.style.display = "none";
        contenidoDonaciones.innerHTML = `
        <form action="#" method="post" class="formulario_alimentos">    
    
        <label class="titlo-donar"><h3>Tipos de Alimentos:</h3></label>
        <div> 
        <input type="radio" id="masculino" name="genero" value="masculino" >
        <label for="masculino">5kilos de Alimento Balanceado por $200</label><br><br>
    
        <input type="radio" id="femenino" name="genero" value="femenino">
        <label for="femenino">10kilos de Alimento Balanceado por $390</label><br><br>
    
        <input type="radio" id="otro" name="genero" value="otro">
        <label for="otro">15kilos de Alimento Balanceado por $780</label><br><br>
    
        <input type="radio" id="no-especificar" name="genero" value="no-especificar">
        <label for="no-especificar">20kilos de Alimento Balanceado por $1170</label><br><br>
        </div>
        <label for="nombre">Mensaje:</label>
        <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea><br><br>
        <label for="tarjeta">Ingrese el numero de tarjeta de credito o debito:</label>
        <input type="text" class="inputtext" id="tarjeta">
        <label for="tarjeta">Nombre del Titular de la tarjeta:</label>
        <input type="text" class="inputtext" id="tarjeta">
        <label for="tarjeta">Ingrese el Codigo Postal de facturacion</label>
        <input type="text" class="inputtext" id="tarjeta">
        <input type="button" value="Cancelar" class="btn" onclick="cerrarVentana()">
        <input type="button" value="Enviar" class="btn" onclick="confirmacion()">
    </form>`
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Debes ingresar con tu usuario antes de realizar alguna donacion',
            text: 'Ingresa con tu Usuario',
            footer: '<a href="../pages/login.html">Ingresa con tu Usuario:</a>'
        })
    }

}
const cerrarVentana = () => {
    modal.style.display = "none";
    location.href = '../pages/refugiocard.html';
}
const donarMedicina = () => {
    if (islogin === true) {
        let btnsDonaciones = document.getElementById('btn_donaciones');
        let contenidoDonaciones = document.getElementById('contenido_donaciones');
        btnsDonaciones.style.display = "none";
        contenidoDonaciones.innerHTML = `
    <form action="#" method="post" class="formulario_alimentos">    

    <label class="titlo-donar"><h3>Tipos de Medicamentos disponibles:</h3></label>
    
    <div> 
    <input type="radio" id="masculino" name="genero" value="masculino" >
    <label for="masculino">Vacunas y antibioticos $500Mxn</label><br><br>

    <input type="radio" id="femenino" name="genero" value="femenino">
    <label for="femenino">Medicinas para tratamientos de cancer $1000Mxn</label><br><br>

    </div>
    <label for="nombre">Mensaje:</label>
    <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea><br><br>
    <label for="tarjeta">Ingrese el numero de tarjeta de credito o debito:</label>
    <input type="text" class="inputtext" id="tarjeta"><br>
    <label for="tarjeta">Nombre del Titular de la tarjeta:</label>
    <input type="text" class="inputtext" id="tarjeta"><br>
    <label for="tarjeta">Ingrese el Codigo Postal de facturacion</label>
    <input type="text" class="inputtext" id="tarjeta"><br>
    <input type="button" value="Cancelar" class="btn" onclick="cerrarVentana()">
    <input type="button" value="Enviar" class="btn" onclick="confirmacion()">
</form>`
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Debes ingresar con tu usuario antes de realizar alguna donacion',
            text: 'Ingresa con tu Usuario',
            footer: '<a href="../pages/login.html">Ingresa con tu Usuario:</a>'
        })
    }
}

const donarDinero = () => {
    if (islogin === true) {
        let btnsDonaciones = document.getElementById('btn_donaciones');
        let contenidoDonaciones = document.getElementById('contenido_donaciones');
        btnsDonaciones.style.display = "none";
        contenidoDonaciones.innerHTML = `
    <form action="#" method="post" class="formulario_alimentos">    

    <label class="titlo-donar"><h3>Donaciones de Dinero:</h3></label>
    <div>  
    <label for="donacion">Ingrese el monto que desa donar:</label>
    <input type="text" name="donacion" id="donacion" class="inputtext">
    </div>
    <label for="nombre">Mensaje:</label>
    <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea><br><br>
    <label for="tarjeta">Ingrese el numero de tarjeta de credito o debito:</label>
    <input type="text" class="inputtext" id="tarjeta">
    <label for="tarjeta">Nombre del Titular de la tarjeta:</label>
    <input type="text" class="inputtext" id="tarjeta">
    <label for="tarjeta">Ingrese el Codigo Postal de facturacion</label>
    <input type="text" class="inputtext" id="tarjeta">
    <input type="button" value="Cancelar" class="btn" onclick="cerrarVentana()">
    <input type="button" value="Enviar" class="btn" onclick="confirmacion()">
</form>`
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Debes ingresar con tu usuario antes de realizar alguna donacion',
            text: 'Ingresa con tu Usuario',
            footer: '<a href="../pages/login.html">Ingresa con tu Usuario:</a>'
        })
    }
}


function confirmacion() {
    Swal.fire({
        title: '¿Esta seguro que desa realizar la donación?',
        text: "No se podra volver atras luego de aceptar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si quiero donar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Muchas gracias por su donacion',
            )
            setTimeout(() => {
                location.href = '../pages/refugiocard.html'
            }, "2000");

        }
    })
}