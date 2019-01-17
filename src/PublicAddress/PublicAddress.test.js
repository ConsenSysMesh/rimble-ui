import PublicAddress from './'

describe('PublicAddress component sanity', () => {
  it('has name', () => {
    expect(PublicAddress.displayName).toBe('PublicAddress')
  })

  it('matches default snapshot', () => {
    const component = render(<PublicAddress />)
    expect(component).toMatchSnapshot()
  })
})
