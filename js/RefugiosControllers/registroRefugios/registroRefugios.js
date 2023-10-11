const formulario = document.getElementById('submit');
let listaRefugios = []
formulario.addEventListener('click', function (e) {
  e.preventDefault(); 

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

  const datosFormulario = {
    id: Math.floor(Math.random()*100),
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

  listaRefugios = JSON.parse(sessionStorage.getItem('Lista de Refugios')) || [];
  listaRefugios.push(datosFormulario);
  sessionStorage.setItem('Lista de Refugios', JSON.stringify(listaRefugios));
  window.location.href = '../pages/refugiomenu.html';

});