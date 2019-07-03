import Field from './';
import Input from '../Input';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Field component sanity', () => {
  it('has name', () => {
    expect(Field.displayName).toBe('Field');
  });

  it('matches default snapshot', () => {
    const component = render(
      <Field label="Input label">
        <Input />
      </Field>
    );
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Field label="Themed input label">
          <Input />
        </Field>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
