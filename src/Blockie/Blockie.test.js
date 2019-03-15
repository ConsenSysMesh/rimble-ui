import BlockiesIdenticon from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Blockie component sanity', () => {
  it('has name', () => {
    expect(BlockiesIdenticon.displayName).toBe('BlockiesIdenticon');
  });

  it('matches default snapshot', () => {
    const component = render(<BlockiesIdenticon />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <BlockiesIdenticon />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
