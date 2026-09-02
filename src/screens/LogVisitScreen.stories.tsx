import type { Meta, StoryObj } from '@storybook/react';
import { PhoneFrame } from '../components/PhoneFrame';
import { LogVisitScreen } from './LogVisitScreen';

const meta: Meta<typeof LogVisitScreen> = {
  title: 'Screens/Log visit',
  component: LogVisitScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof LogVisitScreen>;

const initialDraft = { name: 'Tanamera Coffee', location: 'Thamrin, Jakarta', rating: 4, facilities: ['WiFi', 'Outlets', 'AC'] };

export const Light: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <LogVisitScreen initialDraft={initialDraft} />
    </PhoneFrame>
  )
};

export const Dark: Story = {
  render: () => (
    <PhoneFrame theme="dark">
      <LogVisitScreen initialDraft={initialDraft} />
    </PhoneFrame>
  )
};
