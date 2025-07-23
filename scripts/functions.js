const p = db.length // Number of products
const family=[]
const products=[]

function getClean(x) {
    return (' ' + x).trim();
}

function getFamily() {
    for (i = 0; i < p; i++) {
        if(db[i].addon){}else{family.push(getClean(db[i].pruductFamily))}
    }

    console.log(family)
}
getFamily()
function getProducts() {
    for (i = 0; i < p; i++) {
        if(db[i].addon){}else{products.push(getClean(db[i].product))}
    }

    console.log(products)
}
getProducts()


function productRender(){


}
