import Image from './'

describe('Image component sanity', () => {
  it('has name', () => {
    expect(Image.displayName).toBe('Image')
  })

  it('matches default snapshot', () => {
    const component = render(<Image />)
    expect(component).toMatchSnapshot()
  })
})
