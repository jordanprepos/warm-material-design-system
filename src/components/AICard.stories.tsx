import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { AICard } from './AICard';

const meta: Meta<typeof AICard> = {
  title: 'Components/AICard',
  component: AICard,
  decorators: [
    (Story) => (
      <ThemeProvider style={{ padding: 24, width: 350 }}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof AICard>;

export const JournalInsight: Story = {
  args: {
    variant: 'primary',
    eyebrow: 'Journal insight',
    decorativeCircle: 'top-right',
    children: (
      <>
        You rate cafes with outlets and low noise <span style={{ color: 'var(--cj-amber)' }}>0.8 stars higher</span>. Three
        near Kemang match — want a shortlist?
      </>
    )
  }
};

export const PatternSpotted: Story = {
  args: {
    variant: 'soft',
    eyebrow: 'Pattern spotted',
    children:
      'You log twice as often on Saturdays, and almost always order something with gula aren. Manual brews get your highest ratings.'
  }
};
