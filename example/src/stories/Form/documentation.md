# Form documentation

The `Form` component provides a wrapped version of the HTML `<form>` element.

## Native HTML5 form validation

For native HTML form validation–available in all our supported browsers, the `:valid` and `:invalid` pseudo selectors are used to apply validation styles as well as display feedback messages.

Rimble scopes the `:valid` and `:invalid` styles to parent `.was-validated` class, usually applied to the Form (you can use the validated prop as a shortcut). Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).

### Usage

```jsx
import { Form } from 'rimble-ui';
```

<!-- STORY -->

```jsx
import { Button, Form } from 'rimble-ui';

class MyCustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = { validated: false };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ validated: true });
  };

  handleValidation = e => {
    e.target.parentNode.classList.add('was-validated');
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field label="Email" width={1}>
          <Form.Input
            type="email"
            required
            width={1}
            onChange={this.handleValidation}
          />
        </Form.Field>
        <Form.Field validated={this.state.validated} label="Password" width={1}>
          <Form.Input
            type="password"
            required
            width={1}
            onChange={this.handleValidation}
          />
        </Form.Field>
        <Form.Check
          label="Remember me?"
          mb={3}
          onChange={this.handleValidation}
        />
        <Button type="submit" width={1}>
          Sign Up
        </Button>
      </Form>
    );
  }
}
```

### Component props

Form will pass any props that are defined on its component and uses the following:

| Name      | Type | Default | Description                                                                                |
| --------- | ---- | ------- | ------------------------------------------------------------------------------------------ |
| validated | bool | false   | Sets the validated property of the form which adds a 'was-validated' class to the element. |

### Styled-system props

Form uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation).
