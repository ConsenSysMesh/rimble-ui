import QR from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('QR component sanity', () => {
  it('has name', () => {
    expect(QR.displayName).toBe('QR');
  });

  it('matches default snapshot', () => {
    const component = render(<QR value="test" />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <QR value="test" />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
