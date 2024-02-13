class DemoAlert {
  private buttonSelectorAlert: string = "#alertButton";
  private textButton: string = "Click me";
  private textAlert: string = "You clicked a button";

  alertButton() {
    cy.contains(this.buttonSelectorAlert, this.textButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal(this.textAlert);
    });
  }
}

export const DemoAlertPage = new DemoAlert();
