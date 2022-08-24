describe('CT08 - Efetuar Logout', () => {
    beforeEach(function () {
        cy.visit('https://www.starplus.com/pt-br/login');
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');

    });


    it('Deverá efetuar o logout com sucesso', function () {
        cy.get('[data-testid="profile-avatar-0"] > .sc-qrIAp').click();
        cy.get('[data-testid="account-dropdown-list"]').trigger('mouseover');
        cy.get('#dropdown-option_logout > a').click();
        cy.wait(2000);
        cy.contains('Séries, filmes e esportes que você adora.').should('be.visible');

    });


})
