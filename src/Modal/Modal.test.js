import Modal from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Modal component sanity', () => {
  it('has name', () => {
    expect(Modal.displayName).toBe('Modal');
  });

  it('matches default snapshot', () => {
    const component = render(<Modal />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Modal />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
