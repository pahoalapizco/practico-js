
const calcularPromedio = lista =>{    
    const suma = lista.reduce((valorAcumulado = 0, valorElemento) => valorAcumulado + valorElemento);
    const promedio = suma / lista.length;
    
    return promedio;
}
