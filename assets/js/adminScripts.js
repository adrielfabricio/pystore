function deleteProduct(id) {
  if (confirm('Deseja deletar este produto? Esta ação é irreversível.')) {
    document.getElementById(`form-delete-product-${id}`).submit();
  }
}

function deleteCustomer(id) {
  if (confirm('Deseja deletar este cliente? Esta ação é irreversível.')) {
		document.getElementById(`form-delete-customer-${id}`).submit();
  }
}
