import Flex from './'

describe('Flex component sanity', () => {
  it('has name', () => {
    expect(Flex.displayName).toBe('Flex')
  })

  it('matches default snapshot', () => {
    const component = render(<Flex />)
    expect(component).toMatchSnapshot()
  })
})
