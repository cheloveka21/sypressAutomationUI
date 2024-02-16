class DemoAlert {
  private buttonSelectorAlert: string = "#alertButton";
  private buttonSelectorTimer: string = "#timerAlertButton";
  private buttonSelectorConfirm: string = "#confirmButton";
  private resultConfirmSelector: string = "#confirmResult";

  private textButton: string = "Click me";
  private textAlert: string = "You clicked a button";
  private textAlertTimer: string = "This alert appeared after 5 seconds";
  private textAlertConfirm: string = "Do you confirm action?";
  private resultTextConfirm: string = "You selected Ok";

  alertButton() {
    cy.contains(this.buttonSelectorAlert, this.textButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal(this.textAlert);
    });
  }
  timerAlertButton() {
    cy.contains(this.buttonSelectorTimer, this.textButton).click();
    cy.wait(5000);
    cy.on("window:alert", (text) => {
      expect(text).to.equal(this.textAlertTimer);
    });
  }
  confirmButton() {
    cy.contains(this.buttonSelectorConfirm, this.textButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal(this.textAlertConfirm);
      cy.on("window:confirm", () => true);
      cy.get(this.resultConfirmSelector).should(
        "have.text",
        this.resultTextConfirm
      );
    });
  }
}

export const DemoAlertPage = new DemoAlert();
