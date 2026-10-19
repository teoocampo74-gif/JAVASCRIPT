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