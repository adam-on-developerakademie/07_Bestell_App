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
                    <div id="productAddId${i}"  class="productAdd" onclick="pushToBasket()">+</div>
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

function basketProduct() {
    let x = `
                <div id="myBasketProductId" class="myBasketProduct">
                    <div class="productWithCouter">
                        <p class="productName">Produkt Name</p>
                        <div class="plusMinusCounter">
                            <div id="productRemoveBasketId" class="productRemoveBasket">&#8722;</div>
                            <div id="productCounterId" class="productCounter">05</div>
                            <div id="productAddBasketId" class="productAddBasket">+</div>
                        </div>
                    </div>
                    <div class="priceSummAndDeleteAll">
                        <img src="./assets/img/cancel.png" class="deleteAll" alt="">
                        <div class="priceSumm">125€</div>
                    </div>
                </div>`;
    return (x);
}

