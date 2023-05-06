// Primero carga la pagina y dps ejecuta el codigo
document.addEventListener("DOMContentLoaded",function(){

  document.getElementById("registro-form").addEventListener("submit", function(event){

    // Prevenir el envío del formulario
    event.preventDefault();
  
    // Obtener los valores ingresados por el usuario
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;
  
    // Validar que se ingresen usuario y contraseña completos
    if (username === "" || password === "") {
      alert("Por favor ingrese su usuario y contraseña completos.");
      return;
    }
  
    // Validar que el usuario no sea "admin" y la contraseña no sea "1234" o "admin"
    if (username === "admin" || password === "1234" || password === "admin") {
      alert("El usuario o la contraseña no son validos.");
      return;
    }
  
    // Si los campos son válidos, enviar el formulario
    alert("Registro de usuario exitoso.");
    document.getElementById("registro-form").submit();
  });
});



