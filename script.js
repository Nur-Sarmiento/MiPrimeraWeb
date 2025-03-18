//<li><a href="#"></a></li> *# SIGNIFICA IR A LA MISMA PAG DONDE NOS ENCONTRAMOS


// Cuando haga CLICK en punto:
// -obtener la posición ese punto
// -Hacer transform: translateX(0 o -50%);
// -quitar a todos los puntos la clase ACTIVO
// -darle la clase ACTIVO al punto al que le hemos hecho click


/////////////// menu hamburguer(VARIABLES)////////////////

let enlaces=document.getElementById("nav-linksID")
let hamburguesa=document.getElementById("hamburguer-ID")

/////////////menu hambur (logica)///////////////////

hamburguesa.addEventListener("click",()=>{
    enlaces.classList.toggle("show")
})

/////////////banner carusel(VARIABLES)/////////////////
let contGrande= document.getElementById("grande-container");
let puntos= document.getElementsByClassName("punto");

//////////// BANNER CARRUSEL (LOGICA)

console.log(puntos)

for(let i = 0; i < puntos.length; i++){
    puntos[i].addEventListener("click",()=>{
        let posicionPunto = i; 
        let posicionContenedor;

        if(posicionPunto == 0){ // -obtener la posición ese punto
            posicionContenedor = 0
        }
        else{
            posicionContenedor = -50
        }

        contGrande.style.transform = `translateX(${posicionContenedor}%)` // -Hacer transform: translateX(0 o -50%);

        for(let j=0; j< puntos.length; j++){
            puntos[j].classList.remove("punto-activo") // -quitar a todos los puntos la clase ACTIVO
        }

        puntos[i].classList.add("punto-activo") // -darle la clase ACTIVO al punto al que le hemos hecho click

    })
}

//(??????????????????????????????????????)