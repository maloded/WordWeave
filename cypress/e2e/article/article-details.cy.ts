let currentArticleId = '';
describe('User navigate to Article-Details Page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it('and see article content', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('and see recommendation list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('and leave comment', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    // cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('and rate article', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
