let numeroInput = document.getElementById('inputNumero');
let maxLength = 3; // longitud máxima permitida

numeroInput.addEventListener('input', function () {
  console.log(numeroInput.value);
  if (numeroInput.value.length > maxLength) {
    numeroInput.value = numeroInput.value.slice(0, maxLength);
  }
});
