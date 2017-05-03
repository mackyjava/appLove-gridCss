/*
 * Archivo principal de funcionalidad de JS
 */
 var modal= document.getElementById("modal");
 var imagenes =document.getElementsByClassName("img");
 var imagenG = document.getElementsByClassName("img0")[0];
 var borrar = document.getElementsByClassName("cerrar")[0];
   borrar.addEventListener("click",ocultar);

 var long =imagenes.length;
 for (var i =0; i<long ;  i++) {
      imagenes[i].addEventListener("click",mostrar)
 }
function mostrar() {
	 modal.style.display ="block";
	 imagenG.src = this.src;
		
}

 function ocultar (){
	modal.style.display="none";
}