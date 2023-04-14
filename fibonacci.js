// Dado un numero, mostrar su serie fibonnaci. la serie fibonnaci es un orden de número donde cada número
// es la suma de los anteriores

const fibonnaci = (num) => {
  const fibonnaciArray = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibonnaciArray.push(fibonnaciArray[i - 1] + fibonnaciArray[i - 2]);
  }

  return { fibonnaciArray: fibonnaciArray, lastNumber: fibonnaciArray[num] };
};

console.log(fibonnaci(10));
