import Progress from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

describe('Progress component sanity', () => {
  it('has name', () => {
    expect(Progress.displayName).toBe('Progress')
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Progress />
      </ThemeProvider>)
    expect(component).toMatchSnapshot()
  })
})
