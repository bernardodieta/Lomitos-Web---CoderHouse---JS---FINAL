
async function traerRefugioJson() {
    try {
      const respuesta = await fetch('../js/RefugiosControllers/ListarRefugios/arrayRefugios.json');
  
      if (!respuesta.ok) {
        throw new Error("No se pudo cargar el archivo JSON");
      } else {
        const data = await respuesta.json();
        mostrarRefugio(data)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const mostrarRefugio = (data) => {
    let listadeRefugios = []
  
    let listaRefugiosSessionS = JSON.parse(sessionStorage.getItem('Lista de Refugios'))
    
    for(const nuevo of listaRefugiosSessionS){
        listadeRefugios.push(new Refugio(nuevo))
    }
   
    let divContenedor = document.querySelector('#refugiomenu__cards');
    divContenedor.innerHTML = ``;
    for (const refugios of data) {
        listadeRefugios.push(new Refugio(refugios))
    }
    for (const refugio of listadeRefugios) {
        let nuevoDiv = document.createElement('div');
        nuevoDiv.classList = "refugiomenu__cards-card";
        nuevoDiv.innerHTML = `
        <div class="category">${refugio.category}</div>
        <h3>${refugio.nombrerefu}</h3>
        <img src="${refugio.img1}">
        <p>${refugio.descripcion.substring(0, 114) + "..."}</p>
        <h4>Ubicación</h4>
        <img src="${refugio.ubi}" alt="foto de mapa del refugio">
        <a href="./refugiocard.html">
            <div class="btn__refu">
                <img src="../content_edit/img/icons/pata_btn.png" alt="Icono pata de perro">
                <h4>Quiero Ayudar</h4>
            </div>
        </a>
        `;
  
        const ayudaButton = nuevoDiv.querySelector('.btn__refu');
        ayudaButton.addEventListener('click', () => {
            JSON.stringify(sessionStorage.setItem('idrefu', refugio.id));
        });

        divContenedor.appendChild(nuevoDiv);
    }
  }
  
  
  traerRefugioJson();