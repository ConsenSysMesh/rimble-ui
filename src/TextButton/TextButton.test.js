import TextButton from './'

describe('TextButton component sanity', () => {
  it('has name', () => {
    expect(TextButton.displayName).toBe('TextButton')
  })

  it('matches default snapshot', () => {
    const component = render(<TextButton />)
    expect(component).toMatchSnapshot()
  })
})
