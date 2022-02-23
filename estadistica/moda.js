const lista = [1, 2, 2, 2, 3, 3, 4, 1];

const calcularModa = (lista) => {
  const listaCount = {};

  lista.forEach((elemento) => {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaCountOrdenada = Object.entries(listaCount).sort(
    (a, b) => a[1] - b[1]
  );
  const moda = parseInt(listaCountOrdenada[listaCountOrdenada.length - 1][0]);

  return moda;
};

console.log("🚀 ~ file: moda.js ~ line 3 ~ listaCount", calcularModa(lista));
