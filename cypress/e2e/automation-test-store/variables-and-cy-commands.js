// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    // following will fail
    /*const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    makeupLink.click();
    skincareLink.click();*/

    // following will work cause of order of execution but it is not recommended
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // makeupLink.click();
    // const skincareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // skincareLink.click();

    // Recommented approach
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });
  it("Navigating makeup page and validating header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    // following code will likely to fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text);

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it.only("Validate properties of the Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    // JQuery approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      // Embedded commands(closures)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text()); // output text
        cy.log(fnText); // outputs element itself
      });
    });
  });
});
