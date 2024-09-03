document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carbon-calculator');
    const resultDiv = document.getElementById('calculation-result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const model = form.elements.model.value;
      const mileage = form.elements.mileage.value;
  
      if (model && mileage) {
        calculateEmission(model, mileage);
      } else {
        resultDiv.textContent = 'Por favor, preencha todos os campos.';
      }
    });
  
    function calculateEmission(model, mileage) {     
      const emissionPerKm = 0.15;
      const annualEmission = mileage * emissionPerKm;

      
  
      let message;
      if (annualEmission < 1500) {
        message = 'Parabéns! Sua emissão de CO2 é considerada baixa, o que significa que você está contribuindo significativamente para a preservação do meio ambiente. Manter um baixo nível de emissões é crucial para combater as mudanças climáticas e reduzir a poluição do ar. Sua escolha de veículo e seus hábitos de direção responsáveis estão fazendo a diferença. Continue assim e considere compartilhar suas práticas sustentáveis com amigos e familiares para inspirar outros a fazerem o mesmo. Cada quilômetro economizado e cada redução na emissão contam para um futuro mais verde e saudável para todos nós.';       
      } else if (annualEmission < 3500) {
        message = 'Sua emissão de CO2 está dentro da média, o que indica que há espaço para melhorias. Embora você esteja no caminho certo, há várias ações que você pode tomar para reduzir ainda mais suas emissões. Considere realizar manutenções regulares no seu veículo, adotar práticas de direção mais eficientes, como evitar acelerações e frenagens bruscas, e optar por combustíveis mais limpos quando possível. Além disso, pense em alternativas como caronas compartilhadas, transporte público ou até mesmo a troca para um veículo híbrido ou elétrico. Cada esforço para diminuir suas emissões de carbono contribui para um ambiente mais limpo e sustentável.';
      } else {
        message = 'Sua emissão de CO2 é alta, o que significa que seu veículo está contribuindo significativamente para a poluição do ar e as mudanças climáticas. É essencial considerar opções para reduzir seu impacto ambiental. Avalie a possibilidade de substituir seu carro atual por um modelo mais eficiente em termos de combustível ou um veículo híbrido/elétrico. Além disso, práticas de direção eficiente, como manter a velocidade constante e reduzir o uso do ar condicionado, podem ajudar a diminuir suas emissões. A manutenção regular do veículo também é crucial para garantir que ele esteja funcionando de maneira otimizada. Pense em alternativas como caronas compartilhadas e o uso de transporte público para diminuir seu uso do carro. Cada passo na direção certa ajuda a preservar o meio ambiente e a garantir um futuro mais sustentável.';
      }
  
      displayResult(annualEmission, message);
    }
  
    function displayResult(emission, message) {
      resultDiv.innerHTML = `
        <p>Emissão anual estimada: ${emission.toFixed(2)} gCO2</p>
        <p>${message}</p>
      `;
    }
  });

