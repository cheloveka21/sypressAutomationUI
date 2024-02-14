class IFrameHome {
    
  
    getIframeHomeWork() {
      
    }
    visit() {
      cy.visit(`${Cypress.env("homeWorkiframe")}/frames.html`);
    }
  }
  
  export const IFrameHomePage = new IFrameHome();
  