import OutlineButton from './'

describe('OutlineButton component sanity', () => {
  it('has name', () => {
    expect(OutlineButton.displayName).toBe('OutlineButton')
  })

  it('matches default snapshot', () => {
    const component = render(<OutlineButton />)
    expect(component).toMatchSnapshot()
  })
})
