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

    if (c1 > c2) {
        document.getElementById('ResCad').value = "La Cadena 1 es mayor";
    } else if (c2 > c1) {
        document.getElementById('ResCad').value = "La Cadena 2 es mayor";
    } else {
        document.getElementById('ResCad').value = "Tienen el mismo tamaño";
    }
}

function cadContar() {
    let c1 = document.getElementById('Cad1').value;
    let c2 = document.getElementById('Cad2').value;

}

function cadEspacios() {
    let c1 = document.getElementById('Cad1').value; 
    let resultado = c1.replace(g, '');

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

function veCrear(){
        var texto = document.getElementById("campo1").value;

        if (texto !== "") {
            var partes = texto.split(",");
            var nuevoVector = [];
            var correcto = true;

            for (var i = 0; i < partes.length; i++) {
                if (partes[i].trim() === "" || isNaN(Number(partes[i]))) {
                    correcto = false;
                } else {
                    nuevoVector[i] = Number(partes[i]);
                }
            }

            if (correcto) {
                numeros = nuevoVector;

                document.getElementById("resultado1").value =+ numeros.join(", ");
            } else {
                numeros = [];
                alert("Ingrese números separados correctamente por comas");
            }
        } else {
            alert("Ingrese los números");
        }
    }


function veSumar(){
        if (numeros.length > 0) {
            var suma = 0;

            for (var i = 0; i < numeros.length; i++) {
                suma = suma + numeros[i];
            }

            document.getElementById("resultado1").value =suma;
        } else {
            alert("Primero debe crear el vector");
        }
    }

function vePares(){
      if (numeros.length > 0) {
            var resultado = 1;
            var hayPares = false;

            for (var i = 0; i < numeros.length; i++) {
                if ((i + 1) % 2 === 0) {
                    resultado = resultado * numeros[i];
                    hayPares = true;
                }
            }

            if (hayPares) {
                document.getElementById("resultado1").value = resultado;
            } else {
                document.getElementById("resultado1").value =
                    "No hay posiciones pares";
            }
        } else {
            alert("Primero debe crear el vector");
        }
    }
