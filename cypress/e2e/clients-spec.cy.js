describe('Click Clients Button', () => {
  it('should click the Clients button', () => {
    cy.visit('dev-team.lumati.com/'); // Replace with actual URL if different

    // Assuming 'Clients' is a button or link
    cy.contains('Clients').click();

    cy.get('.searchbar-input').type('Mahesh')

    cy.wait(1000);

    cy.contains('John Wick').click();

    cy.get('.segment-button-after-checked').click();

    cy.wait(2000);

    // Add assertions to verify expected behavior after clicking
    // For example, if the URL changes, you can assert that
    // cy.url().should('include', '/clients'); 
  });
});