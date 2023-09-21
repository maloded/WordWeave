import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';
import { Article } from '../../model/types/article';
import { ArticleBlockType, ArticleType } from '../../model/consts/article';

const article: Article = {
  id: '1',
  title: 'Javascrip Trends',
  subtitle: 'Top JS trends you should follow in 2023',
  img: 'https://makeanapplike.com/wp-content/uploads/2022/02/Node-JS-trends-2022.jpg',
  views: 1033,
  createdAt: '04.09.2023',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'http://zornet.ru/_fr/90/1942736.jpg',
  },
  type: [
    ArticleType.IT,
  ],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Hello, world!',
      paragraphs: [
        "The program traditionally called 'Hello, world!' is very simple. It outputs the phrase 'Hello, world!' or something similar using the capabilities of a certain language.",
        "JavaScript is a language in which programs can be executed in various environments. In our case, we are talking about browsers and the server platform Node.js. If you haven't written a single line of JS code so far and are reading this text in a browser on your desktop computer, it means you are just seconds away from your first JavaScript program.",
        "There are other ways to run JS code in a browser. For example, when it comes to using JavaScript programs conventionally, they are loaded into the browser to enable the functionality of web pages. Typically, code is organized in separate files with the .js extension, which are then linked to web pages. However, you can also include program code directly within the page's code. All of this is done using the <script> tag. When the browser detects such code, it executes it. You can find details about the script tag on the website w3school.com. In particular, let's look at an example demonstrating working with a web page using JavaScript, provided on this resource. You can run this example using the resource's capabilities (look for the 'Try it Yourself' button), but we will do it a bit differently. Specifically, we will create a new file in some text editor (for example, in VS Code or Notepad++) and name it hello.html. Then, add the following code to it:",
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Figure 1 - website screenshot',
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
  ],
};

const meta: Meta<typeof ArticleDetails> = {
  title: 'entity/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  args: {

  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
  args: {},
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
  args: {},
};

export const Green: Story = {
  decorators: [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
  args: {},
};

export const LightLoading: Story = {
  decorators: [StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  })],
  args: {},
};

export const DarkLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
  args: {},
};

export const GreenLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
  args: {},
};

export const Error: Story = {
  decorators: [StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  })],
  args: {},
};
