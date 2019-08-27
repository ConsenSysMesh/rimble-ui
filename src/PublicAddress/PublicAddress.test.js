import PublicAddress from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('PublicAddress component sanity', () => {
  it('has name', () => {
    expect(PublicAddress.displayName).toBe('PublicAddress');
  });

  it('matches default snapshot', () => {
    const component = render(<PublicAddress />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <PublicAddress />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('PublicAddress component rendering', () => {
  const component = mount(
    <PublicAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
  );

  it('renders input element', () => {
    expect(component.find('input').exists()).toBe(true);
  });
  it('renders two buttons', () => {
    expect(component.find('button')).toHaveLength(2);
  });
  it('renders address prop', () => {
    expect(component.find('input').prop('value')).toBe(
      '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'
    );
  });
});

describe('PublicAddress component with text buttons', () => {
  const component = mount(
    <PublicAddress
      address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'}
      buttonText
    />
  );

  it('has button with text Copy', () => {
    expect(
      component
        .find('button')
        .at(0)
        .text()
    ).toBe('Copy');
  });
  it('has button with text for QR', () => {
    expect(
      component
        .find('button')
        .at(1)
        .text()
    ).toBe('Show QR Code');
  });
  it('updates button ui after copy', done => {
    // not working
    // component.find('CopyButton').simulate('click');
    // component.update();
    // expect(component.find('button').at(0).text()).toBe('Copied!');
    // done()
  });
});

describe('PublicAddress component functionality', () => {
  const component = mount(
    <PublicAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
  );

  it('copies address to clipboard', () => {});
  it('updates button ui after copy', () => {});
  it('shows modal', () => {});
  it('shows qr code in modal', () => {});
  it('copies address from qr code modal', () => {});
  it('updates ui after address copy from qr code modal', () => {});
  it('allows qr code modal to close', () => {});
});
