const numberOfProducts = db.length
const productsfamilys = []
const poductsOrder = []
let cost = 0
let justBasket = 1

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
    let x = document.getElementById('menus');
    x.innerHTML = '';
    for (i = 0; i < productsfamilys.length; i++) { x.innerHTML += familyMenuTemplate(i, productsfamilys[i]); }
}

function productRender() {
    let x = document.getElementById('products');
    x.innerHTML = '';
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
    let basketSide = document.getElementById('basketProducts'); basketSide.innerHTML = '';
    for (i = 0; i < basket.length; i++) {
        if (basket[poductsOrder[i]] != undefined && basket[poductsOrder[i]] != 0) {
            basketSide.innerHTML = basketProduct([poductsOrder[i]], basket[poductsOrder[i]]) + basketSide.innerHTML;
            document.getElementById('productMainCounterId' + [poductsOrder[i]]).innerHTML = basket[poductsOrder[i]];

        }
    }
}

function pushToBasket(i) {
    let x = document.getElementById('basketProducts');
    if (basket[i] == undefined || basket[i] == 0) {
        pushToBasketHelper(i);
        x.innerHTML = basketProduct(i, basket[i]) + x.innerHTML; poductsOrder.push(i)
    }
    else {
        basket[i]++;
        document.getElementById('productCounterId' + i).innerHTML = basket[i];
    };
    document.getElementById('productMainCounterId' + i).innerHTML = basket[i];
    document.getElementById('priceSummId' + i).innerHTML = productPriceSumm(i); basketPriceSumm();
    basketRender()
}

function pushToBasketHelper(j) {
    for (i = 0; basket[j] = 0; i++) { basket[i] == undefined ? basket.push(0) : basket[j]++ }; basket[j]++
}

function removeFromBasket(i) {
    let x = document.getElementById('productCounterId' + i);
    if (basket[i] == 1) {
        killBasket(i);
        document.getElementById('productMainCounterId' + i).innerHTML = ''
    }
    else {
        basket[i] = basket[i] - 1;
        x.innerHTML = basket[i];
        document.getElementById('priceSummId' + i).innerHTML = productPriceSumm(i);
        document.getElementById('productMainCounterId' + i).innerHTML = basket[i];
    };
    basketPriceSumm();
    basketRender();
}

function killBasket(i) {
    let x = document.getElementById('myBasketProductId' + i);
    basket[i] = 0;
    x.remove();
    poductsOrder.indexOf(i) > -1 ? poductsOrder.splice(poductsOrder.indexOf(i), 1) : nothing;
    basketPriceSumm(); priceCalculation(); document.getElementById('productMainCounterId' + i).innerHTML = ''
}

function productPriceSumm(i) {
    x = basket[i] * db[i].pirce;
    return (getPrice(x) + '€');
}

function basketPriceSumm() {
    let x = 0;
    for (i = 0; i < basket.length; i++) { x += (basket[i] != undefined ? basket[i] : 0) * db[i].pirce };
    cost = x;
    document.getElementById('basketPriceId').innerHTML = getPrice(x) + '€';
    priceCalculation();
}

function priceCalculation() {
    let x = document.getElementById('whoolCost');
    basket.length > 0 ? (
        document.getElementById('checkboxId').checked ? (
            x.innerHTML = getPrice(cost) + '€') :
            x.innerHTML = cost > 0 ? volumeDiscount() : '0,00€') : x.innerHTML = '0,00€';
    if (justBasket > 0) { document.getElementById('myFooter').innerHTML = miniBasketBottom() };
}

function volumeDiscount() {
    let x;
    if (cost >= 50) {
        document.getElementById('discount').style.display = 'none';
        x = getPrice(cost) + '€';
    } else {
        document.getElementById('discount').style.display = '';
        x = getPrice(7.8 + cost) + '€'
    };
    return x
}

function basketToggle() { document.getElementById('basketProducts').classList.toggle('displayNone') }

function basketBottonOn() {
    if (myCurrentModus == 0) { normal() } else { }
    if (myCurrentModus == 1) {
        document.getElementById('basketSideId').classList.toggle('displayNone');
        document.getElementById('myMain').classList.toggle('displayNone');
        document.getElementById('miniBasketBottomId').classList.toggle('displayNone');
        justBasket = justBasket * (-1);
        console.log(justBasket);
        console.log(document.getElementById('basketSideId').offsetHeight);
    } else { }
}

function myOrder() {
    if (poductsOrder.length > 0) {
        basket.length = 0;
        poductsOrder.length = 0;
        priceCalculation();
        basketPriceSumm();
        mainCounterReset();
        document.getElementById('basketProducts').innerHTML = '';
        document.getElementById('oderDoneImage').style.display = "block"
        document.getElementById('basketSideId').style.height = '100vh';
    } else { document.getElementById('oderDoneImage').style.display = "none" };
    console.log(document.getElementById('myBody').offsetHeight);
    document.getElementById('myFooter').innerHTML = miniBasketBottom();
}

function mainCounterReset() {
    for (j = 0; j < productsfamilys.length; j++) {
        x.innerHTML += familyTemplate(j, productsfamilys[j]);
        for (i = 0; i < numberOfProducts; i++) {
            if (db[i].addon == false && getClean(db[i].pruductFamily) == productsfamilys[j]) {
                document.getElementById('productMainCounterId' + i).innerHTML = ''
            }
        }
    }
}

function switchButton() {
    document.getElementById('callBasket').classList.toggle('displayNone')
    document.getElementById('callShop').classList.toggle('displayNone')
}

function miniBasketBottomDesamble() {
    document.getElementById('miniBasketBottomId').classList.add('displayNone')
}