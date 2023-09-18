// Função para exibir um número na calculadora
const show = (a) => {
  const result = document.getElementById('result');
  result.innerHTML += a;
};

// Função para limpar os números na calculadora
const clearNumbers = () => {
  const result = document.getElementById('result');
  result.innerHTML = '';
};

// Função para apagar um caractere na calculadora
const eraser = () => {
  const result = document.getElementById('result');
  const currentResult = result.innerHTML;
  result.innerHTML = currentResult.slice(0, -1);
};

// Função para realizar uma operação na calculadora
const operacao = () => {
  const op = document.getElementById('result').innerHTML;
  const regex = /(\d+)([+\-*/])(\d+)/;
  const match = op.match(regex);

  if (match) {
    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert('Divisão por zero não permitida.');
          return;
        }
        break;
      default:
        alert('Operação inválida.');
        return;
    }

    document.getElementById('result').innerHTML = result;
  } else {
    alert('Expressão inválida.');
  }
};
