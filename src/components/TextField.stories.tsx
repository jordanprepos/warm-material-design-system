import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { TextField } from './TextField';
import { PinIcon } from '../icons';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <ThemeProvider style={{ padding: 24, width: 320, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Focused: Story = { args: { label: 'Cafe name', value: 'Tanamera Coffee', focused: true, onChange: () => {} } };
export const Unfocused: Story = {
  args: { label: 'Location', leadingIcon: <PinIcon size={18} />, value: 'Thamrin, Jakarta', onChange: () => {} }
};
