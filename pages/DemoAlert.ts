class DemoAlert {
  private buttonSelectorAlert: string = "#alertButton";
  private buttonSelectorTimer: string = "#timerAlertButton";
  private buttonSelectorConfirm: string = "#confirmButton";
  private buttonSelectorPrompt: string = '';
  
  private resultConfirmSelector: string = "#confirmResult";
  private resultSelectorPrompt: string = '';

  private textButton: string = "Click me";
  private textAlert: string = "You clicked a button";
  private textAlertTimer: string = "This alert appeared after 5 seconds";
  private textAlertConfirm: string = "Do you confirm action?";
  private textPrompt: string = 'Please enter your name';

  private resultTextConfirmOk: string = "You selected Ok";
  private resultTextConfirmCancel: string = "You selected Cancel";
  //private resultTextPrompt: string = ''


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
  confirmButtonOk() {
    cy.contains(this.buttonSelectorConfirm, this.textButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal(this.textAlertConfirm);
      cy.on("window:confirm", () => true);
      cy.get(this.resultConfirmSelector).should(
        "have.text",
        this.resultTextConfirmOk
      );
    });
  }
  confirmButtonCancel() {
    cy.contains(this.buttonSelectorConfirm, this.textButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal(this.textAlertConfirm);
      cy.on("window:confirm", () => false);
      cy.get(this.resultConfirmSelector).should(
        "have.text",
        this.resultTextConfirmCancel
      );
    })
  }
  promptButtonOk(){
    const text = "Hello World!";
       cy.window().then($win => {
         cy.stub($win, "prompt").returns(text); // i'm waiting for
         cy.contains(this.buttonSelectorPrompt, this.textPrompt).click();
       });
       cy.get(this.resultSelectorPrompt).should("include.text", text);
  }
  promptButtonCancel(){
    const text = "Hello World!";
       cy.window().then($win => {
         cy.stub($win, "prompt").returns(text);
         //cy.contains(this.buttonSelectorPrompt, this.textPrompt).click();
       });
       cy.get(this.resultSelectorPrompt).should("include.text", text);
  }
}

export const DemoAlertPage = new DemoAlert();
