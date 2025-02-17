document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list");

    const products = JSON.parse(localStorage.getItem("products")) || [];

    function renderProducts() {
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${product.name} - R$${product.price.toFixed(2)}
                <button class="delete" data-index="${index}">Remover</button>
            `;
            productList.appendChild(li);
        });

        document.querySelectorAll(".delete").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                products.splice(index, 1);
                localStorage.setItem("products", JSON.stringify(products));
                renderProducts();
            });
        });
    }

    productForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const productName = document.getElementById("product-name").value;
        const productPrice = parseFloat(document.getElementById("product-price").value);

        if (productName && productPrice) {
            products.push({ name: productName, price: productPrice });
            localStorage.setItem("products", JSON.stringify(products));
            renderProducts();
            productForm.reset();
        }
    });

    renderProducts();
});