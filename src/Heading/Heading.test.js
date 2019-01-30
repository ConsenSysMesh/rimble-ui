import Heading from './'

describe('Heading component sanity', () => {
  it('has name', () => {
    expect(Heading.displayName).toBe('Heading')
  })

  it('matches default snapshot', () => {
    const component = render(<Heading />)
    expect(component).toMatchSnapshot()
  })
})
