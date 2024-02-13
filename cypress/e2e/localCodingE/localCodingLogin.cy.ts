import {localCodingLoginPage} from '../../../pages/localCodingPages/LocalCoding'

describe('LOGIN', () => {

    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
            cy.visit(`${Cypress.env("stage")}/user/login`)
             localCodingLoginPage.submitButtonLogin(process.env.EMAIL1, process.env.PASSWORD1)
        })
    })

    it('loginPage', () => {
        cy.visit(`${Cypress.env("stage")}/course`)
    });
});