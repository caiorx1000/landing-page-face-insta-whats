// Validação do formulário
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const mensagem = document.querySelector('#mensagem').value;

  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos do formulário.');
  } else {
    // Aqui você pode adicionar o código para enviar os dados do formulário
    // para o servidor ou fazer qualquer outra ação desejada
    alert('Formulário enviado com sucesso!');
    form.reset();
  }
});
