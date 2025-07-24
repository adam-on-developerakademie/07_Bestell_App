function productTemplate(i) {
    let x = `
                <div id="myProductId${i}" class="myProduct" >
                    <div class="productContent">
                    <p class="productName">${getClean(db[i].product)}</p>
                    <p class="productDescription">${getClean(db[i].description)}</p>
                        <div class="unitAndPrice">
                            <p class="productUnit">${getClean(db[i].unit)}</p>
                            <p class="productPrice">${getPrice(db[i].pirce)} €</p>
                        </div>
                    </div>
                    <div id="productAddId${i}"  class="productAdd" onclick="pushToBasket(${i})">+</div>
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
                <h2 id="ProductsFamily${i}" class="productsFamily" onclick="window.location.href='#header'">${value}</h2>`
    return (x)

}

function basketProduct(i,n) {
    let x = i > -1 ? `
                <div id="myBasketProductId${i}" class="myBasketProduct">
                    <div class="productWithCouter">
                        <p class="productName">${getClean(db[i].product)}</p>
                        <div class="plusMinusCounter">
                            <div id="productRemoveBasketId${i}" class="productRemoveBasket" onclick="removeFromBasket(${i})">&#8722;</div>
                            <div id="productCounterId${i}" class="productCounter">${n}</div>
                            <div id="productAddBasketId${i}" class="productAddBasket" onclick="pushToBasket(${i})">+</div>
                        </div>
                    </div>
                    <div class="priceSummAndDeleteAll">
                        <div class="deleteAll" onclick="killBasket(${i})"></div>
                        <div id="priceSummId${i}" class="priceSumm">${productPriceSumm(i)}€</div>
                    </div>
                </div>`: ``;
    return (x);
}

