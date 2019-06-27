import Icon from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Icon component sanity', () => {
  it('has name', () => {
    expect(Icon.displayName).toBe('Icon');
  });

  it('matches default snapshot', () => {
    const component = render(<Icon name="Close" />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Icon name="Close" />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
