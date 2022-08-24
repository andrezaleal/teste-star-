describe('CT07 - Excluir Perfil', () => {
    function shoulHaveInUrl(str){
      cy.url().should('contain', str);
  }
    beforeEach(function(){
        cy.visit('https://www.starplus.com/pt-br/login');
        this.timeout(10000);
        cy.get('#email').type('andrezaleal12@gmail.com{enter}');
        cy.get('#password').type('andreza2016{enter}');
    });
  
    it('Deverá exibir um popup para confirmar a decisão de exclusão', function(){
        cy.get('[data-testid="edit-profiles-button"]').click();
        cy.get('[data-testid="profile-avatar-2"] > .sc-qrIAp').click();
        cy.get('[data-testid="delete-profile-button"]').click();
        cy.contains('O histórico do perfil, a Minha Lista e a atividade serão excluídos. Essa ação não pode ser desfeita.').should('be.visible');
    });

    it('Deverá excluir perfil com sucesso', function(){
        cy.get('[data-testid="edit-profiles-button"]').click();
        cy.get('[data-testid="profile-avatar-2"] > .sc-qrIAp').click();
        cy.get('[data-testid="delete-profile-button"]').click();
        cy.get('[data-testid="modal-primary-button"]').click(); 
        shoulHaveInUrl('edit-profiles');
    });
    })