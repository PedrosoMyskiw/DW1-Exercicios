function entrar() {

  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("senha").value;

  let erro = document.getElementById("erro");

  if (user === "admin" && pass === "1234") {

    window.location.href = "menu.html";

  } else {
    erro.innerText = "Usuário ou senha incorretos!";
  }
}