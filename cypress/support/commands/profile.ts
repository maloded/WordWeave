export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: 'auth',
    },
    body: {
      id: '5',
      first: 'Test',
      lastname: 'Test',
      age: 22,
      currency: 'GRN',
      country: 'Ukraine',
      city: 'Dnipro',
      username: 'test',
      avatar: 'http://zornet.ru/_fr/90/1942736.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
