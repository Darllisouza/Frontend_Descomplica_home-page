// Selecionar todos os botões "Ler mais"
const buttons = document.querySelectorAll('.card button[id="read_button"]');

// Adicionar evento de evento de clique a cada botão
buttons.forEach(function(button) {
  button.addEventListener('click', function() {

    // Encontrar o elemento pai (elemento "card")
    const card = button.parentElement;

    // Alternar a classe "active" no elemento "card"
    card.classList.toggle('active');

    if (card.classList.contains('active')) {

      // Alterar o texto do botão se o elemento "card" tiver a classe "active"
      button.textContent = 'Ler menos';
    } else {

      // Alterar o texto do botão se o elemento "card" não tiver a classe "active"
      button.textContent = 'Ler mais';
    }
  });
});
