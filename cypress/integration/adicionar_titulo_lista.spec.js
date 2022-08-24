describe('CT05 - Adicionar Titulo à Lista', () => {
    function shoulHaveInUrl(str) {
        cy.url().should('contain', str);
    }
    beforeEach(function () {
        cy.visit('https://www.starplus.com/pt-br/login');
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');
        cy.get('[data-testid="profile-avatar-2"] > .sc-qrIAp').click();
        shoulHaveInUrl('home');

    });

    it('Deverá selecionar corretamente o titulo que será adicionado a lista do usuário com sucesso', function () {
        cy.get('[data-testid="asset-wrapper-1-0"]').click();
    });

    it.only('Deverá adicionar o titulo a lista do usuário com sucesso',  { scrollBehavior: false }, function () {
        cy.get('[data-testid="asset-wrapper-1-0"]').click();                                                                         
        cy.get('.icon').click();
        cy.wait(2000);
        cy.get('[data-testid="navigation-item-2-MINHA LISTA"]').click();   
        cy.contains('Meus Filmes e Séries').should('be.visible');
    });


})
