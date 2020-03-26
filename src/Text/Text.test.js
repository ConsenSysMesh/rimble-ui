import React from 'react';
import renderer from 'react-test-renderer';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

configure({ adapter: new Adapter() });

describe('Text component sanity', () => {
  it('has name', () => {
    expect(Text.displayName).toBe('Text');
  });

  it('matches default snapshot', () => {
    const component = render(<Text />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Text />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Text style tests', () => {
  it('static passes display prop', () => {
    const tree = renderer.create(<Text.span display="block" />).toJSON();

    expect(tree).toHaveStyleRule('display', 'block');
  });
});
