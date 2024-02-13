class IFrameApp {
  private iFrameId: string = "#mce_0_ifr";
  private textFirst: string = "Hello World!";
  private textSecond: string = "Hello Cypres";

  getIframeApp() {
    cy.frameLoaded(this.iFrameId);
    cy.iframe(this.iFrameId).then((iframeApp) => {
      cy.wrap(iframeApp).type("{selectAll}{del}").type(this.textFirst);
      cy.wrap(iframeApp).clear().type(this.textSecond);
    });
  }
  visit() {
    cy.visit(`${Cypress.env("herokuapp")}/iframe`);
  }
}

export const IFrameAppPage = new IFrameApp();
