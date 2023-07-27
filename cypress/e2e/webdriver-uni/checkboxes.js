// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Verify checkboxes  via WebdriverUni", () => {
  beforeEach(() => {
    cy.navigateTo_webdriverUni_Checkbox_Page();
  });
  it("Validate and check checkbox", () => {
    //cy.get("#checkboxes>:nth-child(1)>input").check();
    //cy.get("#checkboxes>:nth-child(1)>input").check().should("be.checked");
    cy.get("#checkboxes>:nth-child(1)>input").as("option-1");
    //cy.get("@option-1").check();
    cy.get("@option-1").check().should("be.checked");
  });
  it("Uncheck and validate checkbox", () => {
    //cy.get(":nth-child(5) > input").uncheck();
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });
  it("Check multiple checkboxes ", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
