// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });
  it("Add specific product to the basket", () => {
    cy.selectProduct("Curls to straight Shampoo");
  });
  it("Add specific product to the basket1", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
  it("Add specific product to the basket2", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
