import {TextBoxPage} from "../../pages/TextBox";
const name = 'Anastasiia Lysenko'
describe('textBox', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/text-box`);
  });

  it('textBox', () => {
    cy.get("#userName").type(name);
    cy.get("#userEmail").type("an_lys@gmail.com");
    cy.get("#currentAddress").type("1904 Harris Ave.");
    cy.get("#permanentAddress").type("1305 1st Street");
    cy.get("#submit").click();
    
  });

  it("textBox with PageObject", () => {
    TextBoxPage.submitButtonTextBox();
    cy.get("#name").should("have.text",`Name:${name}`);
    cy.get("#email").should("have.text", "Email:an_lys@gmail.com");
    cy.get("#currentAddress.mb-1").should("include.text", "Current Address :1904 Harris Ave.");
    cy.get("#permanentAddress.mb-1").should("include.text", "Permananet Address :1305 1st Street");
  });
});