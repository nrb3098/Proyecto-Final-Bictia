var imagenes = [
        'images/Ciudad1.jpg', 'images/Ciudad2.jpg', 'images/Ciudad3.jpg', 'images/Ciudad4.jpg', 'images/Ciudad5.jpg', 'images/Ciudad6.jpg', 'images/Ciudad7.jpg'
    ],
    cont = 0;

function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('ímg'),
            tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;

            }

        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;

            }


        }

    });
}