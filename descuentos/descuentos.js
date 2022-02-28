const cupones = [
    {
        name: "CUPONUNO",
        discount: 10,        
    }, {
        name: "CUPONDOS",
        discount: 15,
    }, {        
        name: "CUPONTRES",
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
        console.log('El cupon no existe')
    } 
    

    return precioConDescuento;
}

const onClickCalcularDescuento = () => {
    // Inputs
    const inputPrecio = document.getElementById("precio");
    const inputDescuento = document.getElementById("porcentaje");

    // Values
    const precioValue = inputPrecio.value;
    const descuentoValue = inputDescuento.value;

    // Spans
    const spanPrecioConDescuento = document.getElementById("descuento-total");

    const descuentoTotal = calcularDescuento(precioValue, descuentoValue);

    spanPrecioConDescuento.innerText = `$ ${descuentoTotal}`;
}

const onClickLimpiar = () => {
    // Inputs
    const inputPrecio = document.getElementById("precio");
    const inputDescuento = document.getElementById("porcentaje");
    // Spans
    const spanPrecioConDescuento = document.getElementById("descuento-total");

    inputPrecio.value = "";
    inputDescuento.value = "";
    spanPrecioConDescuento.innerText = "$ 0";
}