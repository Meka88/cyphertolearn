// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Test Datepicker via webdriveruni", () => {
  it("Select date from the datepicker", () => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();

    // let date = new Date();
    // date.setDate(date.getDate()); // current date\
    // cy.log(date.getDate());

    // let date1 = new Date();
    // date1.setDate(date.getDate() + 5);
    // cy.log(date1.getDate());

    let date = new Date();
    date.setDate(date.getDate() + 74);

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("default", { month: "long" });
    let futureDay = date.getDate();

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentdate) => {
          if (!currentdate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentdate) => {
              cy.get(".datepicker-dropdown")
                .find(".datepicker-switch")
                .first()
                .then((currentdate) => {
                  if (!currentdate.text().includes(futureMonth)) {
                    cy.get(".next").first().click();
                    selectMonthAndYear();
                  }
                });
            });
        });
    }

    function selectFutureDay() {
      cy.get("[class='day']").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
