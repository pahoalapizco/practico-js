const aleatorio = (min, max) => {
  const posibilidades = max - min;
  const aleatorio = Math.floor(Math.random() * (posibilidades + 1));
  return min + aleatorio;
}

const listaAleatoria = (min = 1, max = 100) => {
  const lista = [];
  
  for(let i =0; i < 100; i++) {
    lista.push(aleatorio(min, max))
  }

  return lista;
}

(() => {
  const textArea = document.getElementById("lista");
  const datos = listaAleatoria(1, 100);
  
  textArea.value = datos.join(",");
})();