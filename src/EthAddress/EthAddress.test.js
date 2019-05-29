import React from 'react';
import { render } from 'enzyme';

import EthAddress from '.';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

const testAddress = '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2';

describe('Simple Address component sanity', () => {
  it('has name', () => {
    expect(EthAddress.displayName).toBe('EthAddress');
  });

  it('matches default snapshot', () => {
    const component = <EthAddress address={testAddress} />;
    expect(component).toMatchSnapshot();
  });

  it('matches Themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <EthAddress address={testAddress} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
