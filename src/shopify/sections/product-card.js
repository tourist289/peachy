window.addEventListener("DOMContentLoaded" , function(){
    let variantSelector = document.querySelectorAll(".js-variant-selector");

    variantSelector.forEach( (el) => {
        el.addEventListener("change", function(e){
            let variantId = e.target.value;
            let priceText = e.target.querySelector(`option[value='${variantId}']`).dataset.variantPrice;
            let productCard = e.target.closest(".product-card");
            let button = productCard.querySelector(".js-add-to-cart");
            button.dataset.variantId = variantId;
            button.querySelector(".product-card__price").innerText = priceText;
        });
    });

    let addButton = document.querySelectorAll(".js-add-to-cart");
    addButton.forEach( el => {
        el.addEventListener("click", function(e){
            let buttonId = this.dataset.variantId;
            CartJS.addItem(+buttonId);
        })
    }) 
});
