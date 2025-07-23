function productTemplate(i) {
    let x = `
                <div id="myProductId${i}" class="myProduct">
                    <div class="productContent">
                    <p class="productName">${db[i].product}</p>
                    <p class="productDescription">${db[i].description}</p>
                    <p class="productPrice">${getPrice(db[i].pirce)} €</p>
                    </div>
                    <div id="productAddId"  class="productAdd">+</div>
                </div>`
    return (x)
}

function familyTemplate(i, value) {
    let x = `
                <h2 id="ProductsFamily${i}" class="productsFamily">${value}</h2>`
    return (x)

}