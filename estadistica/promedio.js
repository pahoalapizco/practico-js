const lista = [
    100,
    200,
    300,
    500
];


const calcularPromedio = lista =>{    
    const suma = lista.reduce((valorAcumulado = 0, valorElemento) => valorAcumulado + valorElemento);
    const promedio = suma / lista.length;
    
    return promedio;
}

console.log(`Promedio: ${calcularPromedio(lista)}`);