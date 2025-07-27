let myCurrentModus = 0
window.addEventListener('resize', () => window.innerWidth >= 700 ? normal() : small())

function sising() { window.innerWidth >= 700 ? normal() : small() }

function normal() {
    if (window.innerWidth >= 700) {
        document.getElementById('myBody').innerHTML = myBody;
        document.getElementById('basket').classList.remove('posAbsolutBottom');
        familysRender();
        productRender();
        basketRender();
        priceCalculation();
        myCurrentModus = 0
        document.getElementById('basketProducts').classList.remove('displayNone')
    }
};

function small() {
    if (window.innerWidth < 700) {
        document.getElementById('myBody').innerHTML = myBodySmall;
        document.getElementById('basket').classList.add('posAbsolutBottom');
        familysRender();
        productRender();
        basketRender();
        priceCalculation();
        myCurrentModus = 1
        document.getElementById('basketProducts').classList.add('displayNone')
    }
};

function init() {
    sising();
    getFamily();
    familysRender();
    productRender();
    priceCalculation()

} 
