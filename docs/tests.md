## 1. Regular Unit Tests with Jest

Regular unit tests are used to test individual units of code, such as functions or modules, in isolation. Jest is a popular JavaScript testing framework often used for this purpose.

Example:
Suppose you have a simple JavaScript function for adding two numbers:
```
// math.js
function add(a, b) {
  return a + b;
}
```
You can write a unit test for this function using Jest:
```
// math.test.js
const { add } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```
## 2. Component Tests with React Testing Library

Component tests are used to test React components by rendering them and asserting on their behavior and output. React Testing Library is a popular choice for testing React components.

Example:
Suppose you have a simple React component that displays a greeting message:

```
// Greeting.js
import React from 'react';

function Greeting({ name }) {
return <div>Hello, {name}!</div>;
}

export default Greeting;
```

You can write a component test for this component using React Testing Library:

```
import React from 'react';
import { render } from '@testing-library/react';
import Greeting from './Greeting';

test('renders a greeting message', () => {
const { getByText } = render(<\Greeting name="Alice" />);
const greetingElement = getByText('Hello, Alice!');
expect(greetingElement).toBeInTheDocument();
});
```

## 3. Screenshot Testing with Loki

Screenshot testing is a visual testing technique that captures screenshots of your application's components or pages and compares them to reference images to detect visual regressions. Loki is a tool that can be used for screenshot testing.

Example:
Suppose you have a web page you want to test for visual regressions. You can use Loki to capture and compare screenshots:

Install and configure Loki (assuming you already have Loki set up)
Capture a screenshot of your web page

```
loki capture -u http://example.com/my-page -o my-page-screenshot.png
```


Later, compare the screenshot to a reference image

```
 loki diff my-page-screenshot.png 
 ```


## 4. E2E Testing with Cypress

End-to-end (E2E) testing involves testing your application as a whole, simulating user interactions to ensure that different parts of your application work together correctly. Cypress is a powerful E2E testing framework.

Example:
Suppose you have a web application with a login feature. You can write an E2E test to automate the login process and assert that it works as expected using Cypress:

```
// cypress/integration/login.spec.js
describe('Login Test', () => {
  it('logs in successfully', () => {
    cy.visit('/login'); // Visit the login page
    cy.get('[data-testid="username"]').type('myusername'); // Type username
    cy.get('[data-testid="password"]').type('mypassword'); // Type password
    // Assert that login was successful by checking for a welcome message
cy.contains('Welcome, myusername').should('be.visible');
    cy.get('[data-testid="login-button"]').click(); // Click login button
  });
});
```



In this example, Cypress visits the login page, enters a username and password, and asserts that the welcome message appears after a successful login.

These are four common types of tests used in web development, each serving a different purpose and leveraging different tools or libraries for testing.
