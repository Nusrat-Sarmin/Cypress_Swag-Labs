class AddToCart{
    userInDashboard(){
        cy.get('[data-test="title"]').should("have.text","Products");
}
   viewProduct(){
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
   }
   addingToCart(){
    cy.get('[data-test="add-to-cart"]').click();
   }
   cartPage(){
    cy.get('[data-test="shopping-cart-link"]').click();
   }
   gooingToCheckoutPage(){
    cy.get('[data-test="checkout"]').click();
   }
   clickOnCancelButton(){
    cy.get('[data-test="cancel"]').click();
}
}
export default AddToCart;