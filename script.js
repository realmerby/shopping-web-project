// ÜRÜN VERİ TABANI
const productsData = [
    { name: "Tshirt", price: 179, img: "assets/tshirt.png", cat: "erkek", type: "tshirt" },
    { name: "Jacket", price: 299, img: "assets/jack.png", cat: "erkek", type: "ceket" },
    { name: "Jeans", price: 499, img: "assets/jean.png", cat: "erkek", type: "pantolon" },
    { name: "Hoodie", price: 189, img: "assets/kadin.png", cat: "kadin", type: "tshirt" }
];

let cart = JSON.parse(localStorage.getItem('MUCAK_CART')) || [];

// Yan Menü Kontrolü
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.style.width = (menu.style.width === "320px") ? "0" : "320px";
}

// Ürünleri Listeleme (kategori.html için)
function renderProducts() {
    const container = document.getElementById('category-products');
    const title = document.getElementById('category-title');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    const typeParam = urlParams.get('type');

    let filtered = productsData;
    if (catParam) {
        filtered = productsData.filter(p => p.cat === catParam);
        title.innerText = catParam.toUpperCase() + " KOLEKSİYONU";
    } else if (typeParam) {
        filtered = productsData.filter(p => p.type === typeParam);
        title.innerText = typeParam.toUpperCase();
    }

    container.innerHTML = '';
    filtered.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <img src="${p.img}" alt="${p.name}">
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p>${p.price} TL</p>
                    <button onclick="addToCart('${p.name}', ${p.price}, '${p.img}')">SEPETE EKLE</button>
                </div>
            </div>
        `;
    });
}

// Sepete Ekleme
function addToCart(name, price, img) {
    cart.push({ name, price, image: img, id: Date.now() });
    localStorage.setItem('MUCAK_CART', JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} sepete eklendi!`);
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (el) el.innerText = cart.length;
}

// Sepet Sayfası Görüntüleme
function displayCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('total-price');
    const summary = document.getElementById('cart-summary');
    if (!container) return;

    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 50px;">Sepetiniz şu an boş.</p>';
        if (summary) summary.style.display = 'none';
    } else {
        if (summary) summary.style.display = 'block';
        cart.forEach((item, index) => {
            total += item.price;
            container.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}">
                    <div style="flex-grow:1; margin-left:20px;">
                        <h4 style="color:var(--dark-gold)">${item.name}</h4>
                        <p>${item.price} TL</p>
                    </div>
                    <button onclick="removeFromCart(${index})" style="background:transparent; border:none; color:red; cursor:pointer; font-weight:bold;">SİL</button>
                </div>
            `;
        });
    }
    if (totalEl) totalEl.innerText = total + " TL";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('MUCAK_CART', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast-notification';
    t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.remove(); }, 3000);
}

function showCheckout() {
    document.getElementById('checkout-section').style.display = 'block';
}

function processPayment(e) {
    e.preventDefault();
    alert("Ödemeniz onaylandı. Mucak Luxury kalitesini seçtiğiniz için teşekkürler.");
    localStorage.removeItem('MUCAK_CART');
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('cart-items')) displayCart();
    if (document.getElementById('category-products')) renderProducts();
});