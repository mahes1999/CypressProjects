describe('Send a Stack Template to a Client', () => {
    it('should send a stack template to a client', () => {
        // Navigate to the relevant page to send the stack template
        // Assuming the URL is '/stack-templates/{templateId}/send'
        cy.visit('https://dev-team.lumati.com/dashboard'); // Replace '123' with the actual template ID

        
        cy.wait(3000);
        cy.get(':nth-child(2) > .sc-ion-label-ios-h').click();

        cy.get('.searchbar-input').type('mahesh');
        
        // Select a client from the dropdown (assuming it's a select element)
        cy.wait(2000)
        cy.get('#modal-list > .item-has-start-slot').click(); // Replace 'Client Name' with the actual client name

        cy.get(':nth-child(7) > .ios').click();

        cy.contains('Done').click();

        cy.wait(2000);

        cy.get('[value="content"]').click();

        cy.get('.toolbar-title-default > .buttons-last-slot').click();




        // // Optional: Add a custom message
        // cy.get('#customMessage').type('Custom message for the client');

        // // Click the "Send" button
        // cy.get('#sendButton').click();

        // // Verify success message (if applicable)
        // cy.contains('Stack template sent successfully!');

        // Optionally, verify the client received the template (e.g., by checking their email)
        // This might involve mocking email sending or using a separate email testing tool
    });
});