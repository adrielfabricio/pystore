const createProductForm = document.getElementById('createProductForm');
createProductForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = createProductForm.elements['productName'];
	const description = createProductForm.elements['productDescription'];
	const price = createProductForm.elements['productPrice'];
	const category = createProductForm.elements['productCategory'];
	const stock = createProductForm.elements['productStock'];

	const params = {
		name: name.value,
		description: description.value,
		price: price.value,
		category: category.value,
		stock: stock.value,
	};

	console.log(params);
});

const editProductForm = document.getElementById('editProductForm');
editProductForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const id = editProductForm['productId'];
	const description = editProductForm['productDescription'];
	const price = editProductForm['productPrice'];
	const category = editProductForm['productCategory'];
	const stock = editProductForm['productStock'];

	const params = {
		id: id.value,
		description: description.value,
		price: price.value,
		category: category.value,
		stock: stock.value,
	};

	console.log(params);
});

function deleteProduct(id) {
	if (confirm('Deseja deletar este produto? Esta ação é irreversível.')) {
		console.log(`Deletando produto ${id}`);
	} else {
		console.log('Cancelado.');
	}
};

const createCustomerForm = document.getElementById('createCustomerForm');
createCustomerForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = createCustomerForm.elements['customerName'];
	const email = createCustomerForm.elements['customerEmail'];
	const address = createCustomerForm.elements['customerAddress'];
	const cep = createCustomerForm.elements['customerCep'];

	const params = {
		name: name.value,
		email: email.value,
		address: address.value,
		cep: cep.value,
	};

	console.log(params);
});

const editCustomerForm = document.getElementById('editCustomerForm');
editCustomerForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const id = editCustomerForm.elements['customerId'];
	const name = editCustomerForm.elements['customerName'];
	const email = editCustomerForm.elements['customerEmail'];

	const params = {
		id: id.value,
		name: name.value,
		email: email.value,
	};

	console.log(params);
});

function deleteCustomer(id) {
	if (confirm('Deseja deletar este cliente? Esta ação é irreversível.')) {
		console.log(`Deletando cliente ${id}`);
	} else {
		console.log('Operação cancelada.');
	}
}