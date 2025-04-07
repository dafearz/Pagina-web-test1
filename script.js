function mostrarAlerta() {
    alert("¡Gracias por visitar mi sitio web!");
  }
  
  function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    console.log("Formulario enviado por:", nombre, "con email:", email);
    alert("Gracias " + nombre + ", te contactaremos pronto.");
    return false; // Previene que se recargue la página
  }
  