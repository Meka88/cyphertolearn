// type definitions for Cypress object "cy"
/// <reference types="cypress" />;

describe("Test mouse actions via WebdriverUni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Scroll element into view", () => {});
  it("Drag and drop draggable element", () => {
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("Double click on element", () => {
    cy.get("#double-click").dblclick();
  });
  it("Clicking and holding left mouse button on element", () => {
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
