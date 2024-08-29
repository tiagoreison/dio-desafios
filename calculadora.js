function calcularNivel() {
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const saldoVitorias = vitorias - derrotas;
    let nivel = '';

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

    alert(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
    
    // Impede o envio do formulário e o recarregamento da página
    return false;
}
