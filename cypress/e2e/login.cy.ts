import {LoginPage} from "../../pages/Login";

describe('Login', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });

  it("login", () => {
    cy.get("#userName").type(process.env.EMAIL);
    cy.get("#password").type(process.env.PASSWORD);
    cy.get("#login").click();
    //cy.contains('button', 'Login').click()
    cy.contains("Log out");
  });

  it("login with PageObject", () => {
    LoginPage.submitButtonLogin();
    cy.contains("Log out");
  });
});
