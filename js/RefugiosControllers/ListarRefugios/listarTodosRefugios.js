
const listarRefugios = () => {
    const divContenedor = document.getElementById('refugiomenu__cards');
    divContenedor.innerHTML = "";
    listaTemporal = [];
    const listaRefugios = arrayRefugios;
    const refugiosSession = JSON.parse(sessionStorage.getItem('Lista de Refugios'))
    const arrayUnion = [...listaRefugios,...(Array.isArray(refugiosSession) ? refugiosSession : [])];
    for (const refugios of arrayUnion) {
        if (!refugios) {
            console.log('no se encontro ningun dato')
        } else {
            listaTemporal.push(new Refugio(refugios));
            
        }
    }
    for (const refugio of listaTemporal) {
        const nuevoDiv = document.createElement('div');
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
listarRefugios();