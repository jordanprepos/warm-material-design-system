import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PhoneFrame } from '../components/PhoneFrame';
import { ProfileScreen } from './ProfileScreen';
import { sampleProfile } from '../sampleData';

const meta: Meta<typeof ProfileScreen> = {
  title: 'Screens/Profile',
  component: ProfileScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof ProfileScreen>;

function Interactive({ theme }: { theme: 'light' | 'dark' }) {
  const [dark, setDark] = useState(theme === 'dark');
  return (
    <PhoneFrame theme={dark ? 'dark' : 'light'}>
      <ProfileScreen profile={sampleProfile} darkTheme={dark} onDarkThemeChange={setDark} />
    </PhoneFrame>
  );
}

export const Light: Story = { render: () => <Interactive theme="light" /> };
export const Dark: Story = { render: () => <Interactive theme="dark" /> };
