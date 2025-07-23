function productTemplate(i) {
    let x = `
                <div id="myProductId${i}" class="myProduct">
                    <div class="productContent">
                    <p class="productName">${getClean(db[i].product)}</p>
                    <p class="productDescription">${getClean(db[i].description)}</p>
                        <div class="unitAndPrice">
                            <p class="productUnit">${getClean(db[i].unit)}</p>
                            <p class="productPrice">${getPrice(db[i].pirce)} €</p>
                        </div>
                    </div>
                    <div id="productAddId"  class="productAdd">+</div>
                </div>`
    return (x)
}

function familyMenuTemplate(i, value) {
    let x = `
                <h2 id="ProductsFamilyM${i}" class="productsFamily" onclick="window.location.href='#ProductsFamily${i}'">${value}</h2>`
    return (x)

}

function familyTemplate(i, value) {
    let x = `
                <h2 id="ProductsFamily${i}" class="productsFamily" onclick="window.location.href='#ProductsFamilyM${i}'">${value}</h2>`
    return (x)

}