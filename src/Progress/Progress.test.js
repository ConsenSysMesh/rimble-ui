import Progress from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Progress component sanity', () => {
  it('has name', () => {
    expect(Progress.displayName).toBe('Progress');
  });

  it('matches default snapshot', () => {
    const component = render(<Progress />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Progress />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
