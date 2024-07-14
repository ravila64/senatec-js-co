// document.getElementById("myDiv").innerHTML="Este valor se cambio innerHTML";
document.getElementById("myDiv").textContent =
  "Este valor se cambio textContent";
document.getElementById("myInput").value =
  "Texto cambiado por JavaScript con value.";

//Crear elementos dinámicamente
var newDiv = document.createElement("div");
newDiv.textContent = "Este es un nuevo div creado por JavaScript.";
document.getElementById("container").appendChild(newDiv);

//Usar plantillas literales
let nombre = "Rene";
document.getElementById("myDiv2").innerHTML = `Hola, ${nombre}. ¡Bienvenido!`;

// ejemplo completo con evento
function cambiarTexto() {
    document.getElementById("myDiv3").innerHTML = "Texto cambiado por JavaScript al hacer clic en el botón.";
}
