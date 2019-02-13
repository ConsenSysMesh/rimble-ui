import Slider from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

describe('Slider component sanity', () => {
  it('has name', () => {
      expect(Slider.displayName).toBe('Slider')
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Slider />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
