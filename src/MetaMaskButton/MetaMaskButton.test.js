import MetaMaskButton from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('MetaMaskButton component sanity', () => {
  it('has name', () => {
    expect(MetaMaskButton.displayName).toBe('MetaMaskButton');
  });

  it('matches default snapshot', () => {
    const component = shallow(<MetaMaskButton />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <MetaMaskButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
