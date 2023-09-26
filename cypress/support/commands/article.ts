import { Article } from '../../../src/entity/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'Node.js',
  img: 'https://i.ytimg.com/vi/umVoV4ak0HA/maxresdefault.jpg',
  views: 11022,
  createdAt: '25.09.2023',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) =>
  cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: { Authorization: 'auth' },
      body: article ?? defaultArticle,
    })
    .then((res) => res.body);

export const removeArticle = (articleId: string) =>
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'auth' },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
