import FileInput from './FileInput';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('File Input component sanity', () => {
  it('has name', () => {
    expect(FileInput.displayName).toBe('FileInput');
  });

  it('matches default snapshot', () => {
    const component = render(<FileInput />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <FileInput />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
