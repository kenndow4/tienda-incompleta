'use strict';

const producto$1 =  document.getElementById('producto');

const productoImagen = producto$1.querySelector('.producto__imagen');
const thumbs= producto$1.querySelector('.producto__thumbs');
const productoIma =  thumbs.querySelectorAll('.producto__thumb-img');

//color
const propiedadColor = producto$1.querySelector('#propiedad-color');

// cantidad

const increCantidad = producto$1.querySelector('#incrementar-cantidad');
const disminuirCantidad = producto$1.querySelector('#disminuir-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');


thumbs.querySelectorAll('.producto__thumb-img')[0].style.border='solid 2px #000';
thumbs.querySelectorAll('.producto__thumb-img')[0].style.padding='2px ';

thumbs.addEventListener('click', (e)=>{

   if(e.target.tagName === "IMG"){
   
const imagemSrc= e.target.src;

//   thumbs.querySelectorAll('.producto__thumb-img').style.border='solid 2px black';
// productoIma.style.border='solid 2px black';
for(let i =0; i<productoIma.length; i++){
    thumbs.querySelectorAll('.producto__thumb-img')[i].style.border='none';


}
   e.target.style.border='solid 2px black';
   e.target.style.padding='2px';
const lastIndex = imagemSrc.lastIndexOf('/');
const nombreImagen = imagemSrc.substring(lastIndex + 1);

productoImagen.src = `./img/tennis/${nombreImagen}`;
   }

});

propiedadColor.addEventListener('click', (e)=>{

   
if(e.target.tagName === 'INPUT'){

   
  
    productoImagen.src =`./img/tennis/${e.target.value}.jpg`;
}

});

//eventos para incrementar y disminuir

increCantidad.addEventListener('click', ()=>{

    inputCantidad.value = parseInt(inputCantidad.value) + 1;
    
});
disminuirCantidad.addEventListener('click', ()=>{

    

  if(parseInt(inputCantidad.value) > 1){
    
    inputCantidad.value = parseInt(inputCantidad.value) -1;
  }
});

var data = {

    productos:[
        {
    
           id:'1',
           nombre: 'Tennis Converse Standard',
           descripcion:'Loremfhdsff dsfduks dsfdsf',
           precio: 2240.34,
           colores:['negro','rojo','amarillo'],
           tamano:['1,5','2','2,5', '3','4']
    
    
        },
        {
    
            id:'2',
            nombre: 'Tennis Converse Standard 20303',
            descripcion:'Loremfhdsff dsfduks dsfdsf',
            precio: 250.0,
            colores:['negro','rojo','amarillo'],
            tamano:['1,5','2','2,5', '3','4']
     
     
         },
    ]
    
    
    };

const botonesAbrirCarrito =document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito =document.querySelectorAll('[data-accion="cerrar-carrito"]');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
let cantidadCarrito= document.getElementById('cantidad-carrito');
const soni = document.getElementById('audio');
const son = document.getElementById('audi');
let carrito = [];
const formatearMoneda = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});
const notificacion = document.getElementById('notificacion');
const ventanaCarrito = document.getElementById('carrito');
const renderCarrito= ()=>{

ventanaCarrito.classList.add('carrito--active');




// aqui eliminamos el bug
const productosAnt = ventanaCarrito.querySelectorAll('.carrito__producto');
productosAnt.forEach(producto => producto.remove());


let total = 0;
let date =new Date();
 
// comprobar si hay productos

if(carrito.length < 1){

    ventanaCarrito.classList.add('carrito--vacio');

}else {

    
    ventanaCarrito.classList.remove('carrito--vacio');

    carrito.forEach((productoCarrito) =>{

        data.productos.forEach(productoBaseDatos =>{
        
        
        if(productoBaseDatos.id === productoCarrito.id){
        
            productoCarrito.precio = productoBaseDatos.precio;

            total += parseInt(productoBaseDatos.precio * productoCarrito.cantidad);
           
          
            
         
        }
        
        });
        
        
            let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
        
            if(productoCarrito.color === 'rojo'){
        
                thumbSrc ='./img/thumbs/rojo.jpg';
        
            }else if(productoCarrito.color === 'amarillo'){
                thumbSrc ='./img/thumbs/amarillo.jpg';
        
            }
           
           const plantillaProducto = `
           <div class="carrito__producto-info">
                                        <img src="${thumbSrc}" alt="" class="carrito__thumb" />
                                        <div>
                                            <p class="carrito__producto-nombre">
                                                <span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
                                            </p>
                                            <p class="carrito__producto-propiedades">
                                                Tamaño:<span>${productoCarrito.tamano}</span> Color:<span>${productoCarrito.color}</span>
                                               
                                            </p>
                                            <p> Fecha:${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</p>
                                        </div>
                                    </div>
                                    <div class="carrito__producto-contenedor-precio">
                                        <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                                                />
                                            </svg>
                                        </button>
                                        <p class="carrito__producto-precio">${
                                         formatearMoneda.format( productoCarrito.precio * productoCarrito.cantidad)
        
                                           
                                        }</p>
                                    </div>
           
           `;
        
        
           const itenCarrito = document.createElement('div');
          
           itenCarrito.innerHTML= plantillaProducto;
           
           itenCarrito.classList.add('carrito__producto');
          ventanaCarrito.querySelector('.carrito__body').appendChild(itenCarrito);
        
        
        
        
        
        });

}

ventanaCarrito.querySelector('.carrito__total').innerHTML= formatearMoneda.format(total);

};





// abrir carrito

botonesAbrirCarrito.forEach(boton =>{

boton.addEventListener('click',(e)=>{

soni.play();
renderCarrito();

});

});


// cerrar carrito

botonesCerrarCarrito.forEach(boton =>{

boton.addEventListener('click',(e)=>{

ventanaCarrito.classList.remove('carrito--active');

});

});


// agregar carrito

btnAgregarCarrito.addEventListener('click', ()=>{

const id = producto.dataset.productoId;
const nombre = producto.querySelector('.producto__nombre').innerHTML;
const color = producto.querySelector('#propiedad-color input:checked').value;
const tamano = producto.querySelector('#propiedad-tamaño input:checked').value;
const cantidad = parseInt(producto.querySelector('#cantidad').value);


if(carrito.length > 0){

let productoEnCarrito = false;
carrito.forEach(item =>{

if(item.id === id && item.nombre === nombre && item.color === color && item.tamano === tamano){

item.cantidad += cantidad;
productoEnCarrito = true;
}

});

if(productoEnCarrito == false){

    carrito.push({

        id: id,
        nombre: nombre,
        color: color,
        tamano: tamano,
        cantidad: cantidad
        
        });

}

}else {

    carrito.push({

        id: id,
        nombre: nombre,
        color: color,
        tamano: tamano,
        cantidad: cantidad
        
        });

        

}




 cantidadCarrito.innerHTML = parseInt(carrito.length);


// aqui va la notificacion

let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;

if(color === 'rojo'){

    thumbSrc = './img/thumbs/rojo.jpg';

}else if(color === 'amarillo'){
    thumbSrc = './img/thumbs/amarillo.jpg';

}

notificacion.querySelector('img').src = thumbSrc;

son.play();
notificacion.classList.add('notificacion--active');
setTimeout(()=>{
    notificacion.classList.remove('notificacion--active');
}, 3000);


});

// botnones eliminar carrito

ventanaCarrito.addEventListener('click', (e)=>{

if(e.target.closest('button')?.dataset.accion === 'eliminar-item-carrito'){

    const producto = e.target.closest('.carrito__producto');
    const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(producto);
    // carrito[indexProducto].remove;

    carrito = carrito.filter((item, index)=>{
         if(index !== indexProducto){

            return item;
           

         }

    });
     
   
    renderCarrito();
    cantidadCarrito.innerHTML = parseInt(carrito.length);
    ventanaCarrito.querySelector('.carrito__total').innerHTML= formatearMoneda.format(total);
}

 

});

class Tabs{

constructor(idElemento){

    this.tabs = document.getElementById(idElemento);

    this.nav = this.tabs.querySelector('.tabs');

    this.nav.addEventListener('click', (e)=>{

        e.preventDefault();
     if([...e.target.classList].includes('tabs__button')){

        // obtener la tab

        const tab = e.target.dataset.tab;

        if(this.tabs.querySelector('.tab--active')){

           this.tabs.querySelector('.tab--active').classList.remove('tab--active');

        }
            

            if(this.nav.querySelector('.tabs__button--active')){
                this.nav.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
            }

        // if(tab.querySelector('.tabs__button--active')){
        //     // e.target.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
        //     console.log( 'hola');

        // }

        this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

        e.target.classList.add('tabs__button--active');
       


     }
       
    });
  
}

}

new Tabs('mas-informacion');
