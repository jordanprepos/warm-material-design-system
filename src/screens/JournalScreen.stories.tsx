import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PhoneFrame } from '../components/PhoneFrame';
import { JournalScreen, type JournalSort } from './JournalScreen';
import { sampleVisits } from '../sampleData';

const meta: Meta<typeof JournalScreen> = {
  title: 'Screens/Journal',
  component: JournalScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof JournalScreen>;

function Interactive({ theme }: { theme: 'light' | 'dark' }) {
  const [sort, setSort] = useState<JournalSort>('recent');
  const [dismissed, setDismissed] = useState(false);
  return (
    <PhoneFrame theme={theme}>
      <JournalScreen
        name="Jordan"
        streakWeeks={6}
        visits={sampleVisits}
        sort={sort}
        onSortChange={setSort}
        insightDismissed={dismissed}
        onInsightDismiss={() => setDismissed(true)}
      />
    </PhoneFrame>
  );
}

export const Light: Story = { render: () => <Interactive theme="light" /> };
export const Dark: Story = { render: () => <Interactive theme="dark" /> };
