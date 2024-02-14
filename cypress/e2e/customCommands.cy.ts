describe("Login", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("login", () => {
    cy.login("test", "Test1234*");
    cy.contains("Log out");
  });
});
