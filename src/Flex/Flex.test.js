import Flex from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Flex component sanity', () => {
  it('has name', () => {
    expect(Flex.displayName).toBe('Flex');
  });

  it('matches default snapshot', () => {
    const component = render(<Flex />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Flex />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
