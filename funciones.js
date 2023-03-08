// MENU DESPLEGABLE

var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu(){
    if(menu_visible){
        menu.style.display = "none"; // propiedad de visualizacion
        menu_visible = false;
    }
    else{
        menu.style.display = "block";
        menu_visible = true;
    }
}

let opciones = document.querySelectorAll("nav a");
for(var x = 0; x < opciones.length; x++){
    opciones[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


// HABILIDADES

// creo las barritas identificadas por un id (con 20 unidades)
function crearBarra(id_barra){
    for(i = 0; i <= 19; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// selecciono todas las barras
let lanwan = document.getElementById("lanwan");
crearBarra(lanwan);
let bdoracle = document.getElementById("bdoracle");
crearBarra(bdoracle);
let bdsql = document.getElementById("bdsql");
crearBarra(bdsql);
let admnube = document.getElementById("admnube");
crearBarra(admnube);
let ingles = document.getElementById("ingles");
crearBarra(ingles);
let aleman = document.getElementById("aleman");
crearBarra(aleman);

// arreglo con contadores respectivos a cada barrita
let cont = [-1,-1,-1,-1,-1,-1];

// lleno una barra particular con la cantidad correspondiente
function pintarBarra(id_barra, cantidad, indice, interval){
    cont[indice]++;
    x = cont[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "blueviolet";
    }else{
        clearInterval(interval)
    }
}

let entro = false;
// función que aplica las animaciones de la habilidades
function aplicarEfectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300 && entro == false){
        entro = true;
        const intervalLanWan = setInterval(function(){
            pintarBarra(lanwan, 14, 0, intervalLanWan);
        },100);
        const intervalBdOracle = setInterval(function(){
            pintarBarra(bdoracle, 17, 1, intervalBdOracle);
        },100);
        const intervalBdSql = setInterval(function(){
            pintarBarra(bdsql, 17, 2, intervalBdSql);
        },100);
        const intervalAdmNube = setInterval(function(){
            pintarBarra(admnube, 15, 3, intervalAdmNube);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 19, 4, intervalIngles);
        },100);
        const intervalAleman = setInterval(function(){
            pintarBarra(aleman, 14, 5, intervalAleman);
        },100);
    }
}

// llenar las barritas al scrollear
window.onscroll = function(){
    aplicarEfectoHabilidades();
}