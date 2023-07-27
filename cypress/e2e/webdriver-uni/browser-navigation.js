// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Validate WebdriverUni homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.reload();
    //cy.reload(true); // reload without using cache
    cy.url().should("include", "http://www.webdriveruniversity.com/");
    cy.go("forward");
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Login-Portal");
    cy.go("back");

    cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "To-Do-List");
    cy.go("back");
  });
});
