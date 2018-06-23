console.log('hola que tal');
function dos() {
    console.log(2);
}

function cambiarTitulo(){
    const etiquetaTitulo = document.getElementById('titulo');

    etiquetaTitulo.onmouseenter = undefined;
    etiquetaTitulo.innerText = 'Adios pelao!';
    etiquetaTitulo.className = 'cafe';
    eliminarEventoOnMouseEnterEnboton();
}

function eliminarEventoOnMouseEnterEnboton(){
    const etiquetaBoton = document.getElementById('botonTitulo');
    etiquetaBoton.onmouseenter = undefined;
}

function crearContenido() {
    const etiquetaContenedora = document
        .getElementById('contenido');

    const elementoTitulo = document
        .createElement('h5');
    elementoTitulo.className = 'card-title';
    elementoTitulo.textContent = 'Titulo';

    const elementoParrafo = document
        .createElement('p');
    elementoParrafo.className = 'card-text';
    elementoParrafo.textContent = 'Contenido';

    const elementoBoton = document
        .createElement('button');
    elementoBoton.className = 'btn btn-primary';
    elementoBoton.textContent = 'Accion';

    const contenedorCardBody = document
        .createElement('div');
    contenedorCardBody.className = 'card-body';
    contenedorCardBody.appendChild(elementoTitulo);
    contenedorCardBody.appendChild(elementoParrafo);
    contenedorCardBody.appendChild(elementoBoton);

    const etiquetaImagen = document.createElement("img");
    etiquetaImagen.src = 'https://static.comicvine.com/uploads/square_medium/10/100757/4264037-darkmagician-tf05-jp-vg.jpg';
    etiquetaImagen.className = 'card-img.top';
    etiquetaImagen.alt = 'imagen del mago oscuro';

    const etiquetaCarta = document.createElement('div');
    etiquetaCarta.className = 'card';
    etiquetaCarta.appendChild(etiquetaImagen);
    etiquetaCarta.appendChild(contenedorCardBody);

    etiquetaContenedora.appendChild(etiquetaCarta);
}

function traerPost(idPost: number) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            const postJson = JSON.parse(this.responseText);
            console.log(
                postJson
            );
            console.log(
                postJson.userId
            );
        }
    };
    xhttp.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/" + idPost,
        //"https://google.com" + idPost,
        true);

    xhttp.send();
}
