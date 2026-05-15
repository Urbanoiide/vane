    const inicio = document.getElementById('inicio');
    const albumVideo = document.getElementById('albumVideo');
    const btnReproducir = document.getElementById('btnReproducir');
    const fotos = document.querySelectorAll('.foto');
    const musica = document.getElementById('musica');

    let fotoActual = 0;
    const tiempoPorFoto = 8000;

    function mostrarFoto(indice) {
      fotos.forEach((foto) => {
        foto.classList.remove('activa');
      });

      fotos[indice].classList.add('activa');
    }

    function iniciarAlbum() {
    inicio.classList.add('ocultar');
    albumVideo.classList.add('mostrar');

    musica.volume = 0.5;
    musica.play();

    setInterval(() => {
        fotoActual++;

        if (fotoActual >= fotos.length) {
        fotoActual = 0;
        }

        mostrarFoto(fotoActual);
    }, tiempoPorFoto);

    setTimeout(mostrarMensajeEscrito, 50000);
    }

    btnReproducir.addEventListener('click', iniciarAlbum);
    const mensajeEscritura = document.getElementById('mensajeEscritura');
    const textoEscritura = document.getElementById('textoEscritura');
    const subTextoEscritura = document.getElementById('subTextoEscritura');

    const mensaje = "Gracias por compartir hermosos momentos, te amo Vane y siempre te voy a amar. Feliz cumpleaños amor.";
    const subMensaje = "Emmanuel";
let letraActual = 0;
let subLetraActual = 0;

function mostrarMensajeEscrito() {
  mensajeEscritura.classList.add('mostrar');

  textoEscritura.innerHTML = "";
  subTextoEscritura.innerHTML = "";

  letraActual = 0;
  subLetraActual = 0;

  escribirTexto();
}

function escribirTexto() {
  if (letraActual < mensaje.length) {
    textoEscritura.innerHTML =
      mensaje.substring(0, letraActual + 1) + '<span class="cursor">|</span>';

    letraActual++;

    setTimeout(escribirTexto, 80);
  } else {
    textoEscritura.innerHTML = mensaje;
    setTimeout(escribirSubTexto, 600);
  }
}

function escribirSubTexto() {
  if (subLetraActual < subMensaje.length) {
    subTextoEscritura.innerHTML =
      subMensaje.substring(0, subLetraActual + 1) + '<span class="cursor">|</span>';

    subLetraActual++;

    setTimeout(escribirSubTexto, 55);
  } else {
    subTextoEscritura.innerHTML = subMensaje + '<span class="cursor">|</span>';
  }
}