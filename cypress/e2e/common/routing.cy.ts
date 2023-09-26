describe('Routing', () => {
  describe('User is not auth', () => {
    it('Navigation to the main page', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Navigating leads to the profile page', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Navigation to a non-existing page', () => {
      cy.visit('/faldskjfa');
      cy.getByTestId('NotFoundPage').should('exist');
    });
  });

  describe('User is auth', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Navigating leads to the profile page', () => {
      cy.visit('/profile/5');
      cy.getByTestId('ProfilePage').should('exist');
    });
    it('Navigating leads to the articles page', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlesPage').should('exist');
    });
  });
});
