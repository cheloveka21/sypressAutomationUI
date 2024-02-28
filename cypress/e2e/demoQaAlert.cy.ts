import { DemoAlertPage } from "../../pages/DemoAlert";

describe("DEMO ALERT", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/alerts`);
  });
  it("Click Button to see alert", () => {
    DemoAlertPage.alertButton();
  });
  it("Alert will appear after 5 seconds", () => {
    DemoAlertPage.timerAlertButton();
  });
  it("Confirm box will appear and OK", () => {
    DemoAlertPage.confirmButtonOk();
  });
  it("Confirm box will appear and Cancel", () => {
    DemoAlertPage.confirmButtonCancel();
  });
  it("Prompt box will appear and OK", () => {
    DemoAlertPage.promptButtonOk();
  });
});
