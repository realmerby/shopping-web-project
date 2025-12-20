const productsData = [
    { 
        name: "Noir T-Shirt", 
        price: 250, 
        img: "assets/tshirt1.png", 
        cat: "erkek", 
        type: "tshirt",
        desc: "Gece siyahının asilliği. %100 Mısır pamuğundan üretilen bu parça, minimalizmin zirvesini temsil ediyor."
    },
    { 
        name: "Bomber Jacket", 
        price: 1850, 
        img: "assets/bomber.png", 
        cat: "erkek", 
        type: "ceket",
        desc: "Klas ve rahatlık için üretildi. Gerçek deri ve bomber olmanın uyumuyla tam olarak sizin için."
    },
    { 
        name: "Urban Cargo", 
        price: 650, 
        img: "assets/cargo.png", 
        cat: "erkek", 
        type: "pantolon",
        desc: "Şehir hayatının hızına yetişmek için tasarlandı. Fonksiyonel cepler ve esnek kumaş yapısı."
    },
    { 
        name: "Beige Chino", 
        price: 550, 
        img: "assets/chino1.png", 
        cat: "erkek", 
        type: "pantolon",
        desc: "Hafta sonu rahatlığı ile ofis şıklığı arasında mükemmel bir denge. Toprak tonlarının sıcaklığını hissedin."
    },
    { 
        name: "Leather Biker", 
        price: 2400, 
        img: "assets/leather1.png", 
        cat: "erkek", 
        type: "ceket",
        desc: "Gerçek kuzu derisi, el işçiliği ve zamansız bir asi duruş. Yıllandıkça güzelleşen bir yatırım."
    },
    { 
        name: "Oversize White", 
        price: 280, 
        img: "assets/white_tee.png", 
        cat: "erkek", 
        type: "tshirt",
        desc: "Sokak modasının vazgeçilmezi. Geniş kalıp, düşüş omuzlar ve kalın gramajlı kumaş."
    },
    { 
        name: "Denim Jacket", 
        price: 899, 
        img: "assets/denim_jack.png", 
        cat: "erkek", 
        type: "ceket",
        desc: "Klasik mavi denim ceket. Tarzından ödün vermeden rahatlıkla giyinebilirsiniz."
    },
    { 
        name: "Regular Fit Jean", 
        price: 499, 
        img: "assets/jean1.png", 
        cat: "erkek", 
        type: "pantolon",
        desc: "Rahat ve özgürce giyebileceğin özel likralı dokuma jean. Solmuş rengi ile her kombinle uyumlu."
    },
    { 
        name: "Basic T-Shirt", 
        price: 179, 
        img: "assets/blacktshirt.png", 
        cat: "erkek", 
        type: "tshirt",
        desc: "Yüzde yüz organik pamuktan üretilmiş, nefes alan kumaş yapısıyla yaz aylarının vazgeçilmezi. Mucak Luxury imzasını taşıyan minimalist tasarım."
    },
    { 
        name: "Green Jacket", 
        price: 299, 
        img: "assets/jack.png", 
        cat: "erkek", 
        type: "ceket",
        desc: "Soğuk havalarda stilinizden ödün vermeyin. Su geçirmez yapısı ve rüzgar kıran teknolojisi ile modern şehir hayatı için tasarlandı."
    },
    { 
        name: "Classic Jean", 
        price: 499, 
        img: "assets/kjean.png", 
        cat: "erkek", 
        type: "pantolon",
        desc: "Klasik mavi jean. İlkelerinden asla şaşmayanlar için."
    },


    
    { 
        name: "Classic Tee", 
        price: 350, 
        img: "assets/tee1.png", 
        cat: "kadin", 
        type: "tshirt",
        desc: "İpeksi dokunuş hissi veren modal kumaş. Vücut hatlarını zarifçe belli eden feminen kesim."
    },
    { 
        name: "Palazzo Pants", 
        price: 750, 
        img: "assets/plazzo.png", 
        cat: "kadin", 
        type: "pantolon",
        desc: "Yüksek bel, geniş paça. Adımlarınızla birlikte hareket eden akışkan kumaş yapısı."
    },
    { 
        name: "Trench Coat", 
        price: 1500, 
        img: "assets/coat.png", 
        cat: "kadin", 
        type: "ceket",
        desc: "Londra yağmurlarına meydan okuyan klasik bej trençkot. Bel kemeriyle silüetinizi vurgulayın."
    },
    { 
        name: "Crop Shirt", 
        price: 950, 
        img: "assets/crop.png", 
        cat: "kadin", 
        type: "tshirt",
        desc: "Modern ve cesur. Tam olarak sizin tarzınızı yansıtıyor."
    },
    { 
        name: "Mom Jeans", 
        price: 520, 
        img: "assets/mom_jeans.png", 
        cat: "kadin", 
        type: "pantolon",
        desc: "90'lar ruhunu geri getiren rahat kesim. Yüksek bel ve taş yıkama detayı."
    },
    { 
        name: "Basic V-Neck", 
        price: 220, 
        img: "assets/vneck.png", 
        cat: "kadin", 
        type: "tshirt",
        desc: "Gardırobun kurtarıcısı. Her mevsime uygun, nefes alan pamuklu basic tişört."
    },
    { 
        name: "Puffer Jacket", 
        price: 1200, 
        img: "assets/kadinjack.png", 
        cat: "kadin", 
        type: "ceket",
        desc: "Kuş tüyü dolgulu, parlak yüzeyli şişme mont. Kışı sıcak ve şık geçirmek isteyenler için."
    },
    { 
        name: "Oversize Hoodie", 
        price: 189, 
        img: "assets/osize.png", 
        cat: "kadin", 
        type: "tshirt",
        desc: "Oversize kesim, yumuşak iç doku. Rahatlığı lüks ile buluşturan özel koleksiyon parçası."
    }


];

let cart = JSON.parse(localStorage.getItem('MUCAK_CART')) || [];
let selectedSize = null;

function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.style.width = (menu.style.width === "320px") ? "0" : "320px";
}



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
                <a href="urun.html?name=${p.name}" style="text-decoration:none; color:inherit;">
                    <img src="${p.img}" alt="${p.name}">
                </a>
                <div class="product-info">
                    <a href="urun.html?name=${p.name}" style="text-decoration:none; color:inherit;">
                        <h3>${p.name}</h3>
                    </a>
                    <p>${p.price} TL</p>
                </div>
            </div>
        `;
    });
}

function loadProductDetail() {
    const container = document.getElementById('product-detail-container');
    if (!container) return; 
    selectedSize = null;

    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const product = productsData.find(p => p.name === productName);

    if (product) {
        container.innerHTML = `
            <div class="detail-image">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="detail-content">
                <h1>${product.name}</h1>
                <span class="price">${product.price} TL</span>
                <p class="desc">${product.desc || "Açıklama yok."}</p>

                <div class="size-container">
                    <span class="size-label">BEDEN SEÇİNİZ:</span>
                    <div class="size-options">
                        <div class="size-btn" onclick="selectSize(this, 'S')">S</div>
                        <div class="size-btn" onclick="selectSize(this, 'M')">M</div>
                        <div class="size-btn" onclick="selectSize(this, 'L')">L</div>
                        <div class="size-btn" onclick="selectSize(this, 'XL')">XL</div>
                    </div>
                </div>

                <button class="detail-btn" onclick="addToCartDetail('${product.name}', ${product.price}, '${product.img}')">
                    SEPETE EKLE
                </button>
            </div>
        `;
        loadRelatedProducts(product);
    } else {
        container.innerHTML = `<h2>Ürün bulunamadı.</h2>`;
    }
    
}

function addToCartDetail(name, price, img) {
    if (!selectedSize) {
        showToast("Lütfen önce beden seçiniz!");
        return; 
    }
    addToCart(name, price, img, selectedSize);
}

function selectSize(btnElement, size) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    selectedSize = size;
}


function addToCart(name, price, img, size = 'Std') { 
    cart.push({ 
        name: name, 
        price: price, 
        image: img, 
        size: size, 
        id: Date.now() 
    });
    
    localStorage.setItem('MUCAK_CART', JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} (${size}) sepete eklendi!`);
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (el) el.innerText = cart.length;
}

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
                        <p style="font-size:12px; color:#888;">Beden: ${item.size}</p> 
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
    if (document.getElementById('product-detail-container')) loadProductDetail(); // Yeni eklenen
});
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});




function loadRelatedProducts(currentProduct) {
    const container = document.getElementById('related-products');
    if (!container) return;

    const related = productsData.filter(p => p.cat === currentProduct.cat && p.name !== currentProduct.name);

    related.sort(() => 0.5 - Math.random());

    const selected = related.slice(0, 4);

    container.innerHTML = '';
    selected.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <a href="urun.html?name=${p.name}" style="text-decoration:none; color:inherit;">
                    <img src="${p.img}" alt="${p.name}" style="height:350px;"> </a>
                <div class="product-info">
                    <a href="urun.html?name=${p.name}" style="text-decoration:none; color:inherit;">
                        <h3 style="font-size:16px;">${p.name}</h3>
                    </a>
                    <p style="font-size:14px;">${p.price} TL</p>
                </div>
            </div>
        `;
    });
}

function toggleSearch() {
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");
    
    overlay.classList.toggle("active");
    
    if (overlay.classList.contains("active")) {
        input.focus();
    } else {
        input.value = "";
        results.innerHTML = "";
    }
}

function performSearch() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const container = document.getElementById("search-results");
    
    container.innerHTML = ""; 
    if (query.length < 2) return; 

    const results = productsData.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.type.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; color: #999;">Sonuç bulunamadı.</p>';
    } else {
        results.forEach(p => {
            container.innerHTML += `
                <a href="urun.html?name=${p.name}" class="search-item">
                    <img src="${p.img}" alt="${p.name}">
                    <h4>${p.name}</h4>
                    <p>${p.price} TL</p>
                </a>
            `;
        });
    }
}


document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const overlay = document.getElementById("search-overlay");
        if(overlay.classList.contains("active")) {
            toggleSearch();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product, h2, .footer-col, .hero-content, .detail-content, .detail-image');

    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    animatedElements.forEach(el => observer.observe(el));
});

function toggleAccordion(button) {
    const item = button.parentElement;
    item.classList.toggle('active');
}