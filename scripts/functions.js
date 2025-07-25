const numberOfProducts = db.length
const productsfamilys = []
const poductsOrder = []
let cost = 0
let toogleBasket = 1

/**
 * 
 * @param {string} x 
 * @returns clean string without spaces on front and end
 */
function getClean(x) {
    return (' ' + x).trim();
}

function getPrice(x) {
    return (parseFloat(x).toFixed(2)).replace('.', ',')
}

function getFamily() {
    for (i = 0; i < numberOfProducts; i++) {
        let x = getClean(db[i].pruductFamily);
        if (db[i].addon) { } else { if (productsfamilys.indexOf(x) == -1) { productsfamilys.push(x) } }
    }
}

function familysRender() {
    let x = document.getElementById('menus'); x.innerHTML = '';
    for (i = 0; i < productsfamilys.length; i++) { x.innerHTML += familyMenuTemplate(i, productsfamilys[i]); }
}

function productRender() {
    let x = document.getElementById('products'); x.innerHTML = '';
    for (j = 0; j < productsfamilys.length; j++) {
        x.innerHTML += familyTemplate(j, productsfamilys[j]);
        for (i = 0; i < numberOfProducts; i++) {
            if (db[i].addon == false && getClean(db[i].pruductFamily) == productsfamilys[j]) {
                x.innerHTML += productTemplate(i,)
            }
        }
    }
}

function basketRender() {
    let x = document.getElementById('basketProducts'); x.innerHTML = '';
    for (i = 0; i < basket.length; i++) { if (basket[poductsOrder[i]] != undefined && basket[poductsOrder[i]] != 0) { x.innerHTML = basketProduct([poductsOrder[i]], basket[poductsOrder[i]]) + x.innerHTML } }
}

function pushToBasket(i) {
    let x = document.getElementById('basketProducts');
    if (basket[i] == undefined || basket[i] == 0) { pushToBasketHelper(i); x.innerHTML = basketProduct(i, basket[i]) + x.innerHTML; poductsOrder.push(i) }
    else { basket[i]++; document.getElementById('productCounterId' + i).innerHTML = basket[i] };
    document.getElementById('priceSummId' + i).innerHTML = productPriceSumm(i); basketPriceSumm();
}

function pushToBasketHelper(j) {
    for (i = 0; basket[j] = 0; i++) { basket[i] == undefined ? basket.push(0) : basket[j]++ }; basket[j]++
}

function removeFromBasket(i) {
    let x = document.getElementById('productCounterId' + i); if (basket[i] == 1) { killBasket(i) }
    else { basket[i] = basket[i] - 1; x.innerHTML = basket[i]; document.getElementById('priceSummId' + i).innerHTML = productPriceSumm(i) };
    basketPriceSumm()
}

function killBasket(i) {
    let x = document.getElementById('myBasketProductId' + i);
    basket[i] = 0; x.remove(); poductsOrder.indexOf(i) > -1 ? poductsOrder.splice(poductsOrder.indexOf(i), 1) : nothing;
    basketPriceSumm(); noShipping()
}

function productPriceSumm(i) {
    x = basket[i] * db[i].pirce
    return (getPrice(x) + '€')
}

function basketPriceSumm() {
    let x = 0;
    for (i = 0; i < basket.length; i++) { x += (basket[i] != undefined ? basket[i] : 0) * db[i].pirce }
    cost = x
    document.getElementById('basketPriceId').innerHTML = getPrice(x) + '€';
    noShipping()
}

function noShipping() {
    let x = document.getElementById('whoolCost')
    basket.length > 0 ?
        document.getElementById('checkboxId').checked ?
            x.innerHTML = getPrice(cost) + '€' :
            x.innerHTML = cost > 0 ? cost >= 50 ? getPrice(cost) + '€' : getPrice(7.8 + cost) + '€' : '0,00€' : x.innerHTML = '0,00€'
}

function basketToggle() {
    if (toogleBasket == -1) { document.getElementById('basketProducts').style.display = 'none'; document.getElementById('basketButton').classList.add('stopHover');document.getElementById('basket').style.paddingBottom='80px'; } else {
        document.getElementById('basketProducts').style.display = ''; document.getElementById('basketButton').classList.remove('stopHover')
    }; toogleBasket = toogleBasket * -1
}



