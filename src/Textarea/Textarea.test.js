import Textarea from './'

describe('Textarea component sanity', () => {
  it('has name', () => {
      expect(Textarea.displayName).toBe('Textarea')
  })

  it('matches default snapshot', () => {
    const component = render(<Textarea />)
    expect(component).toMatchSnapshot()
  })
})
