async function traerPerrosJson() {
    try {
        const respuesta = await fetch('../js/PerrosControllers/ListarPerros/arrayPerros.json');

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        } else {
            const data = await respuesta.json();
            mostrarPerros(data)
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

const mostrarPerros = (data) => {
    const listadePerros = [];
    let divContenedor = document.querySelector('#card__carusel-main');
    divContenedor.innerHTML = ``;
    for (const perros of data) {
        listadePerros.push(new Dogcard(perros))
    }
    let contador = 0;
    for (const perro of listadePerros) {
        contador = contador + 1
        if (contador >= 7) {
            break;
        }
        let nuevoDiv = document.createElement('div')
        nuevoDiv.className = "menuadopcion__cards-card";
        nuevoDiv.id = "menuadopcion__cards-card";
        nuevoDiv.innerHTML = `
      <img src="${perro.imagen1}" alt="Foto de Perro en adopcion">
      <div class="category">${perro.category}</div>
      <div class="headercard">
      <h3>${perro.nombre}</h3>
      <div class="card-icon-container">
      <img src="../content_edit/img/section3/carusel/corazon.png"
      alt="icono de corazon para dar Like a publicacion de perro" class="card-icon">
      <img src="../content_edit/img/section3/carusel/compartir.png"
      alt="icono para compartir publicacion mediante link" class="card-icon">
      <img src="../content_edit/img/section3/carusel/guardar.png"
      alt="icono para guardar publicacion" class="card-icon">
      </div>
      </div>
      <p>${perro.descripcion}
      <br><br>
      <span class="spanbold">${perro.tamaño} - ${perro.sexo} - ${perro.edad} </span>
      </p>
      <h4>Refugio: ${perro.refugio}</h4>
      <a href="./adopcioncard.html">
      <div class="btn__card">Adoptar</div>
      </a>`;

        const adoptButton = nuevoDiv.querySelector('.btn__card');
        adoptButton.addEventListener('click', () => {
            JSON.stringify(sessionStorage.setItem('iddog', perro.id));
        });

        divContenedor.appendChild(nuevoDiv);
    }

}


traerPerrosJson();