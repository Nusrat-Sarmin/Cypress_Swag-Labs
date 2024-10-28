class ProductPage{
    addUserInfo(firstName,lastName,postalCode){
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        //return this;
    }
    clickFinish(){
        cy.get('[data-test="finish"]').click();
    }
    checkOutComplete(expectedText){
        cy.get('[data-test="complete-header"]').should("have.text",expectedText);
}
clickCancel(){
    cy.get('[data-test="cancel"]').click();
}
}
export default ProductPage;