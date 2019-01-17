import Avatar from './'

describe('Avatar component sanity', () => {
  it('has name', () => {
    expect(Avatar.displayName).toBe('Avatar')
  })

  it('matches default snapshot', () => {
    const component = render(<Avatar />)
    expect(component).toMatchSnapshot()
  })
})
