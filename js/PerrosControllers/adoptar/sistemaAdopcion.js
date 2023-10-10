
datosSS = JSON.parse(sessionStorage.getItem('iddog'));
let buscar = dogCard.find(dog => dog.id === datosSS)
let btnadoptar = document.querySelector('#btn-adoptar');

btnadoptar.addEventListener("click", function () {
    console.log('click');
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas a un paso de enviar tu solicitud de adopción!!',
        text: "Un representante del refugio se pondra en contacto para llevar a cabo la adopción!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Enviar Solicitud',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            `Tu solicitud para adoptar a: ${buscar.nombre}, fue enviada correctamente.`,            
            'Muy Pronto se comunicaran al celular registrado.',
            'success'
          )
        } else if (
         
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Tu solicitud fue cancelada.',
            'Lamentamos que te hayas arrepentido.',
            'error'
          )
        }
      })
})