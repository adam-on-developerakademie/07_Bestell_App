function productTemplate() {
    let x = `
                <div id="myProductId" class="myProduct">
                    <div class="productContent">
                    <p class="productName">Produkt Name</p>
                    <p class="productDescription">Produkt beschreibung</p>
                    <p class="productPrice">5,95 €</p>
                    </div>
                    <div id="productAddId"  class="productAdd">+</div>
                </div>`

    console.log(x)
    return (x)

}

function familyTemplate() {
    let x = `
                <h2 id="ProductsFamily1" class="productsFamily">Backware</h2>`
    console.log(x)
    return (x)

}