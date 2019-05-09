import React from 'react';
import { shallow, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SimpleAddress from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

const testAddress = '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2';

configure({ adapter: new Adapter() });

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
