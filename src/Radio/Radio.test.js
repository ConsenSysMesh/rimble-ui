import Radio from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Radio component sanity', () => {
  it('has name', () => {
    expect(Radio.displayName).toBe('Radio');
  });

  it('matches default snapshot', () => {
    const component = render(<Radio />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Radio />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
