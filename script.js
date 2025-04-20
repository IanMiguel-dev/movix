let agendamentos = [];

function toggleSections(section) {
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('signup-section').classList.add('hidden');
  document.getElementById('dashboard-section').classList.add('hidden');

  if (section === 'login') {
    document.getElementById('login-section').classList.remove('hidden');
  } else if (section === 'signup') {
    document.getElementById('signup-section').classList.remove('hidden');
  } else if (section === 'dashboard') {
    document.getElementById('dashboard-section').classList.remove('hidden');
  }
}

function login() {
  toggleSections('dashboard');
}

function signup() {
  alert('Usuário cadastrado com sucesso!');
  toggleSections('login');
}

function adicionarAgendamento() {
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const embarque = document.getElementById('embarque').value;
  const desembarque = document.getElementById('desembarque').value;
  const motorista = document.getElementById('motorista').value;
  const veiculo = document.getElementById('veiculo').value;

  agendamentos.push({ data, hora, embarque, desembarque, motorista, veiculo });
  atualizarTabela();
}

function excluirAgendamento(index) {
  agendamentos.splice(index, 1);
  atualizarTabela();
}

function atualizarTabela() {
  const tbody = document.querySelector('#tabela-agendamentos tbody');
  tbody.innerHTML = '';

  agendamentos.forEach((ag, index) => {
    const row = `<tr>
      <td>${ag.data}</td>
      <td>${ag.hora}</td>
      <td>${ag.embarque}</td>
      <td>${ag.desembarque}</td>
      <td>${ag.motorista}</td>
      <td>${ag.veiculo}</td>
      <td><button onclick="excluirAgendamento(${index})">Excluir</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// Inicia na tela de login
toggleSections('login');
