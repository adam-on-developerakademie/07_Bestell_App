let myCurrentModus = 0
window.addEventListener('resize', () => window.innerWidth >= 700 ? Normal() : Small())

function Normal() { if (myCurrentModus == 1) { document.getElementById('myBody').innerHTML = myBody; document.getElementById('basket').classList.remove('posAbsolutBottom'); familysRender(); productRender(); basketRender(); noShipping(); myCurrentModus = 0 } };

function Small() { if (myCurrentModus == 0) { document.getElementById('myBody').innerHTML = myBodySmall; document.getElementById('basket').classList.add('posAbsolutBottom'); familysRender(); productRender(); basketRender(); noShipping(); myCurrentModus = 1 } };

function init() {
    getFamily();
    familysRender();
    productRender();
    noShipping()
} 