describe('VISIBLE BUTTON', () => {
   it('Wait for alert to be present', () => {
      //Visit url
      //Find button 'Trigger'
      cy.visit(Cypress.env('homeWork'));
      
   }); 

   it('Wait for element to be visible', () => {
       //Visit url
       //Find button 'Trigger'
       //Assert button
       //Click button
       //Assert button 'Click Me' is enabled
       // Assert color's button 'Click Me' is red
       // Assert text on the button 'Click Me'
       //Click button 'Click Me'
       //Contains is 'I just removed my invisibility cloak!!'
       cy.visit(Cypress.env('homeWork'));
       cy.get('#visibility_trigger').should('be.visible').and('exist').click();
       cy.get('#visibility_target').should('be.enabled')
       .should('have.css', 'background-color', 'rgb(255, 0, 57)')
       .should('have.text', 'Click Me')
       .click();
       cy.contains('.popover-body','I just removed my invisibility cloak!!')
    });

    it('Wait for element to be Invisible', () => {
        //Visit url
        //Find button 'Trigger'
        //Assert button
        //Click button
        // Assert text 'Thank God that spinner is gone!' instead of the spinner
        cy.visit(Cypress.env('homeWork'));
        cy.get('#invisibility_trigger').should('be.visible').and('exist').click();
        cy.get('#spinner_gone').should('have.text', 'Thank God that spinner is gone!')
     });

     it('Wait for element to be enabled', () => {
        //Visit url
        //Find disabled button, color's button has to be red, text'Disabled Button'
        //Find button 'Trigger'
        //Assert button 'Trigger'
        //Click button 'Trigger'
        //Find enabled button, color's button has to be green, text'Enabled Button'
        //Contains text 'See, you just clicked me!!'
        cy.visit(Cypress.env('homeWork'));
        cy.get('#enabled_target').should('be.disabled')
        .should('have.css', 'background-color', 'rgb(255, 0, 57)')
        cy.contains('#enabled_target','Disabled Button');
        cy.get('#enabled_trigger').should('be.visible').and('exist').click();
        cy.get('#enabled_target').should('be.enabled')
        .should('have.class', 'btn btn-success')
        .should('have.css', 'background-color', 'rgb(63, 182, 24)')
        .should('have.text', 'Enabled Button')
        .click();
        cy.contains('.popover-body', 'See, you just clicked me!!')
     });  
     
     it('Wait for Page Title to change', () => {
      //Visit url
      //Find title, has to be text 'Wait Conditions'
      //Find button 'Trigger'
      //Assert button 'Trigger'
      //Click button 'Trigger'
      //Title has to be change on the new text 'My New Title!'
        cy.visit(Cypress.env('homeWork'));
        cy.get('title').should('have.text', 'Wait Conditions');
        cy.get('#page_title_trigger').should('be.visible').and('exist').click();
        cy.get('title').should('have.text', 'My New Title!')
     });

     it('Wait for text/value to have specific values', () => {
      //Visit url
      //Find the textbox, has to be a text in the plaseholder 'Creator of C'
      //Find a spinner
      //Find the button 'Trigger'
      //Assert the button 'Trigger'
      //Click the button 'Trigger'
      //Button has to be change with the text 'Submit'
      //Assert the textbox, has to be change on the text 'Dennis Ritchie'
        cy.visit(Cypress.env('homeWork'));
        cy.get('#wait_for_value').should('have.attr', 'placeholder', 'Creator of C');
        cy.get('#wait_for_text').should('be.enabled');
        cy.get('span.spinner-grow.spinner-grow-sm').should('be.visible');
        cy.get('#text_value_trigger').should('be.visible').and('exist').click();
        cy.get('#wait_for_text').should('be.visible').should('have.text', 'Submit')
        .should('have.css', 'background-color', 'rgb(63, 182, 24)');
        cy.get('#wait_for_value').should('have.value', 'Dennis Ritchie');
     });
     it('Wait for frame to be available and then switch to it', () => {
      //Visit url
      //Find the button 'Trigger'
      //Assert the button 'Trigger'
      //Click the button 'Trigger'
      //Assert frame
      // Find the button 'Inner Button', expect the text on the button 'Inner Button, color
      // Click the button 'Inner Button'
      //Button has to be change the text 'Clicked' and color
        cy.visit(Cypress.env('homeWork'));
        cy.get('#wait_for_frame').should('be.visible').and('exist').click();
        cy.get('#frame').should('be.visible')
        //cy.get('#inner_button').should('have.text', 'Inner Button')
        //.should('have.css', 'background-color', 'rgb(39, 128, 227)')
       // .click();
        //cy.get('#inner_button').should('have.text', 'Clicked')
        //.should('have.css', 'background-color', 'rgb(55, 58, 60)');
     });
});
