const editProductForm = document.getElementById('editProductForm');
editProductForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const id = document.getElementById('productId');
	const description = document.getElementById('productDescription');
	const price = document.getElementById('productPrice');
	const category = document.getElementById('productCategory');
	const stock = document.getElementById('productStock');

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
	console.log(id);
};