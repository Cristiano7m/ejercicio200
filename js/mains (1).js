function suma(){
    let A = 0;
    let B = 0;
    let S = 0;

    
    alert("Por favor ingrese el primer valor: "); // alert: para escribir el msj 
    A=parseInt(prompt("")); // prompt: guarda la información 
    
    
    alert("Por favor ingrese el segundo valor: ");
    B=parseInt(prompt(""));  // parseInt: para convertir de str a int
   
    S=A+B;

    alert(A + "+" + B + " = " + S);
}

function opBasicas(){
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;

    A=parseInt(prompt("Ingrese el primer valor"));
    B=parseInt(prompt("Ingrese el segundo valor"));

    S=A+B;
    R=A-B;
    M=A*B;
    D=A/B;

    alert(A + "+" + B + " = " + S + "\n" + A + "-" + B + " = " + R + 
    "\n" + A + "*" + B + " = " + M + "\n" + A + "/" + B + " = " + D);
}

function mayorQ(){
    let A=0;
    let B=0;
    
    A=parseInt(prompt("Digite primer número"));
    B=parseInt(prompt("Digite segundo número"));

    if (A == B){
        alert("LOS NUMEROS SON IGUALES :" );
    }
    else if (A > B){
        alert(A + " > " + B);  
    }
    else {
        alert(B + ">" + A)
    }
}

function menorQ(){
    let A=0;
    let B=0;
    let C=0;

    A=parseInt(prompt("Digite el primer número"));
    B=parseInt(prompt("Digite el segundo número"));
    C=parseInt(prompt("Digite el tercer número"));

    if (A==B && A==C &&  B==C){
        alert(A + ", " +  B + ", " + C + " Los números ingresados son iguales");
    }
    else if (A<B && A<C){
        alert(A + ", " +  B + ", " + C + " El menor de los tres números ingresados es: " + A);
    }
    else if (B<A && B<C){
        alert(A + ", " +  B + ", " + C + " El menor de los tres números ingresados es: " + B);
    }
    else {
        alert(A + ", " +  B + ", " + C + " El menor de los tres números ingresados es: " + C);
    }
}

function parOimpar(){
    
    let A=0;

    A=parseInt(prompt("Digite un número"));

    if (A % 2==0){
        alert("El número " + A + " es par");
    }
    else {
        alert("El número " + A + " es impar");
    }
}

function cuadrado(){
    let X=0;
    let Y=0;

    X=parseInt(prompt("Digite un número"));
    Y = X**2;

    alert("El cuadrado de " + X + " es: " + Y)
}

function areaTriangulo(){
    let b=0;
    let h=0;
    let a=0;
    
    alert("Para hallar el área del triángulo la unidad de medida utilizada será dada en metros")
    b=parseInt(prompt("Digite la base del triángulo"));
    h=parseInt(prompt("Digite la altura del triángulo"));

    A=(b*h)/2;

    alert("El área del triángulo es: " + A + "m^2");
}

function conversion() {
    let m=0;
    let cm=0;
    let pul=0;

    m=parseInt(prompt("Digite el valor a convertir de m a cm y in"));

    cm = 100*m;
    pul= 39.3701*m;

    alert(m + "m equivale a " + cm + "cm" + 
    "\n" + m + "m equivale a " + pul + "in");
    
}
function fechaNacido() {
    let edad = 0;
    let fechaActual = 0;
    let fechaNacido = 0;

    fechaActual=parseInt(prompt("Ingrese el año actual: "));
    edad=parseInt(prompt("Ingrese la edad del usuario: "));
    
    fechaNacido = fechaActual-edad;
    
    alert("El año de nacimiento es: " + fechaNacido);
}  


function calificacionestudiantil(){
// El colegio abc requiere un sistema que le permita calcular el promedio,de un alumno que tiene 7 calificaciones o notas en X materia.Las calificaciones son en escala de 1 a10,
//donde reprueba entre 1 y 6.1 y aprueba si es superior a 6.1 (datos de entrada:nombre del estudiante materia y notas) (datos de salida: nombre del estudiante y si aprobo o reprobo)

//declaracion de varaiables
let alumno = prompt ("Ingrese el nombre del alumno :  ");
let materia = prompt ("Ingrese la materia que desea evaluar:  ");


//se procede a hacer el calculo para saber si aprueba o no el estudiante
  
let nota = parseInt(prompt("Ingrese las notas obtenidas:  "));
//ciclo for permitira al usuario no exederse de los datos solicitados en este caso no pueden ser mayores la notas a 7
for (var i=0; i<=7; i++)

if (nota ) {
    return "Ingrese la nueva nota";
  } else if (nota >7 ) {
    return "no puede ingresar mas de 7 notas";
  } else {
    return "notas invalidas";
  }


    if (calificacion >= 6.1 && calificacion <= 10) {
        return "Aprobado";
      } else if (calificacion >= 1 && calificacion < 6.1) {
        return "Reprobado";
      } else {
        return "Calificacion invalida";
      }




      alert("El año de nacimiento es: " + fechaNacido);

//se mostrar el mensaje dando solucion al problema
    }
function banco(){
const capitalInicial = parseFloat(prompt("Ingrese el monto de dinero que desea depositar:"));

// Verificar si el monto ingresado es válido
if (isNaN(capitalInicial)) {
  console.log("El monto ingresado no es válido.");
} else {
  const años = parseInt(prompt("Ingrese el número de años de la inversión:"));
  const meses = años*12;
  const tasaInteresAnual = 1.7;

  // Calcular las ganancias anuales y mensuales
  const gananciasAnuales = capitalInicial * (tasaInteresAnual * años);
  const gananciasMensuales = capitalInicial * (tasaInteresAnual / 12);

  alert("Ganancias anuales después de " + años + " años: " + gananciasAnuales);
  alert("Con ganancias mensuales aproximadas de" + gananciasMensuales);
  

}
}
function manzanas(){
    // Precio por kilo de las manzanas
const precioPorKilo = 4500;

// Solicitar al usuario ingresar la cantidad de kilos de manzanas
const cantidadKilos = parseFloat(prompt("Ingrese la cantidad de kilos de manzanas:"));

// Variable para almacenar el descuento
let descuento = 0;

// Calcular el descuento correspondiente
if (cantidadKilos >= 3 && cantidadKilos <= 5) {
  descuento = 0.1; // 10% de descuento
} else if (cantidadKilos >= 6 && cantidadKilos <= 10) {
  descuento = 0.15; // 15% de descuento
} else if (cantidadKilos > 10) {
  descuento = 0.2; // 20% de descuento
}

// Calcular el precio total con descuento
const precioTotal = precioPorKilo * cantidadKilos;
const descuentof = descuento * precioTotal;
const totalpagar =precioTotal -descuentof;

// Imprimir el resultado
alert(`El precio total de ${cantidadKilos} kilos de manzanas es: ${precioTotal} pesos.`);
alert('Pero usted tiene un descuento de: '+ descuento);
alert("El total a pagar de su compra es: "+totalpagar);
}


function obrero(){
    // Salario por hora para las primeras 40 horas
const salarioHoraNormal = 10000;

// Salario por hora extra (más de 40 horas)
const salarioHoraExtra = 20000;

// Solicitar al usuario ingresar las horas trabajadas
const horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));

// Variable para almacenar el salario semanal
let salarioSemanal = 0;

// Calcular el salario semanal
if (horasTrabajadas <= 40) {
  salarioSemanal = horasTrabajadas * salarioHoraNormal;
} else {
  const horasNormales = 40;
  const horasExtras = horasTrabajadas - 40;
  salarioSemanal = horasNormales * salarioHoraNormal + horasExtras * salarioHoraExtra;
}

// Imprimir el salario semanal
alert(`El salario semanal del obrero es: ${salarioSemanal} pesos.`);
}
