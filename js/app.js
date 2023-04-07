let movimientoJugador = '';
let formulario = document.querySelector('form');
let botonJugardenuevo = document.getElementById('jugarNuevamente');
let contenedorNumeroJugador = document.getElementById(
  'contenedorNumeroJugador'
);
let botonIniciarJuego = document.getElementById('botonEleccionJugador');
let numeroMagico = generarNumeroMagico();
let contador = 0;

//activadores de eventos
formulario.addEventListener('submit', eleccionJugador);
botonJugardenuevo.addEventListener('click', mostrarDivEleccionJugador);

//Funciones
//Genera número aleatorio
function generarNumeroMagico() {
  return Math.floor(Math.random() * 100 + 1);
}

//Número elegido por el Jugador
function eleccionJugador(opcion) {
  opcion.preventDefault();
  botonIniciarJuego.innerHTML = 'Probar con otro número';
  let input = document.getElementById('inputNumero');

  //Obtengo el input del número que elgió el Jugador
  nroJugador = parseInt(input.value);

  //comparar el numero elegido por el Jugador con el número Mágico
  compararNumeros(nroJugador);
}

//Comparar Número magico con el Número de Jugador
function compararNumeros(numeroJugador) {
  contador += 1;
  let input = document.getElementById('inputNumero');
  input.value = '';
  if (numeroJugador < numeroMagico) {
    alert('El Número que ingresaste es MENOR al Número Magico');
  } else if (numeroJugador > numeroMagico) {
    alert('El Número que ingresaste es MAYOR al Número Magico');
  } else if (numeroJugador === numeroMagico) {
    alert(`FELICIDADES LE ACERTASTE AL NUMERO MAGICO EN ${contador} INTENTOS`);
    cambiarCardJugadorNumeroElegido(numeroJugador);
    mostraImagenONumeroMagico();
    botonJugardenuevo.classList.remove('disabled');
    const subtitulo = document.getElementById('subtitulo');
    subtitulo.innerHTML = 'FIN DEL JUEGO!!!';
    numeroMagico = generarNumeroMagico();
    contador = 0;
  }
}

//Muestra el Formulario del Jugador cuando reinicia el juego.
function mostrarDivEleccionJugador() {
  if (contenedorNumeroJugador.classList.contains('d-none')) {
    contenedorNumeroJugador.classList.remove('d-none');
    const contenedor = document.getElementById('seccionPadreJugador');
    contenedor.removeChild(contenedor.children[2]);
    botonJugardenuevo.classList.add('disabled');

    //mostrar la imagen de signo de pregunta
    mostraImagenONumeroMagico();

    //cambiar el subtitulo
    const subtitulo = document.getElementById('subtitulo');
    subtitulo.innerHTML = 'Elige uno de los tres movimientos';
  }
}

//Cuando acierta el Número Magico el Jugador muestra el Numero elegido
function cambiarCardJugadorNumeroElegido(numero) {
  //oculto el formulario donde ingresa numero el jugador
  contenedorNumeroJugador.classList.add('d-none');
  //Crear el parrafo con el número que acertó el Jugador
  const parrafo = document.createElement('p');
  parrafo.className = 'pt-1 lead card-text fs-4';
  parrafo.innerHTML = numero;

  //Crear el div del parrafo
  const divParrafo = document.createElement('div');
  divParrafo.classList.add('divParrafo');

  //Asignar el parrafo
  divParrafo.appendChild(parrafo);

  const contenedor = document.getElementById('seccionPadreJugador');
  contenedor.appendChild(divParrafo, contenedor.children[2]);
}

function mostraImagenONumeroMagico() {
  const imagenComputadora = document.getElementById('imagenComputadora');
  const parrafoNumeroMagico = document.getElementById('parrafoNumeroMagico');
  if (imagenComputadora.classList.contains('d-none')) {
    //oculta la imagen del signo de pregunta
    imagenComputadora.classList.remove('d-none');
    //Muestra el numero mágico
    parrafoNumeroMagico.classList.add('d-none');
    parrafoNumeroMagico.innerText = numeroMagico;
  } else {
    //muestra la imagen del signo de pregunta
    imagenComputadora.classList.add('d-none');
    //Oculta el numero mágico
    parrafoNumeroMagico.classList.remove('d-none');
    parrafoNumeroMagico.innerText = numeroMagico;
  }
}
