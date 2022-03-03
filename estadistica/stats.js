const textArea = document.getElementById("lista");
const selectCalculo = document.getElementById("tipo-calculo");
const spanResultado = document.getElementById("resultado");

const limpiarDatos = (lista) => {
  // Deja un string con números y comas (,)
  const listaSinLetras = lista.replace(/([^0-9,])/g, "");

  // Crea un arreglo a partir de cualquier caracter que no sea alfanumérico
  const arrLista = listaSinLetras.split(/[\W]+/);

  // Quita las posiciones vacías del array
  const datosLimpios = [];
  arrLista.forEach((element) => {
    if (element !== "") {
      datosLimpios.push(parseInt(element));
    }
  });

  return datosLimpios;
};

const onClickCalcular = () => {
  const datos = limpiarDatos(textArea.value);
  const tipoCalculo = selectCalculo.value;
  let resultado = 0;

  switch (tipoCalculo) {
    case "promedio":
      resultado = calcularPromedio(datos);
      break;
    case "media":
      resultado = calcualrMedia(datos);
      break;
    case "moda":
      resultado = calcularModa(datos);
      break;
  }

  spanResultado.innerText = `${tipoCalculo}: ${resultado}`;
};

const onClickLimpiar = () => {
  const nuevosDatos = listaAleatoria();
  textArea.value = nuevosDatos.join(',');
  selectCalculo.value = "promedio";
  spanResultado.innerText = ''
};