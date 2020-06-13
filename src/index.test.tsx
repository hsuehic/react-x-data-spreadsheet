import React from 'react';
import HelloWorld from './index';

import { render } from '@testing-library/react';

describe('index.tsx', () => {
  it('render', () => {
    const name = 'Richard';
    const { getByTestId } = render(<HelloWorld name={name} />);
    const element = getByTestId('name');
    expect(element.textContent).toBe(name);
  });
});
