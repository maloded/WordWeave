let profileId = '';

describe('User navigate to his profile', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('and the profile successfully downloads', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test');
  });

  it('and edit it', () => {
    const newFirstname = 'newFirstname';
    const newLastname = 'newLastname';

    cy.updateProfile(newFirstname, newLastname);
    cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
  });
});
