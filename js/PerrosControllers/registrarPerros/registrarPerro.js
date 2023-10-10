
const formulario = document.getElementById('submit');
let listaPerros = []
formulario.addEventListener('click', function (e) {
   
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const descripcionlarga = document.getElementById('descripcionlarga').value;
    const tamaño = document.getElementById('tamaño').value;
    const sexo = document.getElementById('sexo').value;
    const edad = document.getElementById('edad').value;
    const refugio = document.getElementById('refugio').value;

    const datosFormulario = {
        id: Math.floor(Math.random()*100),
        nombre,
        descripcion,
        descripcionlarga,
        category: "Perros",
        tamaño,
        sexo,
        edad,
        refugio,
        imagen1: "../content_edit/img/section3/carusel/dog1.png",
        imagen2: "../content_edit/img/section3/carusel/dog1.png",
        imagen3: "../content_edit/img/section3/carusel/dog1.png",
    };
   
    listaPerros = JSON.parse(sessionStorage.getItem('ListaDePerros')) || [];
    listaPerros.push(datosFormulario);
    sessionStorage.setItem('ListaDePerros', JSON.stringify(listaPerros));
    window.location.href = '../pages/adopcionmenu.html';
   
    
   
});