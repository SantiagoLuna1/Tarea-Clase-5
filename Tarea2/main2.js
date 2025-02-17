function datosUsuario(){
    const nombre = document.querySelector('#nombre-usuario').value;
    const apellido = document.querySelector('#apellido-usuario').value;
    const edad = document.querySelector('#edad-usuario').value;
    return `Tu nombre es ${nombre} ${apellido} y tu edad es ${edad}`;
}

const $mostrarDatosUsuario = document.querySelector("#mostrar-datos-usuario");

$mostrarDatosUsuario.onclick = function(){
    const cuerpoPagina = document.querySelector('#mostrar-dato'); //<div>
    const nuevoParrafo = document.createElement('p'); //<p>...</p>
    nuevoParrafo.textContent = datosUsuario(); //<p>Tu nombre es...</p>
    nuevoParrafo.classList.add('form-control');
    cuerpoPagina.appendChild(nuevoParrafo); //<div> <p>Tu nombre es...</p> </div>

    document.querySelector('#titulo').textContent = `Bienvenido ${document.querySelector('#nombre-usuario').value}!`;
    return false;
}

