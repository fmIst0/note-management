describe('Notes App', () => {
    beforeEach(() => {
        // Assuming the backend server is running
        cy.visit('http://localhost:3000'); // Change to your frontend URL
    });

    it('should display the header', () => {
        cy.get('header').should('exist');
        cy.get('header h1').contains('Notes');
    });

    it('should change language to Ukrainian', () => {
        cy.get('header .language-buttons button').contains('UA').click();
        cy.get('header h1').contains('Нотатки');
    });

    it('should change language to French', () => {
        cy.get('header .language-buttons button').contains('FR').click();
        cy.get('header h1').contains('Remarques');
    });

    it('should create a new note', () => {
        cy.get('header .btn-primary').contains('Add New Note').click();
        cy.url().should('include', '/create');

        cy.get('input[placeholder="Title"]').type('Test Note');
        cy.get('textarea[placeholder="Content"]').type('This is a test note.');
        cy.get('button[type="submit"]').contains('Add Note').click();

        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('.note-list .note-item').should('contain', 'Test Note');
    });

    it('should view the created note', () => {
        cy.get('.note-list .note-item').contains('Test Note').parent().find('.btn-success').click();
        cy.url().should('include', '/notes');
        cy.get('.note-detail h2').contains('Test Note');
        cy.get('.note-detail .note-content').contains('This is a test note.');
    });

    it('should update the note', () => {
        cy.get('.note-list .note-item').contains('Test Note').parent().find('.btn-info').click();
        cy.url().should('include', '/update');

        cy.get('input[placeholder="Title"]').clear().type('Updated Test Note');
        cy.get('textarea[placeholder="Content"]').clear().type('This is an updated test note.');
        cy.get('button[type="submit"]').contains('Update Note').click();

        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('.note-list .note-item').should('contain', 'Updated Test Note');
    });

    it('should view the updated note', () => {
        cy.get('.note-list .note-item').contains('Updated Test Note').parent().find('.btn-success').click();
        cy.url().should('include', '/notes');
        cy.get('.note-detail h2').contains('Updated Test Note');
        cy.get('.note-detail .note-content').contains('This is an updated test note.');
    });

    it('should delete the note', () => {
        cy.get('.note-list .note-item').contains('Updated Test Note').parent().find('.btn-danger').click();
        cy.get('.note-list .note-item').should('not.contain', 'Updated Test Note');
    });
});
