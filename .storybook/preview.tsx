import type { Preview } from '@storybook/react';
import '../src/tokens.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'canvas',
      values: [{ name: 'canvas', value: '#f2ede8' }]
    },
    options: {
      storySort: {
        order: ['Introduction', 'Screens', 'Components']
      }
    }
  }
};

export default preview;
