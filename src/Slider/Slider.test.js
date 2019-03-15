import Slider from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Slider component sanity', () => {
  it('has name', () => {
    expect(Slider.displayName).toBe('Slider');
  });

  it('matches default snapshot', () => {
    const component = render(<Slider />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Slider />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
