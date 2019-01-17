import Text from './'

describe('Text component sanity', () => {
  it('has name', () => {
    expect(Text.displayName).toBe('Text')
  })

  it('matches default snapshot', () => {
    const component = render(<Text />)
    expect(component).toMatchSnapshot()
  })
})
