
let expresion = "";
const botones = document.querySelectorAll("button");

function actualizarPantalla(contenido) {
  const pantalla = document.getElementById("pantalla");
  pantalla.textContent = contenido;
}
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const tipo = boton.dataset.tipo;
    const valor = boton.dataset.valor;

    if( tipo === "numero" || tipo === "operacion"){
    	expresion += valor;
      actualizarPantalla(expresion);
    } else if(tipo === "igual"){
      const resultado = eval(expresion);
      expresion = resultado.toString();
      actualizarPantalla(resultado);
    } else if(tipo === "borrar"){
      expresion = "";
      actualizarPantalla("0");
    }

  });
});

