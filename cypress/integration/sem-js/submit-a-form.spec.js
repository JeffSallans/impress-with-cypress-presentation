
describe('Submitting a form', () => {
    it('displays a confirmation message', () => {
        // https://on.cypress.io/submit

        // Navigate to the webpage
        cy.visit('https://example.cypress.io/commands/actions');
        
        // Select the coupon field
        cy.get('.action-form')
            .find('[type="text"]')
            .type('HALFOFF');
        // Submit the form
        cy.get('.action-form [type="submit"]')
            .click();
        // Check the result
        cy.get('.action-form + p')
            .should('contain', 'Your form has been submitted!');
    });

    it('displays a confirmation message (custom assertion)', () => {

        // Navigate to the webpage
        cy.visit('https://example.cypress.io/commands/actions');
        
        // Select the coupon field
        cy.get('.action-form')
            .find('[type="text"]')
            .type('HALFOFF');

        // Submit the form
        cy.get('.action-form [type="submit"]')
            .click();

        // Check the result
        cy.get('.action-form + p')
            .then((element) => {
                debugger;
                expect(element.innerHTML)
                    .to.equal('Your form has been submitted!');
            });
    });

    it('fills out checkboxes correctly', () => {
        // https://on.cypress.io/check

        // By default, .check() will check all
        // matching checkbox or radio elements in succession, one after another
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
            .check().should('be.checked')

        cy.get('.action-radios [type="radio"]').not('[disabled]')
            .check().should('be.checked')

        // .check() accepts a value argument
        cy.get('.action-radios [type="radio"]')
            .check('radio1').should('be.checked')

        // .check() accepts an array of values
        cy.get('.action-multiple-checkboxes [type="checkbox"]')
            .check(['checkbox1', 'checkbox2']).should('be.checked')

        // Ignore error checking prior to checking
        cy.get('.action-checkboxes [disabled]')
            .check({ force: true }).should('be.checked')

        cy.get('.action-radios [type="radio"]')
            .check('radio3', { force: true }).should('be.checked')
        })
});