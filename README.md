EN CASO DE NO TENER GANAS DE REGISTRARSE PARA PROBAR COMO FUNCIONA USAR :(
Usuario: admin
Password: admin

Contenido dinámico:
Todas las tarjetas de los perros y refugios que aparecen en todas las páginas son cargadas dinámicamente desde un archivo .json y mostradas en pantallas y para poder mostrar
las nuevas que cargue el usuario registrado, estoy fusionando el array que extraigo del archivo. json con los datos que se guardaron en el sessionStorage a la hora de registrar un refugio o un perro.
Como aun no tengo resuelto el tema de subir las imágenes, cuando hagan el registro de un refugio o un perro, automáticamente se van a vincular a su registro unas fotos guardadas en un directorio del proyecto, con el fin de que se pueda ver el registro que realizo de forma correcta.

Funcionalidades:
Se pueden Registrar como usuario, una vez registrado ya puedes registrar un refugio o un perro para dar en adopción, estos aparecen en las secciones de refugios o perros
dependiendo cual sea.

Donaciones:
Desde la sección de quiero ayudar entrando a la tarjeta de algún refugio, se pueden realizar 3 tipos de donaciones diferentes, Alimentos, Medicamentos, y o Dinero.

adopción:
Desde el menú de adopción encuentran la lista de perros en adopción y dentro de la tarjeta correspondiente a cada perro pueden solicitar la adopción.

Correcciones realizadas con respecto a la tercera entrega.
Se restructuro todo el directorio donde están los archivos .JS que controlan el proyecto, así mismo de agregaron nombres de archivos y carpetas más descriptivos.
El 80% de los archivos JS se reescribieron quitando variables sin usar y mejorando la funcionabilidad.

Se agregaron 3 tipos de donaciones diferentes con sus respectivas vistas.
Se cambio la forma en la que se mostraban todas las tarjetas para que también se puedan ver las que el usuario registra desde los menús. 

Se quitaron los menú de registrar refugio y registrar perro en adopción cuando no estas logueado.



