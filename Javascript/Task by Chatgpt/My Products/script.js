const searchProduct = document.getElementById("searchProduct");

const searchBtn = document.getElementById("searchBtn");

const productsContainer = document.getElementById("productsContainer");

const baseUrl = "http://localhost:3000/products";


function createCard(product) {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <div class="card-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="card-content">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <h3>${product.price}</h3>
            <span>${product.category}</span>
            <button>Add Cart</button>
        </div>
    `;

    return card;
}

async function loadAllProducts() {

    try {

        const response = await fetch(baseUrl);

        const data = await response.json();

        productsContainer.innerHTML = "";

        data.forEach(function (product) {

            const card = createCard(product);

            productsContainer.appendChild(card);

        });

    } catch (err) {
        console.error(err);
        alert("Products load nahi thaya!");
    }
}


searchBtn.addEventListener("click", productCard);

async function productCard() {

    const searchPr = searchProduct.value.trim();

    if (searchPr === "") {
        loadAllProducts();
        return;
    }

    try {

        const response = await fetch(`${baseUrl}?title_like=${encodeURIComponent(searchPr)}`);

        const data = await response.json();

        if (data.length === 0) {
            alert("No product found");
            return;
        }

        productsContainer.innerHTML = "";

        data.forEach(function (product) {

            const card = createCard(product);

            productsContainer.appendChild(card);

        });

    } catch (err) {
        console.error(err);
        alert("Error fetching product");
    }

    searchProduct.value = "";
}

loadAllProducts();