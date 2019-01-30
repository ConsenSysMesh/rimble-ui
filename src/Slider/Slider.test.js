import Slider from './'

describe('Slider component sanity', () => {
  it('has name', () => {
      expect(Slider.displayName).toBe('Slider')
  })

  it('matches default snapshot', () => {
    const component = render(<Slider />)
    expect(component).toMatchSnapshot()
  })
})
