import {localCodingLoginPage} from '../../../pages/localCodingPages/LocalCoding'

describe('LOGIN', () => {

    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
            cy.visit(`${Cypress.env("stage")}/user/login`)
             localCodingLoginPage.submitButtonLogin(Cypress.env('email'), Cypress.env('password'))
        })
    })

    it('loginPage', () => {
        cy.visit(`${Cypress.env("stage")}/course`)
    });
});