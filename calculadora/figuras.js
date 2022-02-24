const PI = Math.PI;

// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => Math.pow(lado, 2);

// Triangulo
const perimetroTriangulo = (ladoA, ladoB, base) => ladoA + ladoB + base;
const areaTriagulo = (base, altura) => (base * altura) / 2;

const alturaTrianguloIsoseles = (ladoA, ladoB, ladoC) => {
  if (ladoA === ladoB && ladoA !== ladoC) {
    // Si es un triangulo isoseles
    const altura = Math.sqrt(Math.pow(ladoA, 2) - Math.pow(ladoC, 2) / 4);
    return `La altura del trianculo Isoseles es: ${altura}cm`;
  } else {
    return `El triangulo no es Isoseles.`;
  }
};

// Circulo
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => PI * diametroCirculo(radio);
const areaCirulo = (radio) => Math.pow(radio, 2) * PI;

// Interaccion HTML
const onClickCuadrado = () => {
  // inputs
  const input = document.getElementById("cuatrado-lado");
  // spans resultado
  const resultPErimetro = document.getElementById("perimetro-cuadrado");
  const resultArea = document.getElementById("area-cuadrado");

  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  const area = areaCuadrado(value);

  resultPErimetro.innerText = `${perimetro} cm`;
  resultArea.innerText = `${area} cm^2`;
};

const onClickLimpiarCuadrado = () => {
  // inputs
  const input = document.getElementById("cuatrado-lado");
  // spans resultado
  const resultPErimetro = document.getElementById("perimetro-cuadrado");
  const resultArea = document.getElementById("area-cuadrado");

  input.value = "";
  resultPErimetro.innerText = "";
  resultArea.innerText = "";
};

const onClickTriangulo = () => {
  // inputs
  const inputA = document.getElementById("ladoA");
  const inputB = document.getElementById("ladoB");
  const inputBase = document.getElementById("base");
  const inputAltura = document.getElementById("altura");
  // spans resultado
  const resultPErimetro = document.getElementById("perimetro-triangulo");
  const resultArea = document.getElementById("area-triangulo");

  const valueA = Number(inputA.value);
  const valueB = Number(inputB.value);
  const valueBase = Number(inputBase.value);
  const valueAltura = Number(inputAltura.value);

  const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
  resultPErimetro.innerText = `${perimetro}cm`;

  if (valueAltura !== 0) {
    const area = areaTriagulo(valueBase, valueAltura);
    resultArea.innerText = `${area}cm^2`;
  }
};

const onClickLimpiarTriangulo = () => {
  // inputs
  const inputA = document.getElementById("ladoA");
  const inputB = document.getElementById("ladoB");
  const inputBase = document.getElementById("base");
  const inputAltura = document.getElementById("altura");
  // spans resultado
  const resultPErimetro = document.getElementById("perimetro-triangulo");
  const resultArea = document.getElementById("area-triangulo");

  inputA.value = "";
  inputB.value = "";
  inputBase.value = "";
  inputAltura.value = "";

  resultPErimetro.innerText = "";
  resultArea.innerText = "";
};

const onClickCirculo = () => {
  // inputs
  const input = document.getElementById("radio");
  // spans resultado
  const resultPerimetro = document.getElementById("perimetro-circulo");
  const resultArea = document.getElementById("area-circulo");

  const value = input.value;

  const perimetro = perimetroCirculo(value);
  const area = areaCirulo(value);

  resultPerimetro.innerText = `${perimetro.toFixed(2)}cm`;
  resultArea.innerText = `${area.toFixed(2)}cm^2`;
};

const onClickLimpiarCirculo = () => {
  // inputs
  const input = document.getElementById("radio");
  // spans resultado
  const resultPerimetro = document.getElementById("perimetro-circulo");
  const resultArea = document.getElementById("area-circulo");

  input.value = "";

  resultPerimetro.innerText = "";
  resultArea.innerText = "";
};
