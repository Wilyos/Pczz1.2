const baseDeDatos = [
    {
        ref:1,
        nombre: 'HP 255G7',
        ram: 4,
        procesador: 'AMD 3020E',
        discoDuro:500,
        ssd: false,
        tGrafica: false,
        precio: '1.455.000',
        imagen: 'img/hp.png'
    },
    {
        ref: 2,
        nombre: 'ASUS X415JAEK483T',
        ram: 4,
        procesador:'Core i3',
        discoDuro:1000,
        ssd: false,
        tGrafica:false,
        precio: '1.814.900',
        imagen: 'img/asus.png'
    },
    {
        ref: 3,
        nombre: 'ACER GAMING AN515-55-54Y1',
        ram: 8,
        procesador:'Core i5',
        discoDuro:512,
        ssd:true,
        tGrafica:true,
        precio: '3.999.000',
        imagen: 'img/acerg.png'
    },
    {
        ref: 4,
        nombre: 'MacBook Pro',
        ram: 16,
        procesador:'M1',
        discoDuro:1000,
        ssd: true,
        tGrafica: false,
        precio: '14.969.000',
        imagen: 'img/mac.png'
    }

];


const divisa = '$';
const DOMitems = document.querySelector('#items');
const compitems = document.querySelector('#comparar');
const btnComparar = document.querySelector('#btnComparar');


// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function catalogo() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-3');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body',);
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid', 'zoom');
        miNodoImagen.setAttribute('src', info.imagen);
        //referencia
        const miNodoReferencia = document.createElement('p');
        miNodoReferencia.classList.add('card-text');
        miNodoReferencia.textContent ='Ref: '+ info.ref;
        //procesador
        const miNodoProcesador = document.createElement('p');
        miNodoProcesador.classList.add('card-text');
        miNodoProcesador.textContent ='Procesador: '+ info.procesador;
        //ram
        const miNodoRam = document.createElement('p');
        miNodoRam.classList.add('card-text');
        miNodoRam.textContent ='RAM: '+info.ram+'GB';
        //disco
        const miNodoDisco = document.createElement('p');
        miNodoDisco.classList.add('card-text');
        miNodoDisco.textContent ='Disco Duro: '+ info.discoDuro+'GB';
        //ssd
        const miNodoSsd = document.createElement('p');
        miNodoSsd.classList.add('card-text');
        miNodoSsd.textContent ='SSD: '+ info.ssd;
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        
        
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoReferencia);
        miNodoCardBody.appendChild(miNodoProcesador);
        miNodoCardBody.appendChild(miNodoDisco);
        miNodoCardBody.appendChild(miNodoSsd);
        miNodoCardBody.appendChild(miNodoRam);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

function comparar () {
    const referencia1 = document.querySelector('#ref1').value;
    const referencia2 = document.querySelector('#ref2').value;
    const respuesta = document.querySelector('#respuesta');
    


    if(referencia1 === referencia2){

        respuesta.textContent ='Usted acaba de introducir  el mismo equipo';
        compitems.appendChild(respuesta);


    }
    else{
        if(referencia1 < referencia2){

        respuesta.textContent ='la segunda referencia es mejor que la primera';
        compitems.appendChild(respuesta);

        }

        else{
            if(referencia2 < referencia1){

                respuesta.textContent ='la priemra referencia es mejor que la segunda';
                compitems.appendChild(respuesta);
            }
        }
    }


      
    
}

catalogo();
