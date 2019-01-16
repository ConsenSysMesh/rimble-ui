import Box from './'

describe('Box component sanity', () => {
  it('has name', () => {
    expect(Box.displayName).toBe('Box')
  })

  it('matches default snapshot', () => {
    const tree = renderer.create(<Box />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
