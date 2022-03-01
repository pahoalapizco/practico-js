const cupones = [
    {
        name: "DESCUENTO HTML",
        discount: 10,        
    }, {
        name: "DESCUENTO CSS",
        discount: 15,
    }, {        
        name: "DESCUENTO JS",
        discount: 20
    }
]
// Calcular descuneto:
const calcularDescuento = (precio, descuento) => ((precio * (100 - descuento)) / 100);
// console.log(calcularDescuneto(120, 15));

const carcularDescuentoCupon = (precio, cuponDescuento) => {
    const descuentoCupon = cupones.find(cupon => cupon.name === cuponDescuento && cupon.discount);
    let precioConDescuento;
    if(descuentoCupon){
        precioConDescuento = calcularDescuento(precio, descuento);
    } else {
        precioConDescuento = 0;
    } 
    

    return precioConDescuento;
}

const onClickCalcularDescuento = () => {
    // Inputs
    const inputPrecio = document.getElementById("precio");
    const inputDescuento = document.getElementById("porcentaje");
    const selectCupones = document.getElementById("cupones");
    // Values
    const cuponValue = selectCupones.value;
    const precioValue = parseInt(inputPrecio.value);
    let descuentoValue = 0;

    if(cuponValue!== "") {
        inputDescuento.value = cuponValue;
        descuentoValue = parseInt(cuponValue);
      } else {
      descuentoValue = parseInt(inputDescuento.value);
    }
    // Spans
    const spanPrecioConDescuento = document.getElementById("descuento-total");

    const descuentoTotal = calcularDescuento(precioValue, descuentoValue);

    spanPrecioConDescuento.innerText = `$ ${descuentoTotal}`;
}

const onClickLimpiar = () => {
    // Inputs
    const inputPrecio = document.getElementById("precio");
    const inputDescuento = document.getElementById("porcentaje");
    const selectCupones = document.getElementById("cupones");
    // Spans
    const spanPrecioConDescuento = document.getElementById("descuento-total");

    inputPrecio.value = "";
    inputDescuento.value = "";
    selectCupones.value = "";
    spanPrecioConDescuento.innerText = "$ 0";
}