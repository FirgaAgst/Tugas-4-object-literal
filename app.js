let products = [
    { name: "Ambalabu", price: 5000000 },
    { name: "Alat Mewing", price: 50000 },
    { name: "Laptop", price: 400000 },
    { name: "M4A1", price: 90000 },
    { name: "Boxer", price: 10000 },
];

let cart = [];

let productListElement = document.getElementById("product-list");
let viewCartButton = document.getElementById("view-cart");
let cartContentElement = document.getElementById("cart-content");
let cartListElement = document.getElementById("cart-list");
let totalPriceElement = document.getElementById("total-price");
let cartCountElement = document.getElementById("cart-count");

products.forEach((product, index) => {
    let listItem = document.createElement("li");
    let productNameElement = document.createElement("span");
    productNameElement.textContent = `${product.name} - Rp ${product.price}`;
    listItem.appendChild(productNameElement);

    let addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.dataset.index = index;
    listItem.appendChild(addButton);

    productListElement.appendChild(listItem);

    addButton.addEventListener("click", () => {
        let selectedIndex = parseInt(addButton.dataset.index);
        let selectedProduct = products[selectedIndex];
        let existingProduct = cart.find((product) => product.name === selectedProduct.name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            selectedProduct.quantity = 1;
            cart.push(selectedProduct);
        }
        console.log("Product added to cart!");
        updateCartCount();
    });
});

viewCartButton.addEventListener("click", () => {
    cartContentElement.style.display = "block";
    cartListElement.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((product, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${product.quantity}x ${product.name} - Rp ${product.price * product.quantity}`;
        cartListElement.appendChild(listItem);
        totalPrice += product.price * product.quantity;
    });
    totalPriceElement.textContent = `Total Price: Rp ${totalPrice}`;
});

function updateCartCount() {
    if (cart.length > 0) {
        cartCountElement.textContent = cart.length;
        cartCountElement.style.display = "inline-block";
    } else {
        cartCountElement.style.display = "none";
    }
}
