//Sección Paisajes
var modal = document.getElementById('myModal');
var seccion = document.getElementById("primer-cuerpo");
var span = document.getElementsByClassName("close")[0];

seccion.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Sección Comida
var modal2 = document.getElementById('myModal2');
var seccion2 = document.getElementById("segundo-cuerpo");
var span2 = document.getElementsByClassName("close")[1];

seccion2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

//Sección Actividades
var modal3 = document.getElementById('myModal3');
var seccion3 = document.getElementById("tercer-cuerpo");
var span3 = document.getElementsByClassName("close")[2];

seccion3.onclick = function() {
    modal3.style.display = "block";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}