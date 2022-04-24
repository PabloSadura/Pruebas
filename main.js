// Generador de tablas Matematicas

let num = parseInt(prompt("Ingresa el numero a multiplicar"));
let cant = parseInt(prompt("Ingresa hasta que numero queres multiplicar"));

for (let i=0; i<=cant; i++){
    let res = num * i;
    console.log(num + "x" + i + "=" + res);
}

// Caulculadora
console.log("1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n0. Salir");
let ingresoDato = parseInt(prompt("Ingresa el numero para operar"));
let num1;
let num2;
while (ingresoDato != 0){
    
    switch (ingresoDato){
        case 1: 
            num1 = parseFloat(prompt("Ingresar un numero"));
            num2 = parseFloat(prompt("Ingresar un numero"));
            console.log("La suma es: " + (num1+num2));
            break;
        case 2: 
            num1 = parseFloat(prompt("Ingresar un numero"));
            num2 = parseFloat(prompt("Ingresar un numero"));
            console.log("La resta es: " + (num1-num2));
            break;
        case 3: 
            num1 = parseFloat(prompt("Ingresar un numero"));
            num2 = parseFloat(prompt("Ingresar un numero"));
            console.log("El producto es: " + (num1*num2));
            break;
        case 4: 
            num1 = parseFloat(prompt("Ingresar un numero"));
            num2 = parseFloat(prompt("Ingresar un numero"));
            console.log("La division es: " + (num1/num2));
            break;
        default:
            alert("No ingreso un numero válido")
    }
    console.log("1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n0. Salir");
    ingresoDato = parseInt(prompt("Ingresa el numero para operar"));
}

alert("Gracias por utilizar la calculadora");