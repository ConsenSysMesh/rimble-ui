import Input from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Input component sanity', () => {
  it('has name', () => {
    expect(Input.displayName).toBe('Input');
  });

  it('matches default snapshot', () => {
    const component = render(<Input />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
