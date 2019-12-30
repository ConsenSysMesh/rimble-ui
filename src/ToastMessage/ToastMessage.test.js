import ToastMessage from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('ToastMessage component sanity', () => {
  it('has name', () => {
    expect(ToastMessage.displayName).toBe('ToastMessage');
  });

  it('matches generic snapshot', () => {
    const toastMessage = shallow(
      <ToastMessage message="test message" />
    ).dive();
    expect(toastMessage).toMatchSnapshot();
  });

  it('matches processing snapshot', () => {
    const toastMessage = shallow(
      <ToastMessage.Processing message="test message" />
    ).dive();
    expect(toastMessage).toMatchSnapshot();
  });

  it('matches success snapshot', () => {
    const toastMessage = shallow(
      <ToastMessage.Success message="test message" />
    ).dive();
    expect(toastMessage).toMatchSnapshot();
  });

  it('matches failure snapshot', () => {
    const toastMessage = shallow(
      <ToastMessage.Failure message="test message" />
    ).dive();
    expect(toastMessage).toMatchSnapshot();
  });

  it('matches full component shallow snapshot', () => {
    const toastMessage = shallow(
      <ToastMessage
        variant={'default'}
        message={'message'}
        secondaryMessage={'secondary message'}
        actionHref={'http://test.com'}
        actionText={'Link'}
      />
    ).dive();
    expect(toastMessage).toMatchSnapshot();
  });

  it('matches full component mount snapshot', () => {
    const toastMessage = mount(
      <ThemeProvider theme={theme}>
        <ToastMessage
          variant={'default'}
          message={'message'}
          secondaryMessage={'secondary message'}
          actionHref={'http://test.com'}
          actionText={'Link'}
        />
      </ThemeProvider>
    );
    expect(toastMessage).toMatchSnapshot();
    toastMessage.unmount();
  });
});

describe('ToastMessage component unit tests', () => {
  it('displays message', () => {
    const toastMessage = mount(
      <ToastMessage message={'Generic message inside Toast'} />
    );
    expect(
      toastMessage
        .find('Text')
        .at(0)
        .text()
    ).toBe('Generic message inside Toast');
  });

  it('creates action Link', () => {
    const toastMessage = mount(
      <ThemeProvider theme={theme}>
        <ToastMessage
          variant={'default'}
          message={'message'}
          secondaryMessage={'secondary message'}
          actionHref={'http://test.com'}
          actionText={'link text'}
        />
      </ThemeProvider>
    );

    expect(toastMessage.exists('Link')).toEqual(true);
    expect(toastMessage.find('Link').text()).toBe('link text');

    toastMessage.unmount();
  });

  it('displays as processing', () => {
    const toastMessage = shallow(<ToastMessage.Processing />).dive();
    expect(toastMessage.prop('variant')).toEqual('processing');
  });

  it('displays as success', () => {
    const toastMessage = shallow(<ToastMessage.Success />).dive();
    expect(toastMessage.prop('variant')).toEqual('success');
  });

  it('displays as failure', () => {
    const toastMessage = shallow(<ToastMessage.Failure />).dive();
    expect(toastMessage.prop('variant')).toEqual('failure');
  });

  it('shows close button', () => {});

  it('closes when close button clicked', () => {});

  it('only shows one toast at a time', () => {});

  it('auto closes the toast', () => {});

  it('accepts proxy props', () => {
    const onClick = jest.fn();
    const toastMessage = mount(<ToastMessage onClick={onClick} />);

    expect(toastMessage.at(0).props().onClick).toBe(onClick);

    toastMessage.unmount();
  });
});

describe('ToastMessage theme applied correctly', () => {
  // No theme tests
});
