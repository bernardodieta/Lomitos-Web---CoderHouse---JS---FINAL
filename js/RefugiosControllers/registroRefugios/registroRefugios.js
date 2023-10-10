// Obtener el formulario por su ID
const formulario = document.getElementById('submit');

// Agregar un evento de escucha para el envío del formulario
formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const candog = document.getElementById('candog').value;
  const canper = document.getElementById('canper').value;
  const nombrevet = document.getElementById('nombrevet').value;
  const apellvet = document.getElementById('apellvet').value;
  const celvet = document.getElementById('celvet').value;
  const vet = document.getElementById('vet').value;
  const nombrerefu = document.getElementById('nombreRefu').value;
  const dire = document.getElementById('dire').value;
  const cp = document.getElementById('cp').value;
  const ciudad = document.getElementById('ciudad').value;
  const estado = document.getElementById('estado').value;
  const bank = document.getElementById('bank').value;
  const bankc = document.getElementById('bankc').value;
  const titularcuenta = document.getElementById('titularcuenta').value;

  // Crear un objeto con los datos del formulario
  const datosFormulario = {
    nombre,
    apellido,
    email,
    category:"Refugios",
    candog,
    canper,
    nombrerefu,
    dire,
    ubi:"../content_edit/img/refugioscard/mapa.png",
    cp,
    ciudad,
    estado,
    img1:"../content_edit/img/refumenu/foto1.png",
    img2: "../content_edit/img/refugioscard/ref1.png",
    img3: "../content_edit/img/refugioscard/ref2.png",
    img4: "../content_edit/img/refugioscard/ref2.png",
    img5: "../content_edit/img/refugioscard/ref2.png",
    bank,
    bankc,
    titularcuenta,
    nombrevet,
    apellvet,
    celvet,
    vet,
    descripcion: "El Refugio de Animales Felices es un lugar dedicado al cuidado y protección de animales abandonados. Nuestra misión es brindarles un hogar seguro y amoroso hasta que encuentren un hogar permanente. Contamos con un equipo de voluntarios comprometidos y un experimentado equipo veterinario que garantiza el bienestar de nuestros residentes. ¡Únete a nosotros en nuestra misión de darles una segunda oportunidad a estos adorables amigos peludos!"
  };

  const datosJSON = JSON.stringify(datosFormulario);
  sessionStorage.setItem('Lista de Refugios', datosJSON);
  window.location.href = 'confirmacion.html';
});