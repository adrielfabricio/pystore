function buyProduct(id) {
	if (confirm('Deseja comprar este produto?')) {
		console.log(`Comprando produto ${id}`);
	} else {
		console.log('Cancelando compra...');
	}
}