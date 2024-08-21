// Product Data (example structure)
const products = [
    { id: 1, name: 'baggy trousers', price: 50.00, image: 'https://img.tatacliq.com/images/i16//437Wx649H/MP000000021445883_437Wx649H_202403061222031.jpeg' },
    { id: 2, name: 'porsche hoodie', price: 35.00, image: 'https://m.media-amazon.com/images/I/51xtWvBWEDL._SX679_.jpg'  },
    { id: 3, name: 'jorden university blue', price: 20.00, image: 'https://static.nike.com/a/images/t_prod_sc/w_480,c_limit,f_auto,q_auto/7ca40acb-2d45-4a5c-8341-d0d205766181/air-jordan-1-university-blue-release-date.jpg' },
];

let cart = [];

// Display Products
const productList = document.getElementById('product-list');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productItem);
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update Cart
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItems.appendChild(cartItem);
        totalPrice += item.price;
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Handle Checkout
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Purchase complete!');
    cart = [];
    updateCart();
});