function tiempoTotal(){
    const hsClase1 = Number(document.querySelector('#horas-clase1').value);
    const hsClase2 = Number(document.querySelector('#horas-clase2').value);
    const hsClase3 = Number(document.querySelector('#horas-clase3').value);
    const hsClase4 = Number(document.querySelector('#horas-clase4').value);
    const hsClase5 = Number(document.querySelector('#horas-clase5').value);
    const minClase1 = Number(document.querySelector('#minutos-clase1').value) / 60;
    const minClase2 = Number(document.querySelector('#minutos-clase2').value) / 60;
    const minClase3 = Number(document.querySelector('#minutos-clase3').value) / 60;
    const minClase4 = Number(document.querySelector('#minutos-clase4').value) / 60;
    const minClase5 = Number(document.querySelector('#minutos-clase5').value) / 60;
    const segClase1 = Number(document.querySelector('#segundos-clase1').value) / 3600;
    const segClase2 = Number(document.querySelector('#segundos-clase2').value) / 3600;
    const segClase3 = Number(document.querySelector('#segundos-clase3').value) / 3600;
    const segClase4 = Number(document.querySelector('#segundos-clase4').value) / 3600;
    const segClase5 = Number(document.querySelector('#segundos-clase5').value) / 3600;
    return hsClase1 + hsClase2 + hsClase3 + hsClase4 +hsClase5 + minClase1 + minClase2 + minClase3 + minClase4 + minClase5 + segClase1 + segClase2 + segClase3 + segClase4 + segClase5;
}

function distincionTiempo (){
    const totalHoras = tiempoTotal();
    const horas = Math.floor(totalHoras);
    const minutos = Math.floor((totalHoras - horas) * 60); 
    const segundos = Math.floor(((totalHoras - horas) * 60 - minutos) * 60);
    return `${horas} hs ${minutos} min ${segundos} seg`;
}

const $calcularTiempoTotal = document.querySelector('#calcular');

$calcularTiempoTotal.onclick = function(){
    const cuerpoPagina = document.querySelector('#mostrar-calculo'); //<body>
    const datoSumado = document.createElement('strong'); //<strong> ...
    datoSumado.textContent = distincionTiempo(); //<strong> hs min seg </strong>
    datoSumado.classList.add('form-control');
    cuerpoPagina.appendChild(datoSumado);
    return false;
}