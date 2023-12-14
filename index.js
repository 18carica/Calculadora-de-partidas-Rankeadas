// Função para calcular o saldo e determinar o nível ranqueado
function saldoRankeado(vitorias, derrotas) {
    // Calcula o saldo de vitórias subtraindo as derrotas
    let saldoVitorias = vitorias - derrotas;
    // Inicializa a variável de nível como uma string vazia
    let nivel = '';

    // Determina o nível com base no saldo de vitórias
    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else if (saldoVitorias >= 101) {
        nivel = 'Imortal';
    }

    // Retorna um array contendo o saldo de vitórias e o nível
    return [saldoVitorias, nivel];
}

// Testando a função com valores fictícios
let vitorias = 100;
let derrotas = 20;

// Chamando a função e atribuindo os resultados a variáveis
let [saldo, nivel] = saldoRankeado(vitorias, derrotas);

// Exibindo a mensagem com os resultados
console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
