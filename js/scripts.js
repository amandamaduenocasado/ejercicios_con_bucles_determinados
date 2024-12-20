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
  if (numberA > numberB) {
    [numberA, numberB] = [numberB, numberA];
  }

  if (numberA % 2 !== 0) {
    numberA++;
  }

  for (let counter = numberA; counter <= numberB; counter += 2) {
    console.log(counter);
  }
};

evenNumbers(2, 12);

// Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const findRepeatedValues = () => {
  const array1 = [];
  const array2 = [];

  for (let counter = 0; counter < 5; counter++) {
    array1.push(Math.floor(Math.random() * 100) + 1);
  }

  for (let counter = 0; counter < 5; counter++) {
    array2.push(Math.floor(Math.random() * 100) + 1);
  }

  console.log('Array 1:', array1);
  console.log('Array 2:', array2);

  console.log('Valores repetidos:');

  for (let value of array1) {
    if (array2.includes(value)) {
      console.log(value);
    }
  }
};

findRepeatedValues();

// Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

/* Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

const multiplyOfNumbers = numbers => {
  for (const number of numbers) {
    console.log(`Número: ${number}`);
    console.log(`Cuadrado: ${Math.pow(number, 2)}`);
    console.log(`Cubo: ${Math.pow(number, 3)}`);
  }
};

multiplyOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]);

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

/* ¿POR QUÉ UTILIZAMOS ''? 

- ES UNA CADENA VACÍA 

'' representa una cadena de texto que no contiene ningún carácter. Es útil cuando quieres empezar a construir una cadena a partir de cero.

- CONCATENACIÓN

En tu función, a medida que recorres cada carácter de la palabra, vas añadiendo (concatenando) caracteres a result. Al inicializarlo como una cadena vacía, te aseguras de que puedas comenzar a agregarle caracteres desde el principio.

Luego utilizamos: result += caracter; es una forma abreviada de escribir result = result + caracter

let result = ''; // Inicializamos como cadena vacía

result += 'p'; // Ahora result es 'p'
result += 'e'; // Ahora result es 'pe'
result += 'r'; // Ahora result es 'per'
... 

Si result no hubiera sido inicializado como una cadena vacía, no podrías concatenar los caracteres de forma efectiva, y podrías obtener un resultado inesperado. */

const capitalVocals = word => {
  
  let newWord = ''; 
  
  for (let counter = 0; counter < word.length; counter++) {
    // Este bucle recorre cada carácter de la cadena word. counter es un índice que comienza en 0 y aumenta hasta que alcanza la longitud de word.
    const caracter = word[counter];
    // En cada iteración del bucle, caracter almacena el carácter actual de word.
    if ('aeiouAEIOU'.includes(caracter)) {
    // Aquí verificamos si el carácter actual es una vocal, ya sea en minúscula o mayúscula. Usamos el método includes para comprobar si caracter está en la cadena 'aeiouAEIOU'.
      newWord += caracter.toUpperCase();
    } else {
    // Si el carácter es una vocal, lo convertimos a mayúscula y lo agregamos a newWord. Si no es una vocal, simplemente lo agregamos tal cual:
      newWord += caracter;
    }
  }
  console.log(newWord);
};

capitalVocals('periquito');


/* TAMBIÉN LO PODEMOS HACER CON FOR OF 

const vocalsUpperCase = word => {
  const vowels = 'aeiouAEIOU'; 
  let newWord = ''; 
  for (const letter of word) {
    if (vowels.includes(letter)) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter; 
    }
    return newWord;
  }
};

console.log(vocalsUpperCase('pequiquito')); */


/* Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
  a: 3,
  e: 3,
  i: 1,
  o: 1,
  u: 1 */

  const vocalsCount = phrase => {
  let aCounter = 0;
  let eCounter = 0; 
  let iCounter = 0;
  let oCounter = 0; 
  let uCounter = 0;

  for (const letter of phrase.toLowerCase()) {
    if (letter === 'a') {
      aCounter++;
    } else if (letter === 'e') {
      eCounter++;
    } else if (letter === 'i') {
      iCounter++;
    } else if (letter === 'o') {
      oCounter++;
    } else if (letter === 'u') {
      uCounter++;
    }
  }
  console.log(`a: ${aCounter}, e: ${eCounter}, i: ${iCounter}, o: ${oCounter}, u: ${uCounter}`); 

}

  vocalsCount('Enrique ordeña cabras');

// Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const mixWord = (word1, word2) => {
  let result = ''; 
  let shortestWord; 

  if (word1.length <= word2.length) {
  shortestWord = word1;
} else { 
  shortestWord = word2; 
}

for (let index = 0; index < shortestWord.length; index++) {
  result += word1[index];
  result += word2[index]; 
}
return result; 
};

console.log(mixWord('hola', 'adios'));

// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

const wordReverse = word => { 
  let reversedWord = '';

  for (let counter = word.length - 1; counter >= 0; counter--) {
    reversedWord += word[counter];
  }

  console.log(reversedWord);
}

wordReverse('Mariposas');


// Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

/* MALA EJECUCIÓN

const initialsArray = words => {
  let result1 = '';
  let result2 = '';
  const toUpperCase = words.toUpperCase();

  for (let counter = 0; counter < words.length; counter++) {
  result1.push[0];
  result2.push[-1];
  }
console.log(toUpperCase);
}

initialsArray('hola', 'adios', 'gato', 'perro', 'casa'); */

const initialsArray = words => {
  let result = []; 

  for (let word of words) {
    result.push(word[0].toUpperCase());
    result.push(word[word.length - 1].toUpperCase());
  }

  console.log(result);
}

initialsArray(['hola', 'adios', 'gato', 'perro', 'casa']);
