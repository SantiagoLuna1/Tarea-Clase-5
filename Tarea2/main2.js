function datosUsuario(){
    const nombre = document.querySelector('#nombre-usuario').value;
    const apellido = document.querySelector('#apellido-usuario').value;
    const edad = document.querySelector('#edad-usuario').value;
    return `Tu nombre es ${nombre} ${apellido} y tu edad es ${edad}`;
}

const $mostrarDatosUsuario = document.querySelector("#mostrar-datos-usuario");

$mostrarDatosUsuario.onclick = function(){
    const cuerpoPagina = document.querySelector('#body'); //<body>
    const nuevoParrafo = document.createElement('p'); //<p>...</p>
    nuevoParrafo.textContent = datosUsuario(); //<p>Tu nombre es...</p>
    cuerpoPagina.appendChild(nuevoParrafo); //<body> <p>Tu nombre es...</p> </body>

    document.querySelector('#titulo').textContent = `Bienvenido ${document.querySelector('#nombre-usuario').value}!`;
    return false;
}

