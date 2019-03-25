import Pill from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Pill component sanity', () => {
  it('has name', () => {
    expect(Pill.displayName).toBe('Pill');
  });

  it('matches default snapshot', () => {
    const component = render(<Pill color={'blue'} />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Pill color={'blue'} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
