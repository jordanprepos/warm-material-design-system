import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from '../ThemeProvider';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <ThemeProvider style={{ padding: 24 }}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} />;
  }
};
