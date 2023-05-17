describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });
  
  afterEach(() => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
  });

  it('add an item in cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('be.visible');
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item_label').should('contain', 'Sauce Labs Backpack');
        cy.get('.cart_quantity').should('have.length', 1);
  });

  it("ajouter 3 produits au panier", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get(".shopping_cart_badge").should("be.visible").should("contain", 3);
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item_label")
      .should("contain", "Sauce Labs Backpack")
      .and("contain", "Sauce Labs Bike Light")
      .and("contain", "Test.allTheThings() T-Shirt (Red)");
    cy.get(".cart_quantity").should("have.length", 3);
  });

  it('panier sans produit', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_quantity').should('have.length', 0);
    cy.get('.cart_item').should('not.exist');
  });

  it("ajouter 1 produit à partir d'une fiche produit", () => {
    cy.get('#item_1_img_link').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_quantity').should('have.length',1); 
});

});