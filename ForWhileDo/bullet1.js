let product = document.getElementById("products");
let productss = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
for (i = 0; i < productss.length; i++) {
    product.innerHTML += `<ul><li>${productss[i]}</li></ul>`;
}
