import {LoginPage} from "../../pages/Login";

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });

  it.skip("login", () => {
    cy.get("#userName").type("test");
    cy.get("#password").type("Test1234*");
    cy.get("#login").click;
    //cy.contains('button', 'Login').click()
    cy.contains("Log out");
  });

  it("login with PageObject", () => {
    LoginPage.submitButtonLogin();
    cy.contains("Log out");
  });
});
