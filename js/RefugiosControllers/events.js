const btn_donar = document.getElementById('donativo');
const btn_visita = document.getElementById('visitas');
datosSS = JSON.parse(sessionStorage.getItem('idrefu'));

let buscar = refuCard.find(refu => refu.id === datosSS)
let selectoption = {}
var modal = document.getElementById("ventanaModal");
var boton = document.getElementById("abrirModal");
var span = document.getElementsByClassName("cerrar")[0];

btn_donar.addEventListener("click", function () {

 
  boton.addEventListener("click", function () {
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
})

btn_visita.addEventListener("click", function () {

})


