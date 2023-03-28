const slider =
document.querySelector('.slider');

const arrLeft =
document.querySelector('.arrow-left');

const arrRight =
document.querySelector('.arrow-right');

const heading =
document.querySelector('.title h1');

const description =
document.querySelector('.title p');

const images = [
    "f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg", "f5.jpg", "f6.jpg", "f7.jpg"
];

const headings = [
    "Colección", "Colección", "Colección", "Colección", "Colección", "Colección", "Colección"
];

const descriptions = [
    "Ciencia Ficción",
    "Belico",
    "Filosofia",
    "Fisica",
    "Misterio",
    "Politica",
    "Terror",
];

let id = 0;

function slide(id) {
    slider.style.backgroundImage = 
    `url(imagenes/${images[id]})`;
    slider.classList.add('image-fade');
    setTimeout( () => {
        slider.classList.remove('image-fade');
    },550);

    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}

arrLeft.addEventListener('click', () =>{
    id --;

    if(id < 0){
        id = images.length - 1;
    }

    slide(id);
});

arrRight.addEventListener('click', () =>{
    id++;

    if(id > images.length - 1){
        id = 0;
    }

    slide(id);
});


































const fila = document.querySelector('.contenedor-carrusel');
const libros = document.querySelectorAll('.libro');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

const numeroPaginas = Math.ceil(libros.length / 5);
for (let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if( i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

libros.forEach((libro) =>{
    libro.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() =>{
            libros.forEach(libro => libro.classList.remove('.hover'));
            elemento.classList.add('hover');
        },300);
    });
});

fila.addEventListener('mouseleave', () => {
    libros.forEach(libro => libro.classList.remove('.hover'));
});




/* carrusel dos */
const fila2 = document.querySelector('.contenedor-carrusel2');
const libros2 = document.querySelectorAll('.libro2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

flechaDerecha2.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth;

    const indicadorActivo2 = document.querySelector('.indicadores2 .activo2');
    if(indicadorActivo2.nextSibling){
        indicadorActivo2.nextSibling.classList.add('activo2');
        indicadorActivo2.classList.remove('activo2');
    }
});


flechaIzquierda2.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth;

    
    const indicadorActivo2 = document.querySelector('.indicadores2 .activo2');
    if(indicadorActivo2.previousSibling){
        indicadorActivo2.previousSibling.classList.add('activo2');
        indicadorActivo2.classList.remove('activo2');
    }
});

const numeroPaginas2 = Math.ceil(libros2.length / 5);
for (let i = 0; i < numeroPaginas2; i++){
    const indicador2 = document.createElement('button');

    if( i === 0){
        indicador2.classList.add('activo2');
    }

    document.querySelector('.indicadores2').appendChild(indicador2);
    indicador2.addEventListener('click', (e) => {
        fila2.scrollLeft = i * fila2.offsetWidth;

        document.querySelector('.indicadores2 .activo2').classList.remove('activo2');
        e.target.classList.add('activo2');
    });
}

libros2.forEach((libro2) =>{
    libro2.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() =>{
            libros2.forEach(libro2 => libro2.classList.remove('.hover'));
            elemento.classList.add('hover');
        },300);
    });
});

fila2.addEventListener('mouseleave', () => {
    libros2.forEach(libro2 => libro2.classList.remove('.hover'));
});


/* carrusel tres */
const fila3 = document.querySelector('.contenedor-carrusel3');
const libros3 = document.querySelectorAll('.libro3');

const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

flechaDerecha3.addEventListener('click', () => {
    fila3.scrollLeft += fila3.offsetWidth;

    const indicadorActivo3 = document.querySelector('.indicadores3 .activo3');
    if(indicadorActivo3.nextSibling){
        indicadorActivo3.nextSibling.classList.add('activo3');
        indicadorActivo3.classList.remove('activo3');
    }
});


flechaIzquierda3.addEventListener('click', () => {
    fila3.scrollLeft -= fila3.offsetWidth;

    
    const indicadorActivo3 = document.querySelector('.indicadores3 .activo3');
    if(indicadorActivo3.previousSibling){
        indicadorActivo3.previousSibling.classList.add('activo3');
        indicadorActivo3.classList.remove('activo3');
    }
});

const numeroPaginas3 = Math.ceil(libros3.length / 5);
for (let i = 0; i < numeroPaginas3; i++){
    const indicador3 = document.createElement('button');

    if( i === 0){
        indicador3.classList.add('activo3');
    }

    document.querySelector('.indicadores3').appendChild(indicador3);
    indicador3.addEventListener('click', (e) => {
        fila3.scrollLeft = i * fila3.offsetWidth;

        document.querySelector('.indicadores3 .activo3').classList.remove('activo3');
        e.target.classList.add('activo3');
    });
}

libros3.forEach((libro3) =>{
    libro3.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() =>{
            libros3.forEach(libro3 => libro3.classList.remove('.hover'));
            elemento.classList.add('hover');
        },300);
    });
});

fila3.addEventListener('mouseleave', () => {
    libros3.forEach(libro3 => libro3.classList.remove('.hover'));
});



/* carrusel cuatro */
const fila4 = document.querySelector('.contenedor-carrusel4');
const libros4 = document.querySelectorAll('.libro4');

const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');

flechaDerecha4.addEventListener('click', () => {
    fila4.scrollLeft += fila4.offsetWidth;

    const indicadorActivo4 = document.querySelector('.indicadores4 .activo4');
    if(indicadorActivo4.nextSibling){
        indicadorActivo4.nextSibling.classList.add('activo4');
        indicadorActivo4.classList.remove('activo4');
    }
});


flechaIzquierda4.addEventListener('click', () => {
    fila4.scrollLeft -= fila4.offsetWidth;

    
    const indicadorActivo4 = document.querySelector('.indicadores4 .activo4');
    if(indicadorActivo4.previousSibling){
        indicadorActivo4.previousSibling.classList.add('activo4');
        indicadorActivo4.classList.remove('activo4');
    }
});

const numeroPaginas4 = Math.ceil(libros4.length / 5);
for (let i = 0; i < numeroPaginas4; i++){
    const indicador4 = document.createElement('button');

    if( i === 0){
        indicador4.classList.add('activo4');
    }

    document.querySelector('.indicadores4').appendChild(indicador4);
    indicador4.addEventListener('click', (e) => {
        fila4.scrollLeft = i * fila4.offsetWidth;

        document.querySelector('.indicadores4 .activo4').classList.remove('activo4');
        e.target.classList.add('activo4');
    });
}

libros4.forEach((libro4) =>{
    libro4.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() =>{
            libros4.forEach(libro4 => libro4.classList.remove('.hover'));
            elemento.classList.add('hover');
        },300);
    });
});

fila4.addEventListener('mouseleave', () => {
    libros4.forEach(libro4 => libro4.classList.remove('.hover'));
});


/* carrusel cinco */
const fila5 = document.querySelector('.contenedor-carrusel5');
const libros5 = document.querySelectorAll('.libro5');

const flechaIzquierda5 = document.getElementById('flecha-izquierda5');
const flechaDerecha5 = document.getElementById('flecha-derecha5');

flechaDerecha5.addEventListener('click', () => {
    fila5.scrollLeft += fila5.offsetWidth;

    const indicadorActivo5 = document.querySelector('.indicadores5 .activo5');
    if(indicadorActivo5.nextSibling){
        indicadorActivo5.nextSibling.classList.add('activo5');
        indicadorActivo5.classList.remove('activo5');
    }
});


flechaIzquierda5.addEventListener('click', () => {
    fila5.scrollLeft -= fila5.offsetWidth;

    
    const indicadorActivo5 = document.querySelector('.indicadores5 .activo5');
    if(indicadorActivo5.previousSibling){
        indicadorActivo5.previousSibling.classList.add('activo5');
        indicadorActivo5.classList.remove('activo5');
    }
});

const numeroPaginas5 = Math.ceil(libros5.length / 5);
for (let i = 0; i < numeroPaginas5; i++){
    const indicador5 = document.createElement('button');

    if( i === 0){
        indicador5.classList.add('activo5');
    }

    document.querySelector('.indicadores5').appendChild(indicador5);
    indicador5.addEventListener('click', (e) => {
        fila5.scrollLeft = i * fila5.offsetWidth;

        document.querySelector('.indicadores5 .activo5').classList.remove('activo5');
        e.target.classList.add('activo5');
    });
}

libros5.forEach((libro5) =>{
    libro5.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() =>{
            libros5.forEach(libro4 => libro4.classList.remove('.hover'));
            elemento.classList.add('hover');
        },300);
    });
});

fila5.addEventListener('mouseleave', () => {
    libros5.forEach(libro5 => libro5.classList.remove('.hover'));
});











