import Loader from './'

describe('Loader component sanity', () => {
  it('has name', () => {
    expect(Loader.displayName).toBe('Loader')
  })

  it('matches default snapshot', () => {
    const component = render(<Loader />)
    expect(component).toMatchSnapshot()
  })
})
