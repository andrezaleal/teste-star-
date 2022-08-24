describe('CT06 - Realizar Busca', () => {
    function shoulHaveInUrl(str) {
        cy.url().should('contain', str);
    }
    beforeEach(function () {
        cy.visit('https://www.starplus.com/pt-br/login');
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');
        cy.get('[data-testid="profile-avatar-0"] > .sc-qrIAp').click();
        shoulHaveInUrl('home');
    });

    it('Deverá selecionar a opção realizar pesquisa corretamente', function () {
        cy.get('[data-testid="navigation-item-1-PESQUISA"] > span > .sc-bRBYWo').click();
    });

    it('Devevá listar todos os titulos que possuem os palavras digitadas com sucesso', function () {
        cy.get('[data-testid="navigation-item-1-PESQUISA"] > span > .sc-bRBYWo').click();
        cy.get('#search-input').type('branca de neve{enter}');
        shoulHaveInUrl('search');
    });

    it('Devevá exibir uma mensagem informando que o titulo não foi encontrado', function () {
        cy.get('[data-testid="navigation-item-1-PESQUISA"] > span > .sc-bRBYWo').click();
        cy.get('#search-input').type('Melody{enter}');
        shoulHaveInUrl('search');
    });

    it('Devevá listar todos os titulos que possuem os numeros digitados', function () {
        cy.get('[data-testid="navigation-item-1-PESQUISA"] > span > .sc-bRBYWo').click();
        cy.get('#search-input').type('12{enter}');
        shoulHaveInUrl('search');
    });

    it('Devevá listar todos os titulos que possuir o caractere digitado', function () {
        cy.get('[data-testid="navigation-item-1-PESQUISA"] > span > .sc-bRBYWo').click();
        cy.get('#search-input').type('#{enter}');
        shoulHaveInUrl('search');
    });

    it('Devevá listar todos os titulos que possuir as palavras digitadas na categoria filmes e séries', { scrollBehavior: false }, function () {
        cy.get('[data-testid="navigation-item-1-PESQUISA"] > span > .sc-bRBYWo').click();
        cy.get('#search-input').type('Modern Family{enter}');
        cy.get('[data-gv2elementvalue="ge"]').click();
        shoulHaveInUrl('search');
    });

    it('Devevá listar todosos jogos do time digitado presentes na plataforms', { scrollBehavior: false }, function () {
        cy.get('[data-testid="navigation-item-1-PESQUISA"] > span > .sc-bRBYWo').click();
        cy.get('#search-input').type('São Paulo{enter}');
        cy.get('[data-gv2elementvalue="sports"]').click();
        shoulHaveInUrl('search');
    });

})
