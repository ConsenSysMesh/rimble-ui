import WithIconWrapper from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Input component sanity', () => {
  it('has name', () => {
    expect(WithIconWrapper.InputOnly.displayName).toBe('Input');
  });

  it('matches default snapshot', () => {
    const component = render(<WithIconWrapper.InputOnly />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <WithIconWrapper.InputOnly />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
