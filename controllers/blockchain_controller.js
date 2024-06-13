const { web3, onlineStoreContract } = require('../config/web3_config')
// Função para registrar uma venda
async function registrarVenda(productId, quantity, price, buyerAddress) {
    try {
        // Assinar a transação com a conta do comprador (necessário para pagar gas)
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0]; // Conta do comprador (pode ser configurável)

        // Chamar a função do contrato para armazenar a venda
        const result = await onlineStoreContract.methods.storeSale(productId, quantity, price, buyerAddress)
            .send({ from: account });

        console.log('Venda registrada com sucesso:', result);
        return result;
    } catch (error) {
        console.error('Erro ao registrar a venda:', error);
        throw error;
    }
}

// Função para recuperar todas as vendas
async function recuperarVendas() {
    try {
        // Chamar a função do contrato para recuperar todas as vendas
        const sales = await onlineStoreContract.methods.getTotalSales().call();

        console.log('Vendas recuperadas:', sales);
        return sales;
    } catch (error) {
        console.error('Erro ao recuperar as vendas:', error);
        throw error;
    }
}

module.exports = {
    registrarVenda: registrarVenda,
    recuperarVendas: recuperarVendas,
  };