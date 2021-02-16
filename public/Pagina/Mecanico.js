/*document.getElementById("Redes").addEventListener("click", MejoraRedes)

document.getElementById("dinero").addEventListener("click", Pagar)
document.getElementById("Pagar").addEventListener("click", Operacion)




/*let Dinero = 50
let PrecioRedes = 50
let PrecioGas = 100
let PrecioAlmacenamiento = 100
let PrecioMotor = 250*/

/*function MejoraRedes() {
    //const resultado1 = Dinero - PrecioRedes

    //let PrecioRedes = 50
    let DineroActual = document.getElementById('dinero').innerHTML;
    let PrecioRedes = document.getElementById("Redes").innerHTML;
    document.getElementById('dinero').innerHTML = DineroActual + PrecioRedes

    /*if (Dinero <= 0) {
        console.log("No tienes suficiente dinero, solicita un giro");
    }
}

function Operacion() {
    let DineroActual = document.getElementById('dinero').innerHTML;
    let resta = DineroActual.indexOf("-");

    if(resta !== -1){
        lista = DineroActual.split("-", 2);
        resultado = parseInt(lista[0]) - parseInt(lista[1]);
        document.getElementById("dinero").innerHTML = resultado;
    }
}*/



/*function MejoraGas(Dinero) {
    //const resultado2 = PrecioGas - Dinero

    if (Dinero <= 0) {
        console.log("No tienes suficiente dinero, solicita un giro");
    }
}

function MejoraAlmacenamiento(Dinero){
    //const resultado3 = Dinero - PrecioAlmacenamiento

    if (Dinero <= 0) {
        console.log("No tienes suficiente dinero, solicita un giro");
    }
}

function MejoraMotor(Dinero){
    //const resultado4 = Dinero - PrecioMotor

    if (Dinero <= 0) {
        console.log("No tienes suficiente dinero, solicita un giro");
    }
}

const resultado1 = Dinero - PrecioRedes
const resultado2 = Dinero - PrecioGas
const resultado3 = Dinero - PrecioAlmacenamiento
const resultado4 = Dinero - PrecioMotor

const total = resultado1 + resultado2 + resultado3 + resultado4

console.log("total", total);*/

const BotonMejora = document.getElementsByName('BtnMejora');
const BotonPagar = document.getElementsByName('BtnPagar')[0];

var DineroActual = document.getElementById("dinero");
var OperacionActual = '';
var Operacion = undefined;
//console.log(DineroActual);

BotonMejora.forEach(function(boton){
    boton.addEventListener('click', function(){
        AgregarPrecio(boton.innerText);
    })
});

/*BotonPagar.forEach(function(boton)){
    boton.addEventListener('click', function(){
        console.log(BotonPagar);
    })
});*/

BotonPagar.addEventListener('click', function(){
    Calcular();
    ActualizarDinero();
});

//metodos
function AgregarPrecio(ValorMejora){
    OperacionActual = OperacionActual.toString() + ValorMejora.toString();
    ActualizarDinero();
}

function ActualizarDinero(){
    dinero.value =  OperacionActual;
}

function Calcular(){
    var calculo;
    const valoranterior = parseInt(OperacionAnterior);
    const valoractual = parseInt(OperacionActual);
    if(isNaN(valoranterior) || isNaN(valoractual)) return;
    calculo = valoranterior - valoractual;
    OperacionActual = calculo
    Operacion = undefined;
}