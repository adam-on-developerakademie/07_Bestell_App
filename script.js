let myCurrentModus = 0
window.addEventListener('resize', () => window.innerWidth >= 700 ? normal() : small())

function sising() { window.innerWidth >= 700 ? normal() : small() }

function normal() {
    if (window.innerWidth >= 700 && myCurrentModus == 1) {
        familysRender();
        productRender();
        basketRender();
        myCurrentModus = 0
        document.getElementById('basketSideId').classList.remove('displayNone')
        document.getElementById('miniBasketBottomId').classList.add('displayNone')
        document.getElementById('myMain').classList.remove('displayNone');
        console.log(myCurrentModus)
        priceCalculation();
         document.getElementById('callShop').classList.add('displayNone')
    }
};

function small() {
    if (window.innerWidth < 700 && myCurrentModus == 0) {
        familysRender();
        productRender();
        basketRender();
        myCurrentModus = 1;
        document.getElementById('basketSideId').style.width = '100%'
        document.getElementById('basketSideId').classList.add('displayNone')
        document.getElementById('myFooter').innerHTML=miniBasketBottom()
        console.log(myCurrentModus)
        priceCalculation();
    }
};

function init() {
    sising();
    getFamily();
    familysRender();
    productRender();
    priceCalculation()
} 
