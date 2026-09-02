import type { Meta, StoryObj } from '@storybook/react';
import { PhoneFrame } from '../components/PhoneFrame';
import { StatsScreen } from './StatsScreen';
import { sampleMonths, sampleTopCafes } from '../sampleData';

const meta: Meta<typeof StatsScreen> = {
  title: 'Screens/Stats',
  component: StatsScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof StatsScreen>;

const patternNote =
  'You log twice as often on Saturdays, and almost always order something with gula aren. Manual brews get your highest ratings.';

export const Light: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <StatsScreen
        dateRangeLabel="Jan – Jul 2026"
        visitsLogged={24}
        cafeCount={11}
        avgRating="4.3"
        months={sampleMonths}
        topCafes={sampleTopCafes}
        patternNote={patternNote}
      />
    </PhoneFrame>
  )
};

export const Dark: Story = {
  render: () => (
    <PhoneFrame theme="dark">
      <StatsScreen
        dateRangeLabel="Jan – Jul 2026"
        visitsLogged={24}
        cafeCount={11}
        avgRating="4.3"
        months={sampleMonths}
        topCafes={sampleTopCafes}
        patternNote={patternNote}
      />
    </PhoneFrame>
  )
};
