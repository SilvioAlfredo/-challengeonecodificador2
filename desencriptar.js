var entrada = document.querySelector(".entrada");
var salida = document.querySelector(".salida");
var elementos = document.querySelector(".elementosA");

var botonDesencriptar = document.querySelector(".desencriptar");


botonDesencriptar.addEventListener("click",function(event){
	event.preventDefault();
	const textoDesencriptado = desencriptar(entrada.value);
	salida.value = textoDesencriptado;
	elementos.style.opacity = 0;
  salida.style.display = "flex";
	elementos.parentNode.removeChild(elementos);
});

function desencriptar(cadenaTextoCifrado){
    let arr = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    cadenaTextoCifrado = cadenaTextoCifrado.toLowerCase()
      for(let i = 0; i < arr.length; i++){
        if(cadenaTextoCifrado.includes(arr[i][0])){
            cadenaTextoCifrado = cadenaTextoCifrado.replaceAll(arr[i][1],arr[i][0])
        }
      }
    return cadenaTextoCifrado
  }
