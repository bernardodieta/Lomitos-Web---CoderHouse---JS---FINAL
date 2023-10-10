const btn = document.getElementById('submit');
btn.addEventListener('click', function (e) {
  let stat = false;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let tempstorlist = []
  e.preventDefault();
  let registroSesions = JSON.parse(sessionStorage.getItem('Login')) || []
  let arrayUnion = []

  for (const objeto of arrayUsuarios) {

    tempstorlist.push(new Logins(objeto));
    arrayUnion = [...tempstorlist, ...registroSesions];
  }
  for (const user of arrayUnion) {
    let getpassword = user.password;
    console.log(arrayUnion)

    if (password === getpassword) {
      console.log('password correcta');
      stat = true;
      sessionStorage.setItem('status', stat);
      location.href = '../index.html';

    } else {
      console.log('password Incorrecta');
    }
  }
})

