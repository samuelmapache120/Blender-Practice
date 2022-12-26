var estadoLicuadora = "apagada";
var Licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerbrrbrr();
        Licuadora.classList.add("active");
        /* console.log("me prendiste"); */
        } else {
        estadoLicuadora = "apagada";
        hacerbrrbrr();
        Licuadora.classList.remove("active");
        /* console.log("me apagaste"); */
    }
}

function hacerbrrbrr() {
    if( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    }
    else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}