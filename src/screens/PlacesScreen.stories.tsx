import type { Meta, StoryObj } from '@storybook/react';
import { PhoneFrame } from '../components/PhoneFrame';
import { PlacesScreen } from './PlacesScreen';
import { sampleLocationStats } from '../sampleData';

const meta: Meta<typeof PlacesScreen> = {
  title: 'Screens/Places',
  component: PlacesScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof PlacesScreen>;

export const Light: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <PlacesScreen cafeCount={11} cityCount={4} locationStats={sampleLocationStats} />
    </PhoneFrame>
  )
};

export const Dark: Story = {
  render: () => (
    <PhoneFrame theme="dark">
      <PlacesScreen cafeCount={11} cityCount={4} locationStats={sampleLocationStats} />
    </PhoneFrame>
  )
};
