describe('CT02 - Criar Perfil', () => {
    function shoulHaveInUrl(str) {
        cy.url().should('contain', str);
    }
    beforeEach(function () {
        cy.visit('https://www.starplus.com/pt-br/login');
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');
    });

    it('Deverá criar perfil com sucesso', function () {
        cy.get('.sc-fHxwqH').click();
        cy.get('[data-testid="Lisa Simpson"]').click();
        cy.get('#addProfile').type('deyse{enter}');
        shoulHaveInUrl('select-profile');
    });

    it('Deverá exibir mensagem de erro ao tentar criar perfil sem nome', function () {
        cy.get('.sc-fHxwqH').click();
        cy.get('[data-testid="Marge Simpson"]').click();
        cy.get('#addProfile').type('{enter}');
        cy.contains('Digite o nome do perfil.').should('be.visible');
    });

    it('Deverá exibir mensagem de erro ao tentar criar perfil com mesmo nome de outro usuário já existente', function () {
        cy.get('.sc-fHxwqH').click();
        cy.get('[data-testid="Marge Simpson"]').click();
        cy.get('#addProfile').type('deyse{enter}');
        cy.contains('Esse nome de perfil já está em uso. Digite outro.').should('be.visible');

    });





})
