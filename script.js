let myCurrentModus = 0
window.addEventListener('resize', () => window.innerWidth >= 700 ? normal() : small())

function sising() { window.innerWidth >= 700 ? normal() : small() }

function normal() { if (window.innerWidth >= 700) { document.getElementById('myBody').innerHTML = myBody; document.getElementById('basket').classList.remove('posAbsolutBottom'); familysRender(); productRender(); basketRender(); noShipping(); myCurrentModus = 0 } };

function small() { if (window.innerWidth < 700) { document.getElementById('myBody').innerHTML = myBodySmall; document.getElementById('basket').classList.add('posAbsolutBottom'); familysRender(); productRender(); basketRender(); noShipping(); myCurrentModus = 1 } };

function init() {
    sising();
    getFamily();
    familysRender();
    productRender();
    noShipping()

} 