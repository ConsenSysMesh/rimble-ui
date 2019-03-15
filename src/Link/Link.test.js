import Link from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Link component sanity', () => {
  it('has name', () => {
    expect(Link.displayName).toBe('Link');
  });

  it('matches default snapshot', () => {
    const component = render(<Link />);
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Link />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
