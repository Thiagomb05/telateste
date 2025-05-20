// Array de senhas para simulação
let senhas = Array.from({length: 100}, (_, i) => i + 1);
let senhaAtual = 0;

// Função para atualizar as senhas
function atualizarSenhas() {
    // Atualiza a senha atual
    document.getElementById('senha-atual').textContent = senhas[senhaAtual];
    
    // Calcula a próxima senha
    let proximaSenha = (senhaAtual + 1) % senhas.length;
    document.getElementById('proxima-senha').textContent = senhas[proximaSenha];
}

// Função para avançar a senha
function avancarSenha() {
    senhaAtual = (senhaAtual + 1) % senhas.length;
    atualizarSenhas();
}

// Atualiza as senhas imediatamente ao carregar a página
atualizarSenhas(); 