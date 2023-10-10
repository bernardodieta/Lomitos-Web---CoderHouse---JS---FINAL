
const mostrarRefu = () => {
    datosSS = JSON.parse(sessionStorage.getItem('idrefu'));
    let buscar = arrayRefugios.find(refu => refu.id === datosSS) || [];
    let contenedor = document.querySelector('.refugiosmain__grid');
    contenedor.innerHTML = ` 
                        <img src="${buscar.img2}" alt="Foto grande de perro en adopcion" class="fotospan">
                        <div class="refugios__fotitos">
                            <img src="${buscar.img3}" alt="Foto de perro en adopcion" class="fotos">
                            <img src="${buscar.img3}" alt="Foto de perro en adopcion" class="fotos">
                            <img src="${buscar.img3}" alt="Foto de perro en adopcion" class="fotos">
                            <img src="${buscar.img3}" alt="Foto de perro en adopcion" class="fotos">
                        </div>
                        <div class="mapa-info">
                            <h4>Ubicación</h4>
                            <img src="${buscar.ubi}" alt="Mapa de Ubicacion del refugio" class="maparef">
                        </div>`
                        ;

    let contenedortexto = document.querySelector('.refu_get');
    contenedortexto.innerHTML = 
                        `<h3>Refugio</h3>
                        <h3>${buscar.nombrerefu}</h3>
                        <h5>${buscar.dire}</h5>
                        <h5>${buscar.candog}</h5>`
   
   
    console.log(buscar)
}

mostrarRefu();

