import Textarea from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Textarea component sanity', () => {
  it('has name', () => {
    expect(Textarea.displayName).toBe('Textarea');
  });

  it('matches default snapshot', () => {
    const component = render(<Textarea />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Textarea />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
