/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", () => {
    let userDetails = [];
    let num = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i < userDetails.length; i++) {
          //cy.log(userDetails[i]);
          if (Number(userDetails[i])) {
            num += Number(userDetails[i]);
          }
        }
        cy.log("Found total age: " + num);
        expect(num).to.eq(322);
      });
  });
  it("Calculate and assert the age of given user based upon last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.eq("80");
          });
      }
    });
  });
});
