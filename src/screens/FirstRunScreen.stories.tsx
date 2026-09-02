import type { Meta, StoryObj } from '@storybook/react';
import { PhoneFrame } from '../components/PhoneFrame';
import { FirstRunScreen } from './FirstRunScreen';

const meta: Meta<typeof FirstRunScreen> = {
  title: 'Screens/First run',
  component: FirstRunScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof FirstRunScreen>;

export const Light: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <FirstRunScreen name="Jordan" onImportFromMaps={() => {}} />
    </PhoneFrame>
  )
};

export const Dark: Story = {
  render: () => (
    <PhoneFrame theme="dark">
      <FirstRunScreen name="Jordan" onImportFromMaps={() => {}} />
    </PhoneFrame>
  )
};
