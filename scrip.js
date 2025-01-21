
const luces = document.querySelectorAll('.Foco');
let contador = 0; // 0 = verde, 1 = amarillo, 2 = rojo

function cambiarLuz() {


    // para quitar los colores 

    luces[0].classList.remove("active");
    luces[1].classList.remove("active");
    luces[2].classList.remove("active");


    //alert("Este es un test");
    console.log("El listado es : ", luces);
    //luces[0].classList.add("active");
    //luces[1].classList.add("active");

    if (contador === 0) {
        luces[2].classList.add("active");
        setTimeout(cambiarLuz,2000);

    }
    else if (contador === 1) {
        luces[1].classList.add("active");
        setTimeout(cambiarLuz,2000);

    }
    
    else if (contador === 2) {
        luces[0].classList.add("active");
        setTimeout(cambiarLuz,2000);

    }



    contador = (contador+1)%3;
}
cambiarLuz();