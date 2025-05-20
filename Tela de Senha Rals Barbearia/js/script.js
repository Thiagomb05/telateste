// Configuração inicial
let senhas = Array.from({length: 100}, (_, i) => i + 1);
let senhaAtual = 0;

// Função para atualizar as senhas com animação
function atualizarSenhas() {
    try {
        const senhaAtualElement = document.getElementById('senha-atual');
        const proximaSenhaElement = document.getElementById('proxima-senha');
        
        if (!senhaAtualElement || !proximaSenhaElement) {
            throw new Error('Elementos do DOM não encontrados');
        }

        // Adiciona classe para animação
        senhaAtualElement.classList.add('fade-out');
        proximaSenhaElement.classList.add('fade-out');

        // Atualiza os valores após um pequeno delay para a animação
        setTimeout(() => {
            senhaAtualElement.textContent = senhas[senhaAtual];
            proximaSenhaElement.textContent = senhas[(senhaAtual + 1) % senhas.length];
            
            // Remove classe de animação
            senhaAtualElement.classList.remove('fade-out');
            proximaSenhaElement.classList.remove('fade-out');
        }, 150);
    } catch (error) {
        console.error('Erro ao atualizar senhas:', error);
    }
}

// Função para avançar a senha
function avancarSenha() {
    try {
        senhaAtual = (senhaAtual + 1) % senhas.length;
        atualizarSenhas();
        
        // Salva o estado atual no localStorage
        localStorage.setItem('senhaAtual', senhaAtual);
    } catch (error) {
        console.error('Erro ao avançar senha:', error);
    }
}

// Função para carregar o estado salvo
function carregarEstadoSalvo() {
    try {
        const senhaSalva = localStorage.getItem('senhaAtual');
        if (senhaSalva !== null) {
            senhaAtual = parseInt(senhaSalva);
        }
        atualizarSenhas();
    } catch (error) {
        console.error('Erro ao carregar estado salvo:', error);
    }
}

// Inicializa o painel
document.addEventListener('DOMContentLoaded', () => {
    carregarEstadoSalvo();
    
    // Adiciona evento de tecla para avançar senha com a barra de espaço
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Previne o scroll da página
            avancarSenha();
        }
    });
}); 