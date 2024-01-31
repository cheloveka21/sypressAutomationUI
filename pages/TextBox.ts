class TextBox {
    userName: string = '#userName';
    userEmail: string = '#userEmail';
    currentAddress: string = '#currentAddress';
    permanentAddress: string = '#permanentAddress';
    textBoxButton: string = '#submit'
  
    submitButtonTextBox() {
      cy.get(this.userName).type('Anastasiia Lysenko');
      cy.get(this.userEmail).type('an_lys@gmail.com');
      cy.get(this.currentAddress).type('1904 Harris Ave.');
      cy.get(this.permanentAddress).type('1305 1st Street');
      cy.get(this.textBoxButton).click();
    }
  }
  
  export const TextBoxPage = new TextBox();