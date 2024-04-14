let numero = Math.floor(Math.random() * 100) + 1;
const intentos = document.querySelector(".intentos");
const ultimo = document.querySelector(".ultimo");
const pista = document.querySelector(".pista");
const envio = document.querySelector(".envio");
const intento= document.querySelector(".intento");
let nintentos = 1;
let resetButton;

function resetGame() {
  nintentos = 1;
  const resetresult = document.querySelectorAll(".resultados p");
  for (let i = 0; i < resetresult.length; i++) {
    resetresult[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  intento.disabled = false;
  envio.disabled = false;
  intento.value = "";
  intento.focus();
  ultimo.style.backgroundColor = "white";
  numero = Math.floor(Math.random() * 100) + 1;
}

function GameOver() {
  intento.disabled = true;
  envio.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function checkGuess() {
  let adivino = Number(intento.value);
  if (nintentos === 1) {
    intentos.textContent = "Intentos anteriores: ";
  }

  intentos.textContent += adivino + " ";

  if (adivino === numero) {
    ultimo.textContent = "¡Felicidades! ¡Lo adivinaste!";
    ultimo.style.backgroundColor = "green";
    pista.textContent = "";
    GameOver();
  } else if (nintentos === 10) {
    ultimo.textContent = "!!!Fin del juego!!!";
    pista.textContent = "";
    GameOver();
  } else {
    ultimo.textContent = "¡Incorrecto!";
    ultimo.style.backgroundColor = "red";
    if (adivino < numero) {
      pista.textContent = "¡El número es muy pequeño!";
    } else if (adivino > numero) {
      pista.textContent = "¡El número es muy grande!";
    }
  }

  nintentos++;
  intento.value = "";
}

envio.addEventListener("click", checkGuess);



