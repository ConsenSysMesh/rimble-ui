import UPortButton from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('UPortButton component sanity', () => {
  it('has name', () => {
    expect(UPortButton.displayName).toBe('UPortButton');
  });

  it('matches default snapshot', () => {
    const component = shallow(<UPortButton />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <UPortButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
