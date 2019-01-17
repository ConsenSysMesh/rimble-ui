import Link from './'

describe('Link component sanity', () => {
  it('has name', () => {
    expect(Link.displayName).toBe('Link')
  })

  it('matches default snapshot', () => {
    const component = render(<Link />)
    expect(component).toMatchSnapshot()
  })
})
