const { web3, onlineStoreContract, deployerAddress } = require('../config/web3_config')
// Função para registrar uma venda
async function registrarVenda(productId, quantity, price, buyerAddress) {
    try {
        
        const weiPrice = web3.utils.toWei(price.toString(), 'ether');
        const totalPrice = weiPrice * quantity;
        const result = await onlineStoreContract.methods.storeSale(productId, quantity, weiPrice, buyerAddress)
            .send({ from: buyerAddress, value: totalPrice, gas: 3000000});

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

async function authorizeWallet(wallet) {
    if (!wallet) {
      return res.status(401).send('Você não está autorizado a acessar esta página');
    }

    // setting authorizedAccount to true using the deployer address as the sender
    const result = await onlineStoreContract.methods.setAuthorizedAccount(wallet, true).send({ from: deployerAddress });
    console.log('Carteira autorizada:', result);
    return result;
}

module.exports = {
    registrarVenda: registrarVenda,
    recuperarVendas: recuperarVendas,
    authorizeWallet: authorizeWallet
  };