import React from 'react';
import XDataSpreadSheet from './index';

import { render } from '@testing-library/react';

describe('index.tsx', () => {
  it('render', () => {
    const name = 'Richard';
    const { getByTestId } = render(
      <XDataSpreadSheet
        data={[
          {
            name: 'Sheet 1'
          }
        ]}
      />
    );
  });
});
