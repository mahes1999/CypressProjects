describe('Create a Stack Template', () => {
    it('should create a stack template', () => {
        cy.viewport(950, 800)
        cy.visit('https://dev-team.lumati.com/stack-templates/TKHCGIZ8Tb0IIPCX1sqz');
        cy.wait(2000)
        cy.get('.no-border > .ios').click();

        /* ==== Generated with Cypress Studio ==== */
        // cy.visit('https://dev-team.lumati.com/stack-templates/TKHCGIZ8Tb0IIPCX1sqz\'');
        // cy.get(':nth-child(3) > :nth-child(4) > .item-has-start-slot > .sc-ion-label-ios-h').click();
        // cy.get('.list-ios > :nth-child(1) > .sc-ion-label-ios-h > .sc-ion-label-ios').click();
        // cy.get('div.ng-select-container').clear('b');
        cy.get('.ng-select-container').click();
        cy.get('.ng-select-container').type('Bottle');

        cy.get('.ng-option-label > .d-flex > .ion-text-wrap').click();
        /* ==== End Cypress Studio ==== */

        /* ==== Generated with Cypress Studio ==== */

        // cy.get('#dlYEIgDCAdFuAIgYeiLZ > .ng-select-container > .ng-value-container > .ng-input > input').click()

        cy.get(':nth-child(1) > :nth-child(3) > app-stack-item-pv > .stack-item-container > .no-icon > .input-wrapper > .native-wrapper').click();
        cy.get('#ion-input-7').click();
        cy.get('#ion-input-3').clear('0');
        cy.get('#ion-input-3').type('01');
        cy.get('#ion-input-3').clear('1');
        cy.get('#ion-input-3').type('1');
        cy.get(':nth-child(1) > :nth-child(3) > app-stack-item-pv > .stack-item-container > .no-icon > .input-wrapper > .native-wrapper').click();
        cy.get('#ion-input-7').clear('1');
        cy.get('#ion-input-7').type('150');
        cy.get('#ion-input-8').clear();
        cy.get('#ion-input-8').type('150');
        cy.get('#ion-input-8').click();
        // cy.get(':nth-child(1) > :nth-child(5) > app-stack-item-pv > .stack-item-container > .no-icon > .input-wrapper > .input-outline-container').click();
        cy.get('#ion-input-9').clear('1');
        cy.get('#ion-input-9').type('150');
        cy.get('#ion-input-11').clear('1');
        cy.get('#ion-input-11').type('150');
        cy.get('#ion-input-13').clear();
        cy.get('#ion-input-13').type('150');
        // cy.get(':nth-child(1) > :nth-child(10) > .d-flex > .h-83-px > .textarea-wrapper > .textarea-outline-container').click();
        cy.get('#ion-textarea-1').click();
        cy.get(':nth-child(1) > :nth-child(10) > .d-flex > .ion-no-margin > .material-symbols-outlined').click();
        cy.get('#ion-overlay-3').click();
        cy.get('#ion-textarea-6').type('40 PPM Nano-Pure, Re-Structured, Hyper-Oxygenated, pH Balanced');
        cy.get('#ion-overlay-3').click();

        cy.get('.button-solid').click();
        /* ==== End Cypress Studio ==== */
    });
});