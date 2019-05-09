import React from 'react';
import { render } from 'enzyme';

import SimpleAddress from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

const testAddress = '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2';

describe('Simple Address component sanity', () => {
  it('has name', () => {
    expect(SimpleAddress.displayName).toBe('SimpleAddress');
  });

  it('matches default snapshot', () => {
    const component = <SimpleAddress address={testAddress} />;
    expect(component).toMatchSnapshot();
  });

  it('matches Themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <SimpleAddress address={testAddress} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
