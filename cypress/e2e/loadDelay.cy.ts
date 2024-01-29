describe('LOAD DELAY', () => {
    it('load dalay emulate failing', () => {
       cy.visit('/', {timeout: 0}); 
    });
    it('load dalay emulate', () => {
        cy.visit('/', {timeout: 2_000}); 
        cy.get('[href="/loaddelay"]').click();
        cy.contains('button', 'Button Appearing After Delay')
     });
});