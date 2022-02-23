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
const calcularDescuneto = (precio, descuento) => ((precio * (100 - descuento)) / 100);
// console.log(calcularDescuneto(120, 15));

const carcularDescuentoCupon = (precio, cuponDescuento) => {
    const descuentoCupon = cupones.find(cupon => cupon.name === cuponDescuento && cupon.discount);
    let precioConDescuento;
    if(descuentoCupon){
        precioConDescuento = calcularDescuneto(precio, descuento);
    } else {
        console.log('El cupon no existe')
    } 
    

    return precioConDescuento;
}

console.log(carcularDescuentoCupon(120, 'CUPONDOS'))