const numberOfProducts = db.length
const productsfamilys = []

/**
 * 
 * @param {string} x 
 * @returns clean string without spaces on front and end
 */
function getClean(x) {
    return (' ' + x).trim();
}

function getPrice(x) {
    return (parseFloat(x).toFixed(2)).replace('.',',')
}

function getFamily() {
    for (i = 0; i < numberOfProducts; i++) {
        let x = getClean(db[i].pruductFamily);
        if (db[i].addon) { } else {
            if (productsfamilys.indexOf(x) == -1) { productsfamilys.push(x) }
        }
    }
}

function familysRender() {
    let x = document.getElementById('menus'); x.innerHTML = '';
    for (i = 0; i < productsfamilys.length; i++) { x.innerHTML += familyTemplate(i, productsfamilys[i]); }
}

function productRender() {
    let x = document.getElementById('products'); x.innerHTML = '';
    for (j = 0; j < productsfamilys.length; j++) {x.innerHTML+=familyTemplate(j, productsfamilys[j]); 
        for (i = 0; i < numberOfProducts; i++) {
            if (db[i].addon) { } else {
               x.innerHTML+=productTemplate(i,)
            }
        }
    }
    console.log(products)
}


