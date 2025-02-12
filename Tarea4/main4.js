function convertirArray(){
    const lista = document.querySelectorAll('li');
    const array = [];
    
    for (let i = 0; i < lista.length; i++) {
        array.push(lista[i].textContent);
    }
    return array;
}

const array = convertirArray(); //lo guardo en una variable para manipularlo mas facil

function calcularPromedio(){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += Number(array[i]);
    }
    let promedio = suma / array.length;
    return promedio;
}

function calcularMinimo(){
    let minimo = Number(array[0]);
    for (let i = 0; i < array.length; i++) {
        let numero = Number(array[i]);
        if (numero < minimo) {
            minimo = numero;
        }
    return minimo;
    }
}

function calcularMaximo(){
    let maximo = Number(array[0]);
    for (let i = 0; i < array.length; i++) {
        let numero = Number(array[i]);
        if (numero > maximo) {
            maximo = numero;
        }
    }
    return maximo;
}

function calcularFrecuente(){
    let contador = {};  //objeto para contar repeticiones
    let numeroMasRepetido = null;  //variable para almacenar el número más repetido
    let maxRepeticiones = 0;  //variable para almacenar la cantidad máxima de repeticiones

    for (let i = 0; i < array.length; i++) {
        let numero = Number(array[i]);
        if (!contador[numero]) {
            contador[numero] = 1;   //si no existe en el objeto contador le asigna un 1
        } else {
            contador[numero] += 1;  //si existe le agrega un 1
        }
        if (contador[numero] > maxRepeticiones) {
            maxRepeticiones = contador[numero];
            numeroMasRepetido = numero;
        }
    }
    return numeroMasRepetido;
}

document.getElementById('promedio').textContent = calcularPromedio();
document.getElementById('minimo').textContent = calcularMinimo();
document.getElementById('maximo').textContent = calcularMaximo();
document.getElementById('frecuente').textContent = calcularFrecuente();