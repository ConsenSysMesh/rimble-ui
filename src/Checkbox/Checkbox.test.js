import Checkbox from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Checkbox component sanity', () => {
  it('has name', () => {
    expect(Checkbox.displayName).toBe('Checkbox');
  });

  it('matches default snapshot', () => {
    const component = render(<Checkbox />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Checkbox />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
