 // Aquí tu código

const btnAgregarElemento = document.getElementById('agregar');
const listaElementos = document.getElementById('lista');

    btnAgregarElemento.addEventListener('click', function() {
    const nuevoElemento = prompt('Ingrese un elemento:');

        if (nuevoElemento !== null && nuevoElemento.trim() !== '') {
            const elementoLista = document.createElement('li');
            const textoElemento = document.createTextNode(nuevoElemento);
            elementoLista.appendChild(textoElemento);
            listaElementos.appendChild(elementoLista);
            }
        });

