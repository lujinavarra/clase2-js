//pedir al usuario un valor y comparar
let edad = parseInt(prompt ("Ingresa tu edad"));
if (edad >= 18) {
alert ("puedes ingresar al sitio");
} else {
alert ("No puedes ingresar al sitio");
}

//pedir un numero por prompt y mostrar un alert
let cantidadDolaresParaComprar = parseInt(prompt ("¿Cuántos Dólares quieres comprar?"));
if (cantidadDolaresParaComprar < 1000){
    alert ("Te redirigimos al sitio de compra");
} else {
    alert ("No se puede realizar la transacción")
}
//pedir un texto y mostrar por consola
let texto = prompt ("¿Cómo escribes un saludo?");
if (texto === "Hola"){
    console.log("¡Muy bien!!");
} else {
    console.log ("no entendi lo que escribiste")
}
//pedir un numero y evaluar si esta entre 10 y 50
let edadAutorizada =  parseInt(prompt ("Ingresa tu edad"));
if (edadAutorizada >=10 && edadAutorizada <= 50){
    alert ("Se puede realizar la Ergometría");
} else {
    alert ("No se puede ingresar al Estudio")
}
