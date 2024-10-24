// Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const printAllNumbers = numbers => {
  for (let counter = numbers.length - 1; counter >= 0; counter--) {
    console.log(numbers[counter]);
  }
};

printAllNumbers([0, 1, 2, 3]);

// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const arrayPlusNumbers = numbers => {
  for (let counter = 0; counter < numbers.length; counter++) {
    console.log(numbers[counter]);
  }
};

arrayPlusNumbers([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

/* Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

  4 x 0 = 0
  4 x 1 = 4
  4 x 2 = 8
  4 x 3 = 12
  4 x 4 = 16
  4 x 5 = 20
  4 x 6 = 24
  4 x 7 = 28
  4 x 8 = 32
  4 x 9 = 36
  4 x 10 = 40 */

const multiplicationTable = numbers => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${numbers} x ${counter} = ${numbers * counter}`);
  }
};

multiplicationTable(4);

/*  Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

  4 x 10 = 40
  4 x 9 = 36
  4 x 8 = 32
  4 x 7 = 28
  4 x 6 = 24
  4 x 5 = 20
  4 x 4 = 16
  4 x 3 = 12
  4 x 2 = 8
  4 x 1 = 4
  4 x 0 = 0 */

const multiplicationTableInverse = number => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

multiplicationTableInverse(4);

/* Crea una función que reciba el año actual y tu edad, la función debe imprimir:

  - "naciste en el año X"
  - "En el año X cumpliste 1 año"
  - "En el año X cumpliste 2 años"
  - "En el año X cumpliste 3 años"
    .... */

const yourAge = (currentYear, age) => {
  const birthYear = currentYear - age;

  console.log(`Naciste en el año ${birthYear}`);

  for (let counter = 1; counter <= age; counter++) {
    let yearText;
    if (counter > 1) {
      yearText = 'años';
    } else {
      yearText = 'año';
    }
    console.log(`En el año ${birthYear + counter} cumpliste ${counter} ${yearText}`);
  }
};

yourAge(2024, 27);

// Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const evenNumbers = (numberA, numberB) => {
    const create = numberA || numberB % 2 === 0;

    for (let counter = 0; counter < numbers.length; counter++) {
        console.log(numberA, numberB);
}

evenNumbers(2, 12);

// Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

// Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

/* Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

/* Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
  a: 3,
  e: 3,
  i: 1,
  o: 1,
  u: 1 */

// Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

// Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']
