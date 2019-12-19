import Field from './';
import Input from '../Input';
import Radio from '../Radio';
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

  it('supports array of children', () => {
    const mockOptions = [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ];
    const component = render(
      <ThemeProvider theme={theme}>
        <Field label="Multiple options">
          {mockOptions.map(item => (
            <Radio
              key={item.value}
              label={item.label}
              value={item.value}
              required
            />
          ))}
        </Field>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
