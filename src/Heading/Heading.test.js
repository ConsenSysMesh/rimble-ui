import Heading from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Heading component sanity', () => {
  it('has name', () => {
    expect(Heading.displayName).toBe('Heading');
  });

  it('matches default snapshot', () => {
    const component = render(<Heading as={'h1'}>Heading 1</Heading>);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Heading as={'h1'}>Heading 1</Heading>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
