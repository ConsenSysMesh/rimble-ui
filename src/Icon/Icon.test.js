import Icon from './'

describe('Icon component sanity', () => {
  it('has name', () => {
    expect(Icon.displayName).toBe('Icon')
  })

  it('matches default snapshot', () => {
    const component = render(<Icon />)
    expect(component).toMatchSnapshot()
  })
})
