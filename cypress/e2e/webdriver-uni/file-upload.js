// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Test File Upload via webdriveruni", () => {
  it("Upload file ...", () => {
    cy.visit("/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFile")
      .selectFile("cypress/fixtures/laptop.png")
      .get("#submit-button")
      .click();
  });
  it("Upload No file ...", () => {
    cy.visit("/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#submit-button").click();
  });
});
