import Image from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Image component sanity', () => {
  it('has name', () => {
    expect(Image.displayName).toBe('Image');
  });

  it('matches default snapshot', () => {
    const component = render(<Image src="test.jpg" />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Image src="test.jpg" />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
