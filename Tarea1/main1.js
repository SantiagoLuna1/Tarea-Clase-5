function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}

const $calcularSalarioMensual = document.querySelector('#calcular-salario-mensual');

$calcularSalarioMensual.onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual) //llama a la funcion
    document.querySelector('#salario-mensual').value = salarioMensual;
    return false;
}