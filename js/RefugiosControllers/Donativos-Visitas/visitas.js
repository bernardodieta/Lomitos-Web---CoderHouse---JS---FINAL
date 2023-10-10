const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'alimento': 'Alimentos',
        'medicina': 'Medicina',
        'materiales': 'Materiales de construccion',
        'dinero': 'Dinero'
      })
    }, 1000)
  })
  
  const { value: color } = await Swal.fire({
    title: 'Select color',
    input: 'radio',
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to choose something!'
      }
    }
  })
  
  if (color) {
    Swal.fire({ html: `You selected: ${color}` })
  }