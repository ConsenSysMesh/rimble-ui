import Flash from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Select component sanity', () => {
  it('has name', () => {
    expect(Flash.displayName).toBe('Flash');
  });

  it('matches default snapshot', () => {
    const component = shallow(<Flash>Default Flash</Flash>);
    expect(component).toMatchSnapshot();
  });

  it('matches info variant snapshot', () => {
    const component = shallow(<Flash variant={'info'}>Info Flash</Flash>);
    expect(component).toMatchSnapshot();
  });

  it('matches success variant snapshot', () => {
    const component = shallow(<Flash variant={'success'}>Success Flash</Flash>);
    expect(component).toMatchSnapshot();
  });

  it('matches warning variant snapshot', () => {
    const component = shallow(<Flash variant={'warning'}>Warning Flash</Flash>);
    expect(component).toMatchSnapshot();
  });

  it('matches danger variant snapshot', () => {
    const component = shallow(<Flash variant={'danger'}>Danger Flash</Flash>);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Flash>Flash</Flash>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
