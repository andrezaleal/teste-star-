describe.only('CT03 - Editar Perfil', () => {
    function shoulHaveInUrl(str) {
        cy.url().should('contain', str);
    }
    beforeEach(function () {
        cy.visit('https://www.starplus.com/pt-br/login');
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');
    });

    it('Deverá selecionar a opção editar perfil corretamente', function () {
        cy.get('[data-testid="edit-profiles-button"]').click();
        shoulHaveInUrl('edit-profiles');
    });

    it('Devevá alterar a foto de perfil com sucesso', function () {
        cy.get('[data-testid="edit-profiles-button"]').click();
        cy.get('[data-testid="profile-avatar-2"] > .sc-qrIAp').click();
        cy.get('.sc-qrIAp').click();
        cy.get('[data-testid="Marge Simpson"]').click();
        cy.contains('Atualizado').should('be.visible');
    });

    it('Devevá alterar o nome de perfil com sucesso', function () {
        cy.get('[data-testid="edit-profiles-button"]').click();
        cy.get('[data-testid="profile-avatar-2"] > .sc-qrIAp').click();
        cy.get('#editProfile').clear();
        cy.get('#editProfile').type('deza');
        cy.get('[data-testid="edit-profile-done"]').click();
        cy.contains('Atualizado').should('be.visible');
    });

    it('Deverá exibir mensagem de erro devido ao tentar colocar um nome de perfil já existente', function () {
        cy.get('[data-testid="edit-profiles-button"]').click();
        cy.get('[data-testid="profile-avatar-2"] > .sc-qrIAp').click();
        cy.get('#editProfile').clear();
        cy.get('#editProfile').type('andreza');
        cy.get('[data-testid="edit-profile-done"]').click();
        cy.contains('Esse nome de perfil já está em uso. Digite outro.').should('be.visible');
    });

    it('Deverá exibir uma mensagem de erro ao tentar preencher o campo com um nome vazio', function () {
        cy.get('[data-testid="edit-profiles-button"]').click();
        cy.get('[data-testid="profile-avatar-2"] > .sc-qrIAp').click();
        cy.get('#editProfile').clear();
        cy.get('[data-testid="edit-profile-done"]').click();
        cy.contains('Digite o nome do perfil.').should('be.visible');
    });


    it('Deverá finalizar alterações mesmo sem nenhuma edição nova', function () {
        cy.get('[data-testid="edit-profiles-button"]').click();
        cy.get('[data-testid="edit-profiles-done"').click();
        shoulHaveInUrl('select-profile');
    });

})
