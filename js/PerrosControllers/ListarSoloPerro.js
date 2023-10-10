async function traerPerrosJson() {
    try {
        const respuesta = await fetch('../js/PerrosControllers/ListarPerros/arrayPerros.json');

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        } else {
            const data = await respuesta.json();

            fusionarArrays(data)
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
const fusionarArrays = (data) => {
    const dataSessionStorage = JSON.parse(sessionStorage.getItem('ListaDePerros'))
    const arrayUnion = data.concat(dataSessionStorage)
    mostrarPerro(arrayUnion);
}

const mostrarPerro = (arrayUnion) => {    
    let datosSS = JSON.parse(sessionStorage.getItem('iddog'))
    let buscar = arrayUnion.find(dog => dog.id === datosSS);

    let contenedor = document.querySelector('#adopcion');
    let newdiv = document.createElement('article');

    newdiv.innerHTML = ` 
                        
                        <h1>Adopta un canino para toda la vida</h1>

                        <div class="adopcion__galeria">
                            <img src="${buscar.imagen1}" alt="Imagen de perro en adopcion">
                            <img src="${buscar.imagen2}" alt="Imagen de perro en adopcion">
                            <img src="${buscar.imagen3}" alt="Imagen de perro en adopcion">
                        </div>

                        <div class="adopcion__description">

                            <div class="adopcion__description-box">
                                <div class="category">${buscar.category}</div>
                                <h2>${buscar.nombre}</h2>
                                <h3>${buscar.edad}</h4>
                                <h3>${buscar.tamaño}</h4>
                                <h3>${buscar.sexo}</h4>
                            </div>
                            <div class="adopcion__description-text">
                                <p>${buscar.descripcionlarga}</p>
                            </div>
                        </div>
                        <div class="adopcion__btns">
                            <div class="btn" id="btn-adoptar">
                                <h4>Quiero Adoptarte</h4>
                            </div>
                            <div class="btn" id="btn-ayudar">
                                <h4>Quiero Ayudarte</h4>
                            </div>
                        </div>
                        <div class="adopcion__compromiso">
                            <ol>
                                <li>
                                    <span class="spanbold">Compromiso y responsabilidad:</span> Una familia que desee adoptar un
                                    perro debe demostrar un
                                    compromiso
                                    sólido y una actitud responsable hacia el cuidado y bienestar del animal. Esto implica estar
                                    dispuestos a dedicar tiempo, atención y recursos para satisfacer sus necesidades físicas y
                                    emocionales.
                                </li>
                                <li>
                                    <span class="spanbold">Estabilidad y espacio adecuado:</span> Es importante que la familia
                                    tenga un entorno estable y seguro
                                    para
                                    el perro. Esto incluye disponer de espacio suficiente en el hogar para que el perro se mueva
                                    cómodamente, así como un patio o área externa adecuada para que pueda hacer ejercicio y
                                    realizar
                                    sus
                                    necesidades.
                                </li>
                                <li>
                                    <span class="spanbold">Condiciones de vida adecuadas:</span> La familia debe poder
                                    proporcionar un ambiente adecuado para el
                                    perro, lo cual implica contar con condiciones de vida apropiadas. Esto incluye mantener la
                                    vivienda
                                    limpia, tener un lugar designado para el perro dentro de la casa, y garantizar que el
                                    entorno
                                    sea
                                    seguro y libre de peligros para el animal.
                                </li>
                                <li>
                                    <span class="spanbold">Experiencia previa o disposición para aprender:</span> Algunas
                                    organizaciones pueden preferir que las
                                    familias tengan experiencia previa en la tenencia responsable de perros, pero también están
                                    dispuestas a trabajar con familias primerizas que estén dispuestas a aprender y recibir
                                    orientación
                                    sobre el cuidado de un perro.
                                </li>
                                <li>
                                    <span class="spanbold">Aprobación de la organización de adopción:</span> Por último, es
                                    importante que la familia pase por un
                                    proceso de evaluación y aprobación por parte de la organización de adopción. Esto puede
                                    incluir
                                    completar una solicitud de adopción, proporcionar referencias, someterse a una visita al
                                    hogar y
                                    posiblemente realizar una entrevista personal. El objetivo de este proceso es asegurarse de
                                    que
                                    la
                                    familia sea adecuada para el perro en términos de sus necesidades, estilo de vida y
                                    capacidad
                                    para
                                    proporcionarle un hogar amoroso.
                                </li>

                            </ol>
                        </div>

    `;

    contenedor.appendChild(newdiv);
}


traerPerrosJson();
