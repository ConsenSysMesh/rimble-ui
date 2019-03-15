import Box from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Box component sanity', () => {
  it('has name', () => {
    expect(Box.displayName).toBe('Box');
  });

  it('matches default snapshot', () => {
    const component = render(<Box />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Box />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
