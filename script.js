let myCurrentModus = 0
window.addEventListener('resize', () => window.innerWidth >= 700 ? Normal() : Small())

function Normal() { if (myCurrentModus == 1) { document.getElementById('myBody').innerHTML = myBody; familysRender(); productRender(); basketRender(); myCurrentModus = 0 } };

function Small() { if (myCurrentModus == 0) { document.getElementById('myBody').innerHTML = myBodySmall; familysRender(); productRender(); basketRender(); myCurrentModus = 1 } };

function init() {
    getFamily();
    familysRender();
    productRender();
    noShipping()
} 