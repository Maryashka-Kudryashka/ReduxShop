export async function allProducts() {
  return await ((await fetch(`http://localhost:3004/products`)).json());
}

export async function allCartItems() {
  return await ((await fetch(`http://localhost:3004/cart`)).json());
}

export async function postCartItem(item) {
  return await ((await fetch(`http://localhost:3004/cart`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(item)
  })).json());
}

export async function postProduct(product) {
  return await ((await fetch(`http://localhost:3004/products`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(product)
  })).json());
}

export async function deleteItemFromCart(id) {
  return await  ((await fetch(`http://localhost:3004/cart/${id}`, {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify()
  })).json());
}
