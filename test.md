# Test de JavaScript

# Variables y operaciones

## No.1 Teorría

1. ¿Qué es una variable y para qué sirve?
    > Es un espacio en memoría que nos ayuda a almacenar valores, ya sean strings, numéricos, arreglos, etc.
1.  ¿Cuál es la diferencia entre declarar e inicializar una variable?
    > Al declararla recervamos el espacio en memoria, al inicializar le asignamos el valor que va a guardar
3.  ¿Cuál es la diferencia entre sumar números y concatenar strings?
    > Al sumar un número el valor aumenta (operación matemática) y al concatenar juntamos **N** textos para crear uno solo.
4.  ¿Cuál operador me permite sumar o concatenar?
    > `+`

## No.2 Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

`Nombre`: String name
<br>
`Apellido`: String lasname
<br>
`Nombre de usuario en Platzi`: String username
<br>
`Edad`: Numer age
<br>
`Correo electrónico`: String email
<br>
`Mayor de edad` Boolean adult
<br>
`Dinero ahorrado`: Double  moneySaved
<br>
`Deudas`: Double debts
<br>

## No.3 raduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let name = "Paola";
let lasname = "Alapizco";
let username = "pahoalapizco";
let age = "30";
let email = "paolac.alapizco@gmail.com";
let adult = true;
let moneySaved = 1.50;
let debts = 0.00;
```

## No.4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```js
console.log(`${name} ${lastname}`);
console.log(`${moneySaved - debts}`);
```

# Funciones

## No.1 Teoría
1. ¿Qué es una función?
2. ¿Cuándo me sirve usar una función en mi código?
    > Para reutilizar un pedazo de código muy repetitivo.
3. ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    > Los parametros son valores que recibe la función.
    Llamamos argmentos a los valores que envíamos a la función.

## No.2 Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Paola";
const lastname = "Alapizco";
const completeName = name + lastname;
const nickname = "pahoalapizco";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

### Respuesta
```js
const saludo = (name, lastname, nickname) => {
    const completeName = `${name} ${lastname}`;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);
}
```

# Condicionales

## No.1 Teoría
1. ¿Qué es una condicional?
    > Es una expresión lógica (y booleana) que nos retornara `true` o `false`.
2. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    > if: Evalua una expresión booleana, switch: evalua si un valor cumple en alguno de los casos posibles., 
3. ¿Puedo combinar funciones y condicionales?
    > Si, incluso podemos utilizar una función para evaluar una condición, dentro de la misma función podemos tener más condicionales.


## No.2  Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

### Respuesta
```js
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Solo puedes tomar los cursos gratis");
}
```

## No.3 Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```js
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
} 
if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
} 
if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
} 
if (tipoDeSuscripcion == "Free")  {
    console.log("Solo puedes tomar los cursos gratis");
    return;
}
```
`Con arrays y en un solo condicional (Bonus)`
```js
const arrSuscripciones = [{
    "Free": "Solo puedes tomar los cursos gratis"
}, {
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
}, {
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año"
}, {
    "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}];
const tipoDeSuscripcion = "Basic"; 

// Con un if
arrSuscripciones.forEach(subs => {
    if(subs[tipoDeSuscripcion]) {
        console.log(subs[tipoDeSuscripcion]);
    }
});

// En una línea con una expresión booleana

arrSuscripciones.find(subs => subs[tipoDeSuscripcion] && console.log(subs[tipoDeSuscripcion]));
```

# Ciclos

## No.1 Teoría

1. ¿Qué es un ciclo?
    > Pedazo de código que se va a repetir **N** veces hasta que una condición deje de cumplirse.
2. ¿Qué tipos de ciclos existen en JavaScript?
    > for, foreach, While, do {} while()
3. ¿Qué es un ciclo infinito y por qué es un problema?
    > El ciclo no llegará a un final, esto se da cuando la expresión/condición que rompe o finaliza el ciclo nunca llega a un valor `false`, este es un problema pues termina consumiendo demasiados recursos del S.O., imposiblita contiuar con el flujo del código.
4. ¿Puedo mezclar ciclos y condicionales?
    > Si, los ciclos no excluyen a los condicionales, pero si a la inversa.

## No.2 Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
```
`Respuesta` 
```js
let cont = 0;
while(cont < 5)
{
    console.log("El valor de cont es: " + cont);
    cont++;
}
```

```js
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
`Respuesta` 
```js
let cont = 10;
do {
    console.log("El valor de cont es: " + cont);
    const--;
} while(cont >= 2)
```

## No.3  Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```js
do {
    let resp = window.prompt("¿Cuando es 2 + 2?");

    if(resp.toString() == "4") {
        alert("Felicidates, si sabes supar :D");
    }
} while(resp.toString() != "4")
```

# Listas

## No.1 Teoría

1. ¿Qué es un array?
    > Lista/conjunto de valores, dichos valores pueden ser numéricos, strings, booleans, objetos o incluso otros arrays.
2. ¿Qué es un objeto?
    > 
3. ¿Cuándo es mejor usar objetos o arrays?
    > Depende de lo que necesitemos, si solo ocupamos valores númericos es mejor utilizar un array numérico, si ocupamos almacenar los datos de una persona en una sola variable podemos utilizar un objeto con todos los elementos necesarios, ejemplo
    ```js
    const persona = {
        "name": "Paola",
        "lasname": "Alapizco",
        "username": "pahoalapizco",
        "age": "30",
        "email": "paolac.alapizco@gmail.com",
        "adult": true,
        "moneySaved": 1.50,
        "debts": 0.00,
        "mascotas": ["Rudo", "Max"]
    }
    ```
4. ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    > Si, no so excluyentes uno del otro, podemos uliza combilarlos dependiendo de lo que necesitemos.

## No. 2 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
const imprimirPrimerValor = arrValores => console.log(arrValores[0]);
```

## No.3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
const imprimirTodosLosValores = arrValores => {
    arrValores.forEach(valor => console.log(valor));
};
```

## No.4 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
const imprimirTodoObjeto = objValores => {
    Object.keys(objValores).forEach(key => console.log(`${key}: ${objValores[key]}`));
};
```