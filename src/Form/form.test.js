import Form from './';
import Button from '../Button';
import Input from '../Input';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Form component sanity', () => {
  it('has name', () => {
    expect(Form.displayName).toBe('Form');
  });

  it('matches default snapshot', () => {
    const component = render(<Form />);
    expect(component).toMatchSnapshot();
  });

  it('renders children elements', () => {
    const component = render(
      <Form>
        <Form.Field label="Email" width={1}>
          <Form.Input type="email" required width={1} />
        </Form.Field>
        <Form.Field label="Password" width={1}>
          <Form.Input type="password" required width={1} />
        </Form.Field>
        <Form.Check label="Remember me?" mb={3} />
      </Form>
    );
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Form>
          <Form.Field label="Email" width={1}>
            <Form.Input type="email" required width={1} />
          </Form.Field>
          <Form.Field label="Password" width={1}>
            <Form.Input type="password" required width={1} />
          </Form.Field>
          <Form.Check label="Remember me?" mb={3} />
        </Form>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Form validation', () => {
  it('adds was-validated class', () => {
    const component = mount(
      <Form>
        <Form.Field label="Email" width={1}>
          <Form.Input type="email" required width={1} />
        </Form.Field>
      </Form>
    );

    component.setProps({ validated: true });
    expect('validated' in component.props()).toEqual(true);
    expect(
      component
        .find('Box')
        .at(0)
        .hasClass('was-validated')
    ).toEqual(true);
  });
});
