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

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
    modal.style.display = "none";
    }
});

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

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
    modal2.style.display = "none";
    }
});

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

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
    modal3.style.display = "none";
    }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
var cont=2;
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target.appendChild(document.getElementById(data)).style.width ="400px";
    ev.target.appendChild(document.getElementById(data)).style.height ="400px";

    ev.target.appendChild(document.getElementById(data)).style.zIndex =cont;
    ev.target.appendChild(document.getElementById(data)).style.position ="absolue";
    ev.target.appendChild(document.getElementById(data)).style.top ="0";
    ev.target.appendChild(document.getElementById(data)).style.left ="0";
    ev.target.appendChild(document.getElementById(data)).style.right ="0";
    ev.target.appendChild(document.getElementById(data)).style.bottom ="0";


    var i;
    for (i=0; i<6;i++){
      var a = cont;
      cont++;
      }
}
