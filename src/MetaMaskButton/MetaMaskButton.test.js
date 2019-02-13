import MetaMaskButton from './'

describe('MetaMaskButton component sanity', () => {
  it('has name', () => {
    expect(MetaMaskButton.displayName).toBe('MetaMaskButton')
  })

  it('matches default snapshot', () => {
    const component = shallow(<MetaMaskButton />)
    expect(component).toMatchSnapshot()
  })
})
