class IFrameHome {
  private iframe1Selector: string = "#frame1";
  private iframe2Selector: string = "#frame2";
  private iframe3Selector: string = "#frame3";
  private title3Selector: string = ".navbar-brand";
  private button1Selector: string = "#click_me_1";
  private button2Selector: string = "#click_me_2";
  private clicked: string = "Clicked";
  private buttonText1: string = "Click Me 1";
  private buttonText2: string = "Click Me 2";
  private frame3Text: string = "Frame3 (ID=frame3)";
  getIframe1() {
    cy.get(this.iframe1Selector).then((iFrame1) => {
      const body1 = iFrame1.contents().find(this.button1Selector);
      cy.wrap(body1).should("have.text", this.buttonText1).click();
      cy.wrap(body1).should("have.text", this.clicked);
    });
  }
  getIframe2() {
    cy.get(this.iframe1Selector).then((iFrame1) => {
      const Frame1 = iFrame1.contents();
      cy.wrap(Frame1)
        .find(this.iframe2Selector)
        .then((iFrame2) => {
          const body2 = iFrame2.contents().find(this.button2Selector);
          cy.wrap(body2).should("have.text", this.buttonText2).click();
          cy.wrap(body2).should("have.text", this.clicked);
        });
    });
  }
  getIframe3() {
    cy.get(this.iframe1Selector).then((iFrame1) => {
      const Frame1 = iFrame1.contents();
      cy.wrap(Frame1)
        .find(this.iframe3Selector)
        .then((iFrame3) => {
          const FrameTitle3 = iFrame3.contents().find(this.title3Selector);
          cy.wrap(FrameTitle3).should("have.text", this.frame3Text);
        });
    });
  }
  visit() {
    cy.visit(`${Cypress.env("homeWorkiframe")}/frames.html`);
  }
}

export const IFrameHomePage = new IFrameHome();
