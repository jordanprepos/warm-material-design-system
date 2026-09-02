import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  decorators: [
    (Story) => (
      <ThemeProvider style={{ padding: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const FacilityStatic: Story = { args: { variant: 'facility-static', children: 'WiFi' } };
export const FacilityToggleSelected: Story = { args: { variant: 'facility-toggle', selected: true, children: 'Outlets' } };
export const FacilityToggleUnselected: Story = { args: { variant: 'facility-toggle', selected: false, children: 'Parking' } };
export const FilterSelected: Story = { args: { variant: 'filter', selected: true, children: 'Recent' } };
export const FilterUnselected: Story = { args: { variant: 'filter', selected: false, children: 'Top rated' } };
export const SearchFilterActive: Story = { args: { variant: 'search-filter', selected: true, children: 'Has outlets' } };
export const SearchFilterInactive: Story = { args: { variant: 'search-filter', selected: false, children: '4★ and up' } };
