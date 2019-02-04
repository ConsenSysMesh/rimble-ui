import BlockiesIdenticon from './'

describe('Blockie component sanity', () => {
  it('has name', () => {
    expect(BlockiesIdenticon.displayName).toBe('BlockiesIdenticon')
  })

  it('matches default snapshot', () => {
    const component = render(<BlockiesIdenticon />)
    expect(component).toMatchSnapshot()
  })
})
