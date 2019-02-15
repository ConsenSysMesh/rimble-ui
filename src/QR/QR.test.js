import QR from './'

describe('QR component sanity', () => {
  it('has name', () => {
    expect(QR.displayName).toBe('QR')
  })

  it('matches default snapshot', () => {
    const component = render( <QR value='test' /> )
    expect(component).toMatchSnapshot()
  })
})
