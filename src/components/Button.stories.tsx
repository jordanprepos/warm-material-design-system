import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { Button } from './Button';
import { PlusIcon } from '../icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider style={{ padding: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: 'Log visit', icon: <PlusIcon size={20} /> } };
export const Amber: Story = { args: { variant: 'amber', children: 'Show me' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Refine' } };
export const AllSizes: Story = {
  render: () => (
    <>
      <Button size="sm" variant="outline">
        Refine
      </Button>
      <Button size="md">Save shortlist</Button>
      <Button size="lg">Save visit</Button>
    </>
  )
};
