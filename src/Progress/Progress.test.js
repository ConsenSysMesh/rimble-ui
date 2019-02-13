import Progress from './'

describe('Progress component sanity', () => {
  it('has name', () => {
    expect(Progress.displayName).toBe('Progress')
  })

  it('matches default snapshot', () => {
    const component = render(<Progress />)
    expect(component).toMatchSnapshot()
  })
})
