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

const promptContent = (
  <>
    Three cafes near Kemang with outlets and a low-noise profile — the pattern behind your{' '}
    <span style={{ color: 'var(--cj-amber)' }}>five highest-rated visits</span>.
  </>
);

export const Light: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <ShortlistScreen promptContent={promptContent} suggestions={sampleSuggestions} />
    </PhoneFrame>
  )
};

export const Dark: Story = {
  render: () => (
    <PhoneFrame theme="dark">
      <ShortlistScreen promptContent={promptContent} suggestions={sampleSuggestions} />
    </PhoneFrame>
  )
};

export const Loading: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <ShortlistScreen state="loading" promptContent={promptContent} suggestions={[]} />
    </PhoneFrame>
  )
};

export const ErrorState: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <ShortlistScreen state="error" promptContent={promptContent} suggestions={[]} />
    </PhoneFrame>
  )
};
