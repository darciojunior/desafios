function fibonacci(n) {
  let firstNum = 0;
  let secondNum = 1;

  while (secondNum <= n) {
    if (secondNum === n)
      return `O número ${n} pertence à sequência de Fibonacci.`;
    let aux = secondNum;
    secondNum = firstNum + secondNum;
    firstNum = aux;
  }
  return `O número ${n} não pertence à sequência de Fibonacci.`
}

const num = 233;
console.log(fibonacci(num));
