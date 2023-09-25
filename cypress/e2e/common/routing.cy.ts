import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
  describe('User is not auth', () => {
    it('Navigation to the main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Navigating leads to the profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Navigation to a non-existing page', () => {
      cy.visit('/faldskjfa');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('User is auth', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Navigating leads to the profile page', () => {
      cy.visit('/profile/5');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Navigating leads to the articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
