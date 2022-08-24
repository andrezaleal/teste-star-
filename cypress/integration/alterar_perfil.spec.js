describe('CT04 - Alterar Perfil', () => {
    function shoulHaveInUrl(str) {
        cy.url().should('contain', str);
    }
    beforeEach(function () {
        cy.visit('https://www.starplus.com/pt-br/login');
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');
    });

    it('Deverá selecinar o perfil que deseja acessar com sucesso', function () {
        cy.get('[data-testid="profile-avatar-0"] > .sc-qrIAp').click();
        shoulHaveInUrl('home');
    });

    it('Deverá alterar o perfil acessado com sucesso', function () {
        cy.get('[data-testid="profile-avatar-0"] > .sc-qrIAp').click();
        cy.get('[data-testid="account-dropdown-list"]').trigger('mouseover');
        cy.get('[data-testid="dropdown-profile-1"]').click();
        cy.wait(2000);
        cy.get('[data-testid="dropdown-active-profile"] > .body-copy').contains('deza')

    });

})
