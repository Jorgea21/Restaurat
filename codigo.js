document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});

function eventListeners(){
    
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', mostrarNavegacion);
}

function mostrarNavegacion(){
    const navegacion = document.querySelector('.navegacion');

   if(navegacion.classList.contains("mostrar")){
    navegacion.classList.remove("mostrar")
   }else{
    navegacion.classList.add("mostrar")
   }
}