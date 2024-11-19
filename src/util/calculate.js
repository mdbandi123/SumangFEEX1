export const calculate = (operation, operOne, operTwo) => {
  let answer = 0;
  switch (operation) {
    case "+": 
      answer = operOne + operTwo;
      break;
    case "-":
      answer = operOne - operTwo;
      break;
    case "*": 
      answer = operOne * operTwo;
      break;
    case "/":
      answer = operOne / operTwo;
      break;
  }
  return answer;
}