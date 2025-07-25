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
                        <div id="priceSummId${i}" class="priceSumm">${productPriceSumm(i)}</div>
                    </div>
                </div>`: ``;
    return (x);
}

let myBody=`
<body id="myBody" onload="init()">
    <header id="header">
        <div class="header">
            <img id="headerImage" src="./assets/icons/Logo/Logo.png" alt="">
            <div class="myHtmlHamburger">
                <div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>
            </div>
        </div>
        </div>
    </header>
    <div class="myBody">
        <main>
            <div class="mainBackground">
                <div id="mainHeader">
                    <h1>Qick-Shop Online<h5>Bewertung (4,2 von 5 Sternen)</h5>
                    </h1>
                    <div id="menus">
                    </div>
                </div>
            </div>
            <div class="products">
                <div id="products">
                </div>
                <div id="mainFooter">
                </div>
            </div>
        </main>
        <section id="basket">
            <div id="basketHeader">
                <h2>Warenkorb</h2>
            </div>
            <div id="basketProducts">
            </div>
            <div id="basketFooter">
                <div class="fullSpace">
                    <p>Zwischensumme:</p>
                    <p id="basketPriceId"></p>
                </div>
                <div class="fullSpace">
                    <p>Lieferkosten:</p>
                    <p>7,80€</p>
                </div>
                <div class="fullSpace">
                    <p>Selbstabholer?</p>
                    <input id="checkboxId" type="checkbox" onclick="noShipping(0)">
                </div>
                <div class="fullSpace">
                    <h3>Gesammt:</h3>
                    <h3 id="whoolCost"></h3>
                </div>
                <div class="fullSpace">
                <p><br>ab 50€ Versandkostenfrei!</p><p></p>
                </div>
            </div>
        </section>
    </div>
    <footer>
    </footer>
    <script src="./script.js"></script>
    <script src="./scripts/db.js"></script>
    <script src="./scripts/functions.js"></script>
    <script src="./scripts/templates.js"></script>
</body>`

let myBodySmall=`
<body id="myBody" onload="init()">
    <header id="header">
        <div class="header">
            <img id="headerImage" src="./assets/icons/Logo/Logo.png" alt="">
            <div class="myHtmlHamburger">
                <div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>
            </div>
        </div>
        </div>
    </header>
    <div class="myBody">
        <main>
            <div class="mainBackground">
                <div id="mainHeader">
                    <h1>Qick-Shop Online<h5>Bewertung (4,2 von 5 Sternen)</h5>
                    </h1>
                    <div id="menus">
                    </div>
                </div>
            </div>
            <div class="products">
                <div id="products">
                </div>
                <div id="mainFooter">
                </div>
            </div>
        </main>
    </div>
            <section id="basket">
            <div id="basketHeader">
                <h2>Warenkorb</h2>
            </div>
            <div id="basketProducts">
            </div>
            <div id="basketFooter">
                <div class="fullSpace">
                    <p>Zwischensumme:</p>
                    <p id="basketPriceId"></p>
                </div>
                <div class="fullSpace">
                    <p>Lieferkosten:</p>
                    <p>7,80€</p>
                </div>
                <div class="fullSpace">
                    <p>Selbstabholer?</p>
                    <input id="checkboxId" type="checkbox" onclick="noShipping(0)">
                </div>
                <div class="fullSpace">
                    <h3>Gesammt:</h3>
                    <h3 id="whoolCost"></h3>
                </div>
                <div class="fullSpace">
                <p><br>ab 50€ Versandkostenfrei!</p><p></p>
                </div>
            </div>
        </section>
    <footer>
    </footer>
    <script src="./script.js"></script>
    <script src="./scripts/db.js"></script>
    <script src="./scripts/functions.js"></script>
    <script src="./scripts/templates.js"></script>
</body>
`