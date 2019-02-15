import PublicAddress from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

describe('PublicAddress component sanity', () => {
  it('has name', () => {
    expect(PublicAddress.displayName).toBe('PublicAddress')
  })

  it('matches default snapshot', () => {
    const component = render( <PublicAddress /> )
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <PublicAddress />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
