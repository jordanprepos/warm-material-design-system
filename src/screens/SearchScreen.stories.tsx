import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PhoneFrame } from '../components/PhoneFrame';
import { SearchScreen, type SearchFilter } from './SearchScreen';
import { sampleSearchResults } from '../sampleData';

const meta: Meta<typeof SearchScreen> = {
  title: 'Screens/Search',
  component: SearchScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof SearchScreen>;

const initialFilters: SearchFilter[] = [
  { id: 'outlets', label: 'Has outlets', active: true },
  { id: 'rating', label: '4★ and up', active: false },
  { id: 'quiet', label: 'Quiet', active: false }
];

function Interactive({ theme }: { theme: 'light' | 'dark' }) {
  const [query, setQuery] = useState('outlets');
  const [filters, setFilters] = useState(initialFilters);
  return (
    <PhoneFrame theme={theme}>
      <SearchScreen
        query={query}
        onQueryChange={setQuery}
        filters={filters}
        onFilterToggle={(id) => setFilters((prev) => prev.map((f) => (f.id === id ? { ...f, active: !f.active } : f)))}
        results={sampleSearchResults}
      />
    </PhoneFrame>
  );
}

export const Light: Story = { render: () => <Interactive theme="light" /> };
export const Dark: Story = { render: () => <Interactive theme="dark" /> };
