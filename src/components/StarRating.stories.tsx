import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from '../ThemeProvider';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  decorators: [
    (Story) => (
      <ThemeProvider style={{ padding: 24 }}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof StarRating>;

export const Display: Story = { args: { value: 4.5, size: 18 } };

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(4);
    return <StarRating value={value} size={38} gap={10} interactive onChange={setValue} />;
  }
};
