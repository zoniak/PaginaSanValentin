let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "";


//Funcion que se activa cuando le damos al boton Si
document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "";
  document.getElementById("sadGifContainer1").style.display = "";
  document.getElementById("sadGifContainer2").style.display = "";
  document.getElementById("gifContainer").style.display = "";
  document.getElementById("happyGifContainer").style.display = "";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "";
  document.getElementById("siBtn").style.display = "";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML = "poner aqui el mensaje";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "";
    document.getElementById("happyGifContainer2").style.display = "";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "";
    document.getElementById("happyGifContainer3").style.display = "";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "";
    document.getElementById("happyGifContainer4").style.display = "";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "";
      document.getElementById("gifContainer").style.display = "";
      document.getElementById("sadGifContainer").style.display = "";

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "¡Oh no! ¿Estás segura?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "";
      document.getElementById("sadGifContainer2").style.display = "";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML ="";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "";
      document.getElementById("sadGifContainer2").style.display = "";
      document.getElementById("sadGifContainer1").style.display = "";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML =
        "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML ="";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;
    case 11:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML ="";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 13:
      document.getElementById("noBtn").innerHTML ="";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML = "";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML ="";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "";
      document.getElementById("siBtn").style.padding = " ";

      noButtonState++;
      break;

    case 16:
      document.getElementById("noBtn").innerHTML = "por favooooooor";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState = 0;
      break;

    default:
      // Por si acaso, maneja cualquier otro caso aquí
      break;
  }
});
