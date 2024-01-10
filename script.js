function getProduct() {
    const productvalue = document.getElementById('product').value;
    const productURL = `https://fakestoreapi.com/products/${productvalue}`

    fetch(productURL)
        .then((res) => res.json())
        .then((json) => console.log(json));

}

function displayProduct(data) {
    

}