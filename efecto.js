

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 6000);}
  
  
  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



//////////funcion casera para el boton hamburguesa////
var boton = document.getElementById("nav-btn")
var botonHamburguesa = document.getElementById("nav-links");
var estado=0;
botonHamburguesa.addEventListener("click", function() {
  botonHamburguesa.style.height ="0px";
  if (estado =1){
    boton.addEventListener("click", function() {
      botonHamburguesa.style.height ="100vh";
    });}
    else {
      boton.addEventListener("click", function() {
        botonHamburguesa.style.height ="0px";
      });
    
        estado =1; 
    }
  
  

});



 



/* var boton = document.getElementById("nav-btn");

botonHamburguesa.addEventListener("click", function() {
  botonHamburguesa.style.display ="";
});
 */





/* for (var i = 0; i < hamburguerButton.length; i++) {
  hamburguerButton[i].style.display = "none";
} */

// Agregue un controlador de eventos de clic a cada enlace del menú
/* menuLinks.forEach((link) => {
  link.addEventListener('click', () => { */
    // Remueva la clase CSS que muestra el botón hamburguesa
/*     for (var i = 0; i < hamburguerButton.length; i++) {
      hamburguerButton[i].style.display = "none";
      menuLinks.style.height ="0px";
    }
  });
});
 */


