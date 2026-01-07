const prompt = require('prompt-sync')();
//Escolhe quantos heróis serão classificados
let quantidade = parseInt(prompt("Quantos heróis você deseja classificar? "));

for (let i = 0; i < quantidade; i++) {
    console.log(`\n--- Jogador número ${i + 1} ---`);
    
    // 1. Inputs: Agora pedimos Vitórias e Derrotas
    let nome = parseString(prompt("Nome do Heroi: "));
    let vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
    let derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

    // 2. Chamada da Função: Aqui a mágica acontece
    let resultado = calcularRank(vitorias, derrotas);

    // 3. Output: Mostramos o resultado formatado
    console.log(`O Herói ${nome} tem saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
}

// --- ÁREA DA FUNÇÃO ---
function calcularRank(vitorias, derrotas) {
    // Calculo do saldo (Vitórias - Derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Determinação do Nível baseado no saldo de vitórias
    switch (true) {
        case (saldoVitorias < 10):
            nivel = "Ferro";
            break;
        case (saldoVitorias >= 10 && saldoVitorias <= 20): 
            nivel = "Bronze";
            break;
        case (saldoVitorias >= 21 && saldoVitorias <= 50):
            nivel = "Prata";
            break;
        case (saldoVitorias >= 51 && saldoVitorias <= 80):
            nivel = "Ouro";
            break;
        case (saldoVitorias >= 81 && saldoVitorias <= 90):
            nivel = "Diamante";
            break;
        case (saldoVitorias >= 91 && saldoVitorias <= 100):
            nivel = "Lendário";
            break;
        case (saldoVitorias >= 101):
            nivel = "Imortal";
            break;
        default:
            nivel = "Indefinido"; 
            break;
    }

    
    return { saldoVitorias, nivel };
}

// Funções auxiliares para garantir tipos corretos
function parseString(input) {
    return input ? input.toString() : "";
}   
function parseInt(input) {
    const parsed = Number(input);
    return isNaN(parsed) ? 0 : parsed;
}