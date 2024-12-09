
const calculo = document.getElementById('calculo');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {
    const calculo = (peso / (altura * altura)).toFixed(1);
    resultado.textContent = `${calculo}`;

    if (calculo < 18.5) {
      resultado.textContent = `Olá ${nome}, seu IMC é ${calculo} e você está abaixo do peso.`;
    }
    else if (calculo >= 18.5 && calculo <= 24.9) {
      resultado.textContent = `Olá ${nome}, seu IMC é ${calculo} e você está no peso ideal.`;
    }
    else if (calculo >= 25 && calculo <= 29.9) {
      resultado.textContent = `Olá ${nome}, seu IMC é ${calculo} e você está com sobrepeso.`;
    }
    else if (calculo >= 30 && calculo <= 34.9) {
      resultado.textContent = `Olá ${nome}, seu IMC é ${calculo} e você está com obesidade  grau |.`;
    }
    else if (calculo >= 35 && calculo <= 39,9) {
      resultado.textContent = `Olá ${nome}, seu IMC é ${calculo} e você está no peso ideal grau ||.`;
    }
    else if (calculo >= 40.0) {
      resultado.textContent = `Olá ${nome}, seu IMC é ${calculo} e você está com obesidade grave grau |||.`;
    }
    

  }
  else {
    alert('Preencha todos os campos!');
  }
}

calcular.addEventListener('click', imc);

function limparNome() {
  document.getElementById('nome').value = '';
  document.getElementById('altura').value = '';
  document.getElementById('peso').value = '';
  
}



