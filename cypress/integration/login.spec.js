///  <reference types="cypress" />

describe('CT01 - Efetuar Login', () => {

    function shoulHaveInUrl(str) {
        cy.url().should('contain', str);
    }

    beforeEach(function () {
        cy.visit('https://www.starplus.com/pt-br/login');
        
    });

    it('Deverá realizar login com sucesso',  function () {
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');
        shoulHaveInUrl('select-profile');
    });

    it('Deverá exibir mensagem de erro se tentar logar com senha incorreta', function () {
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2022{enter}');
        cy.contains('Senha incorreta. Digite novamente. Se o problema continuar, selecione "Esqueceu a senha?" e faça a redefinição (código de erro 14).').should('be.visible');

    });

    it('Deverá exibir mensagem de erro se tentar logar com usuário inexistente', function () {
        this.timeout(10000);
        cy.get('#email').type('testandoissoaqui@gmail.com{enter}');
        cy.contains('E-mail desconhecido. Verifique a ortografia.').should('be.visible');
    });

    it('Deverá exibir mensagem de erro se tentar logar sem digitar email', function () {
        this.timeout(10000);
        cy.get('#email').type('{enter}');
        cy.contains('Houve um problema na criação da conta. Volte a digitar seu e-mail e senha e tente novamente. Se o problema continuar, entre em contato com o Suporte do Star+ (código de erro 6).').should('be.visible');
    });

    it('Deverá exibir mensagem de erro se tentar logar sem digitar senha', function () {
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('{enter}');
        cy.contains('Digite a senha atual.').should('be.visible');

    });


})