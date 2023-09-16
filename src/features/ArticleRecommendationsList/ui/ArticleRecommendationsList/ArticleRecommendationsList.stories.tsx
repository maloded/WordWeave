import type { Meta, StoryObj } from '@storybook/react';
import { type Article } from 'entity/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
  id: '1',
  img: 'https://miro.medium.com/v2/resize:fit:709/0*Eqqrv9zVpH99X726.png',
  createdAt: '',
  views: 123,
  user: { id: '1', username: 'asd' },
  blocks: [],
  type: [],
  title: 'test',
  subtitle: 'subtest',
};

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {},
};
