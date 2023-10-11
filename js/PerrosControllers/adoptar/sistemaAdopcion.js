let islogin = JSON.parse(sessionStorage.getItem('status'))
function adoptarr() {
  if (islogin === true) {
    let btnadoptar = document.getElementById('btn-adoptar');   
    let modal = document.getElementById("ventanaModal");
    let boton = document.getElementById("abrirModal");
    let span = document.getElementsByClassName("cerrar")[0];

    btnadoptar.addEventListener("click", function () {
      modal.style.display = "block";
    });
    span.addEventListener("click", function () {
      modal.style.display = "none";     
    });
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";

      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Debes ingresar con tu usuario',
      text: 'Ingresa con tu Usuario',
      footer: '<a href="../pages/login.html">Ingresa con tu Usuario:</a>'
    })

  }
}

const adoptarPerro = () => {
  if (islogin === true) {
    let btnsDonaciones = document.getElementById('btn_donaciones');
    let contenidoDonaciones = document.getElementById('contenido_donaciones');
    btnsDonaciones.style.display = "none";
    contenidoDonaciones.innerHTML = `
      <form action="#" method="post" class="formulario_alimentos">    
      <label for="tarjeta">Ingrese un numero de celular para poder comunicarnos a la brevedad.</label>
      <input type="text" class="inputtext" id="tel">
      <label for="tarjeta">En caso de tener un mail diferente al registrado por favor ingresarlo:</label>
      <input type="text" class="inputtext" id="tel">
      <input type="button" value="Cancelar" class="btn" onclick="cerrarVentana()">
      <input type="button" value="Enviar" class="btn" onclick="confirmacion()">
  </form>`
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Debes ingresar con tu usuario antes de realizar esta acción',
      text: 'Ingresa con tu Usuario',
      footer: '<a href="../pages/login.html">Ingresa con tu Usuario:</a>'
    })
  }

}
const cerrarVentana = () => {
  modal.style.display = "none";
  location.href = '../pages/adopcioncard.html';
}


function confirmacion() {
  Swal.fire({
      title: '¿Esta seguro que desa continuar con la adopción?',
      text: "puedes continuar en otro momento si no estas seguro.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si quiero adoptarlo'
  }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire(
              'Muchas gracias por adoptar, muy pronto se comunicaran al telefono otorgado para darte indicaciones de como continuar',
          )
          setTimeout(() => {
              location.href = '../pages/index.html'
          }, "3000");

      }
  })
}