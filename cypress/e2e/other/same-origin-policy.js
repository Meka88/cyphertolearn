// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Cypress web security", () => {
  it("Validate visiting two different domains", () => {
    // add chromeWebSecurity: false, to cypress.config
    cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
  });
  it("Validate visiting two different domains via user actions", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
  it.only("Origin command", () => {
    // add experimentalOriginDependencies: true, to cypress.config
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    });
    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });

    // we can visit two domains with the same origin domain
    // cy.visit("http://www.webdriveruniversity.com/");
    // cy.visit("http://selectors.webdriveruniversity.com/");
  });
});
