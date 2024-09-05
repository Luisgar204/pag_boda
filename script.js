const cuentaRegresiva = new Date("Dec 1, 2024 00:00:00").getTime();

const x = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = cuentaRegresiva - ahora;

    const meses = Math.floor(distancia / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("cuenta-regresiva").innerHTML = 
    meses + "m " + dias + "d " +  horas + "h " + minutos + "m " + segundos + "s " ;

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("cuenta-regresiva").innerHTML = "¡Es el día de nuestra boda!";
    }
}, 1000);
window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('musica');
    audio.volume = 1;  // Ajusta el volumen si es necesario
});
document.getElementById('ingresarBtn').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('musica').play(); // Reproduce la música
});

    // Detecta cuando la sección de padrinos está en pantalla
    window.addEventListener('scroll', function() {
        const seccionPadrinos = document.querySelector('.seccion-padrinos');
        const posicion = seccionPadrinos.getBoundingClientRect().top;
        const pantallaAltura = window.innerHeight;

        if (posicion < pantallaAltura - 100) { // Ajusta la distancia de activación
            seccionPadrinos.classList.add('visible');
        }
    });
   // Mostrar el cuadro emergente para Efectivo
document.getElementById('btn-efectivo').addEventListener('click', function() {
  document.getElementById('popup-efectivo').classList.add('visible');
  document.getElementById('btn-banco').style.visibility = 'hidden'; // Ocultar botón Banco
});

// Mostrar el cuadro emergente para Banco
document.getElementById('btn-banco').addEventListener('click', function() {
  document.getElementById('popup-banco').classList.add('visible');
  document.getElementById('btn-efectivo').style.visibility = 'hidden'; // Ocultar botón Efectivo
});

// Función para cerrar los cuadros emergentes
function cerrarPopup(id) {
  document.getElementById(id).classList.remove('visible');
  document.getElementById('btn-efectivo').style.visibility = 'visible'; // Restaurar visibilidad
  document.getElementById('btn-banco').style.visibility = 'visible'; // Restaurar visibilidad
}

  

