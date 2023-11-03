const producto =  document.getElementById('producto');

const productoImagen = producto.querySelector('.producto__imagen');
const thumbs= producto.querySelector('.producto__thumbs');
const productoIma =  thumbs.querySelectorAll('.producto__thumb-img');

//color
const propiedadColor = producto.querySelector('#propiedad-color');

// cantidad

const increCantidad = producto.querySelector('#incrementar-cantidad');
const disminuirCantidad = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');


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


