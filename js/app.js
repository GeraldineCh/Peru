var indice = 0;

function carrusel() {
    var i;
    var x = document.getElementsByClassName("portada");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    indice++;
    if (indice > x.length) {indice = 1} 
    x[indice-1].style.display = "block"; 
    setTimeout(carrusel, 5000); // Change image every 2 seconds
}
carrusel(); //Callback Carrousel



