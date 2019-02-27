import Button from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

describe('Button component sanity', () => {
  it('has name', () => {
    expect(Button.displayName).toBe('Button')
  })

  it('matches default snapshot', () => {
    const component = render(
      <Button />
    )
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
