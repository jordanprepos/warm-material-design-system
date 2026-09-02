import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from '../ThemeProvider';
import { NavBar } from './NavBar';
import type { NavDestination } from '../types';

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  decorators: [
    (Story) => (
      <ThemeProvider style={{ width: 390 }}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof NavBar>;

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState<NavDestination>('journal');
    return <NavBar active={active} onNavigate={setActive} />;
  }
};
