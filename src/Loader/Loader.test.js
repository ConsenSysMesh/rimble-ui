import Loader from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Loader component sanity', () => {
  it('has name', () => {
    expect(Loader.displayName).toBe('Loader');
  });

  it('matches default snapshot', () => {
    const component = render(<Loader />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
