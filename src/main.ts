alert("Hoy vamos a calcular el area de un circulo dado su radio");

let radio: number = Number(prompt("Asigna el radio del circulo"));
let resultado: number = (Math.PI*Math.pow(radio, 2));

console.log(resultado);

alert("tu resultado es: "+resultado) ;