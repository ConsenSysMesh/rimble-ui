import Tooltip from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
import Button from '../Button';

describe('Tooltip component sanity', () => {
  it('has name', () => {
    expect(Tooltip.displayName).toBe('Tooltip');
  });

  it('matches default snapshot', () => {
    const component = mount(
      <Tooltip>
        <Button />
      </Tooltip>
    );
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = mount(
      <ThemeProvider theme={theme}>
        <Tooltip>
          <Button />
        </Tooltip>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
