import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from 'shared/ui/Code/Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  args: {
    text: 'export default {\n'
      + '    title: \'shared/Code\',\n'
      + '    component: Code,\n'
      + '    argTypes: {\n'
      + '        backgroundColor: { control: \'color\' },\n'
      + '    },\n'
      + '} as ComponentMeta<typeof Code>;\n'
      + '\n'
      + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
      + '\n'
      + 'export const Normal = Template.bind({});',
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

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
