describe('Create a Stack Template', () => {
    it('should create a stack template', () => {
      
      cy.visit('https://dev-team.lumati.com/stack-templates'); 
  
      // Upload the stack.pdf file
    //   cy.get('input[type="file"]').selectFile('path/to/stack.pdf'); 
  

    cy.get('.toolbar-title-default > .buttons-last-slot > .ios').click();

    cy.get('#ion-input-0').type('A_Test_Template');

    cy.get('.ng-arrow-wrapper').click();
    cy.contains('Testing').click();

    cy.get('#ion-textarea-0').type('Automation Testing for Stack Templates');

    cy.get('ion-nav > .ion-page > .header-ios > .toolbar-title-default > .buttons-last-slot').click();
    //   // Proceed with the template creation steps
    //   // Assuming there are buttons/elements with specific IDs or classes
    //   cy.get('#addProductButton').click(); // Example for adding a product
    //   cy.get('#addFormButton').click(); // Example for adding a form
  
    //   // Verify all products were added (you'll need to adapt this based on the UI)
    //   cy.get('.product-list').children().should('have.length', expectedProductsCount);
  
    //   // Verify all forms are correct (you'll need to adapt this based on the UI)
    //   cy.get('.form-list').children().should('have.length', expectedFormsCount); 
  
      // Verify instructions match (you'll need to implement logic to read and compare instructions)
      // This might involve using cy.readFile() to get the instructions from the PDF and then comparing them
    });
  });