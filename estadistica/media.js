const calcularPromedio = (lista) => {
  const suma = lista.reduce(
    (valorAcumulado = 0, valorElemento) => valorAcumulado + valorElemento
  );
  const promedio = suma / lista.length;

  return promedio;
};

const esPar = (numero) => numero % 2 === 0;

const calcualrMedia = (lista) => {
  let media;
  const listaOrdenada = lista.sort((a, b) => a - b);
  const mitad = parseInt(listaOrdenada.length / 2);

  if (esPar(mitad)) {
    const elemento1 = listaOrdenada[mitad - 1];
    const elemento2 = listaOrdenada[mitad];

    media = calcularPromedio([elemento1, elemento2]);
  } else {
    media = listaOrdenada[mitad];
  }
  return media;
};
