import type { Meta, StoryObj } from '@storybook/react';
import { PhoneFrame } from '../components/PhoneFrame';
import { ShortlistScreen } from './ShortlistScreen';
import { sampleSuggestions } from '../sampleData';

const meta: Meta<typeof ShortlistScreen> = {
  title: 'Screens/Shortlist',
  component: ShortlistScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof ShortlistScreen>;

export const Light: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <ShortlistScreen suggestions={sampleSuggestions} />
    </PhoneFrame>
  )
};

export const Dark: Story = {
  render: () => (
    <PhoneFrame theme="dark">
      <ShortlistScreen suggestions={sampleSuggestions} />
    </PhoneFrame>
  )
};

export const Loading: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <ShortlistScreen state="loading" suggestions={[]} />
    </PhoneFrame>
  )
};

export const ErrorState: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <ShortlistScreen state="error" suggestions={[]} />
    </PhoneFrame>
  )
};
