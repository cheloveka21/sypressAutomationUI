class IFrameHome {
  private iframe1: string = "#frame1";
  private body: string = "ifame";
  private click1Selector: string = "click_me_1";

  private textClick1Button: string = "Click Me 1";

  getIframeHomeWork() {
    cy.get(this.iframe1).then((iFrame1) => {
      const body = iFrame1.contents().find(this.body);
      cy.wrap(body).should("have.text", "Frame1 (ID=frame1)");
      cy.contains(this.click1Selector, this.textClick1Button).click();
    });
  }
  visit() {
    cy.visit(`${Cypress.env("homeWorkiframe")}/frames.html`);
  }
}

export const IFrameHomePage = new IFrameHome();
