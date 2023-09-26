describe('Navigation to Articles Page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles');
    });
  });

  it('and articles successfully downloads', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
