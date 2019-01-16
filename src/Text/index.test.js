import Text from './'

describe('Text component sanity', () => {
  it('has name', () => {
    expect(Text.displayName).toBe('Text')
  })

  it('matches default snapshot', () => {
    const tree = renderer.create(<Text />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
