import { DemoAlertPage } from '../../pages/DemoAlert'

describe('DEMO ALERT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/alerts`)
    })
    it('Click Button to see alert', () => {

    })
})