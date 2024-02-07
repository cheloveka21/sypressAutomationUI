class localCodingLogin {
  email: string = "#normal_login_email";
  password: string = "#normal_login_password";
  loginButton: string = 'button[type="submit"]';

  submitButtonLogin(email: string, password: string): void {
    cy.get(this.email).type(email);
    cy.get(this.password).type(password, {log:false});
    cy.get(this.loginButton).click();
  }
}

export const localCodingLoginPage = new localCodingLogin();
