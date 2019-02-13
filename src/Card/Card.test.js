import Card from './'

describe('Card component sanity', () => {
  it('has name', () => {
    expect(Card.displayName).toBe('Card')
  })

  it('matches default snapshot', () => {
    const component = render(<Card />)
    expect(component).toMatchSnapshot()
  })
})
