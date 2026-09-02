import type { Meta, StoryObj } from '@storybook/react';
import { PhoneFrame } from '../components/PhoneFrame';
import { DetailScreen } from './DetailScreen';
import { sampleFeatured } from '../sampleData';

const meta: Meta<typeof DetailScreen> = {
  title: 'Screens/Detail',
  component: DetailScreen,
  parameters: { layout: 'centered' }
};
export default meta;
type Story = StoryObj<typeof DetailScreen>;

const relatedNote = 'Ruang Seduh and Sagaleh share the same quiet-plus-outlets profile you rate highest.';

export const Light: Story = {
  render: () => (
    <PhoneFrame theme="light">
      <DetailScreen visit={sampleFeatured} relatedNote={relatedNote} />
    </PhoneFrame>
  )
};

export const Dark: Story = {
  render: () => (
    <PhoneFrame theme="dark">
      <DetailScreen visit={sampleFeatured} relatedNote={relatedNote} />
    </PhoneFrame>
  )
};
