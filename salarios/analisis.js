// Helpers/Utils
const esPar = (numero) => numero % 2 === 0;

const mediaAritmetica = (lista) => {
  const suma = lista.reduce((acumulado = 0, actual) => acumulado + actual);
  const promedio = suma / lista.length;
  return promedio;
}

// Mediana de salarios.
const medianaSalarial = (lista) => {
  const mitad = parseInt(lista.length / 2);
  let mediana;
  if (esPar(lista.length)) {
    const elementoUno = lista[mitad - 1];
    const elementoDos = lista[mitad];
    mediana = mediaAritmetica([ elementoUno, elementoDos]);
  } else {
    mediana = lista[mitad];
  }

  return mediana
};


const salariosMex = mexico.map((persona) => persona.salary);
const salariosMexSorted = salariosMex.sort((a, b) => a - b);

// Mediana general
const medianaGeneralMex = medianaSalarial(salariosMexSorted);
// Mediana top 10%
// Calcula el 10% más alto de nuestro arreglo.
const spliceStart = (salariosMexSorted.length * 90) / 100; // (P * (100 - %)) / 100
const spliceEnd = salariosMexSorted.length - spliceStart;
const salariosMexTop10 = [...salariosMexSorted].splice(spliceStart, spliceEnd);

const medianaTop10Mex = medianaSalarial(salariosMexTop10);

console.log({
  medianaGeneralMex,
  medianaTop10Mex,
});

