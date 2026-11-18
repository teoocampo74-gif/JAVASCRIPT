    function suma(){
    let a = parseInt(document.getElementById('Campo1').value)
    let b = parseInt(document.getElementById('Campo2').value)
    document.getElementById('Resultado').value = (a+b) 
}

function restar(){
    let a = parseInt(document.getElementById('Campo1').value)
    let b = parseInt(document.getElementById('Campo2').value)
    document.getElementById('Resultado').value = (a-b) 
}

function multiplicar(){
    let a = parseInt(document.getElementById('Campo1').value)
    let b = parseInt(document.getElementById('Campo2').value)
    document.getElementById('Resultado').value = (a*b) 
}

function dividir(){
    let a = parseInt(document.getElementById('Campo1').value)
    let b = parseInt(document.getElementById('Campo2').value)
    document.getElementById('Resultado').value = (a/b) 
}

function potenciacion(){
    let a = parseInt(document.getElementById('Campo1').value)
    let b = parseInt(document.getElementById('Campo2').value)
    document.getElementById('Resultado').value = (a ** b) 
}

function calcularRaiz(){
    let a = parseFloat(document.getElementById('Campo1').value)
    document.getElementById('Resultado').value = raiz(a)
}

function verificarMultiplo(){
    let a = parseInt(document.getElementById('Campo1').value)
    let b = parseInt(document.getElementById('Campo2').value)
    document.getElementById('Resultado').value = multiplo(a, b)
}

function verTamanocadena(){
    let cadena = document.getElementById('Campo1').value
    document.getElementById('Resultado').value = tamanocadena(cadena)
}


function raiz(a){
    return (Math.sqrt(a))
}

function multiplo(a, b){
    if (a % b === 0){
        return "Es un multiplo"
    }else{
        return "No es un multiplo"
    }
}

function tamanocadena(cadena){
    return cadena.length
}

function compararValores() {
    let a = parseFloat(document.getElementById('Campo1').value);
    let b = parseFloat(document.getElementById('Campo2').value);

    if (a > b) {
        document.getElementById('Resultado').value = "El Valor 1 es mayor";
    } else if (b > a) {
        document.getElementById('Resultado').value = "El Valor 2 es mayor";
    } else {
        document.getElementById('Resultado').value = "Los dos valores son iguales";
    }
}



// OPERACIONES CON CADENAS DE TEXTO


function cadComparar() {
    let c1 = document.getElementById('Cad1').value.length;
    let c2 = document.getElementById('Cad2').value.length;
    let resultado = document.getElementById('ResCad');

    if (c1 > c2) {
        resultado.value = "La Cadena 1 es mayor";
    } else if (c2 > c1) {
        resultado.value = "La Cadena 2 es mayor";
    } else {
        resultado.value = "Tienen el mismo tamaño";
    }
}

function cadContar() {
    let c1 = document.getElementById('Cad1').value;
    let c2 = document.getElementById('Cad2').value;
    let resultado = document.getElementById('ResCad');

    if (c1 === "" || c2 === "") {
        resultado.value = "Ingrese la Cadena 1 y la Cadena 2";
        return;
    }

    let veces = c1.split(c2).length - 1;

    if (veces === 0) {
        resultado.value = "'" + c2 + "' no aparece en la Cadena 1";
    } else if (veces === 1) {
        resultado.value = "'" + c2 + "' aparece 1 vez";
    } else {
        resultado.value = "'" + c2 + "' aparece " + veces + " veces";
    }
}

function cadEspacios() {
    let c1 = document.getElementById('Cad1').value;
    let resultado = c1.replace(/\s/g, '');
    document.getElementById('ResCad').value = resultado;
}

function cadInsertar() {
    let c1 = document.getElementById('Cad1').value;
    let c2 = document.getElementById('Cad2').value;
    let mitad = Math.floor(c1.length / 2);
    let resultado = c1.substring(0, mitad) + c2 + c1.substring(mitad);

    document.getElementById('ResCad').value = resultado;
}



// OPERACIONES SOBRE VECTORES

function leerNumeros() {
    let texto = document.getElementById("campo1").value.trim();
    let resultado = document.getElementById("resVector");

    if (texto === "") {
        resultado.value = "Ingrese números separados por coma";
        return null;
    }

    let arreglo = texto.split(",");
    let numeros = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].trim() === "" || isNaN(Number(arreglo[i]))) {
            resultado.value = "Error: Solo se permiten números";
            return null;
        }
        numeros.push(Number(arreglo[i]));
    }
    return numeros;
}

function crear() {
    let numeros = leerNumeros();
    if (numeros === null) return;

    document.getElementById("resVector").value = numeros.join(",");
}

function sumarVector() {
    let numeros = leerNumeros();
    if (numeros === null) return;

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    document.getElementById("resVector").value = suma;
}

function pares() {
    let numeros = leerNumeros();
    if (numeros === null) return;

    let listaPares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            listaPares.push(numeros[i]);
        }
    }

    let resultado = document.getElementById("resVector");
    if (listaPares.length === 0) {
        resultado.value = "No hay números pares";
    } else if (listaPares.length === 1) {
        resultado.value = "Hay 1 número par: " + listaPares[0];
    } else {
        resultado.value = "Hay " + listaPares.length + " números pares: " + listaPares.join(",");
    }
}