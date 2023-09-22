# WordWeave

## Currently, the documentation is not fully completed,

## the complete documentation will be described by the end of the project.

## Running the Project

```
npm install - install dependencies
npm run start:dev или npm run start:dev:vite - run server + frontend project in dev mode
```

---

## Scripts

- `npm run start` - Launch the frontend project on webpack dev server
- `npm run start:vite` - Launch the frontend project on vite
- `npm run start:dev` - Launch the frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Launch the frontend project on vite + backend
- `npm run start:dev:server` - Launch the backend server
- `npm run build:prod` - Build in production mode
- `npm run build:dev` - Build in development mode (not minimized)
- `npm run lint:ts` - Check ts files with a linter
- `npm run lint:ts:fix` - Fix ts files with a linter
- `npm run lint:scss` - Check scss style files with a linter
- `npm run lint:scss:fix` - Fix scss style files with a linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests
- `npm run test:ui:json` - Generate a JSON report for screenshot tests
- `npm run test:ui:html` - Generate an HTML report for screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build Storybook
- `npm run g:slice` - Script for generating FSD slices

---

## Project Architecture

The project is written following the Feature Sliced Design methodology.

Link to documentation - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for handling translations. Translation files are stored in public/locales.

For a more comfortable experience, we recommend installing the WebStorm/VSCode plugin.

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project uses four types of tests:

1. Regular unit tests with Jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with Loki - `npm run test:ui`
4. E2E testing with Cypress - `npm run test:e2e`

More details about tests - [Testing Documentation](/docs/tests.md)

---

## Linting

The project uses ESLint to check TypeScript code and Stylelint to check style files.

Additionally, for strict control of key architectural principles, it uses its own ESLint plugin _eslint-plugin-ded-plugin_, which contains 3 rules:

1. path-checker - prohibits the use of absolute imports within the same module;
2. layer-imports - checks the correct usage of layers from the FSD perspective
   (for example, widgets cannot be used in features and entities);
3. public-api-imports - allows imports from other modules only from the public API. Has auto fix;

##### Running the linters

- `npm run lint:ts` - Check ts files with a linter
- `npm run lint:ts:fix` - Fix ts files with a linter
- `npm run lint:scss` - Check scss files with a style linter
- `npm run lint:scss:fix` - Fix scss files with a style linter

---

## Storybook

In the project, story cases are described for each component.
Server requests are mocked using the storybook-addon-mock.

The file with story cases is created next to the component with the extension .stories.tsx.

You can start Storybook with the following command:

- `npm run storybook`

Learn more about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Skeleton } from "./Skeleton";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Skeleton> = {
  title: "shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    width: "100%",
    height: 200,
  },
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};
```

---

## Project Configuration

For development, the project contains 2 configurations:

1. Webpack - ./config/build
2. Vite - vite.config.ts

Both build tools are adapted to the main features of the application.

All configuration is stored in /config:

- /config/babel - Babel
- /config/build - Webpack configuration
- /config/jest - Test environment configuration

Various scripts for refactoring, code simplification, report generation, and more can be found in the `scripts` folder.

---

## CI Pipeline

GitHub Actions configuration is located in /.github/workflows.
In the CI pipeline, the project is built, all types of tests are run, and the project is checked by linters.

### Data Handling

Data interaction is carried out using Redux Toolkit.
Whenever possible, reusable entities should be normalized using EntityAdapter.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts).

For asynchronous reducer loading (to avoid bundling them into the main bundle),
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

---

## Entities

- [Article](/src/entity/Article)
- [Comment](/src/entity/Comment)
- [Country](/src/entity/Country)
- [Currency](/src/entity/Currency)
- [Notification](/src/entity/Notification)
- [Profile](/src/entity/Profile)
- [Rating](/src/entity/Rating)
- [User](/src/entity/User)

## Features

- [AddCommentForm](/src/features/AddCommentForm)
- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
- [ArticlesSortSelector](/src/features/ArticlesSortSelector)
- [ArticleTypeTabs](/src/features/ArticleTypeTabs)
- [ArticleViewSelector](/src/features/ArticleViewSelector)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [NotificationButton](/src/features/NotificationButton)
- [LangSwitcher](/src/features/LangSwitcher)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
