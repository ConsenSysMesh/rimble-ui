import Box from './'

describe('Box component sanity', () => {
  it('has name', () => {
    expect(Box.displayName).toBe('Box')
  })

  it('matches default snapshot', () => {
    const component = render(<Box />)
    expect(component).toMatchSnapshot()
  })
})
