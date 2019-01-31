import ToastMessage from './'

describe('ToastMessage component sanity', () => {
  it('has name', () => {
    expect(ToastMessage.displayName).toBe('ToastMessage')
  })

  it('matches generic snapshot', () => {
    const toastMessage = render(<ToastMessage />)
    expect(toastMessage).toMatchSnapshot()
  })

  it('matches processing snapshot', () => {
    const toastMessage = render(<ToastMessage variant={'processing'} />)
    expect(toastMessage).toMatchSnapshot()
  })

  it('matches success snapshot', () => {
    const toastMessage = render(<ToastMessage variant={'success'} />)
    expect(toastMessage).toMatchSnapshot()
  })

  it('matches failure snapshot', () => {
    const toastMessage = render(<ToastMessage variant={'failure'} />)
    expect(toastMessage).toMatchSnapshot()
  })

  it('matches full component snapshot', () => {
    const toastMessage = render(<ToastMessage variant={'default'} message={'message'} secondaryMessage={'secondary message'} actionHref={'http://test.com'} actionText={'Link'} icon={'InfoOutline'} />)
    expect(toastMessage).toMatchSnapshot()
  })
})

describe('ToastMessage component unit tests', () => {
  it('displays secondary message', () => {
    const toastMessage = mount(
      <ToastMessage message={''} secondaryMessage={'Lorem ipsum dolor sit.'} />,
    )
    expect(toastMessage.children().text()).toBe('Lorem ipsum dolor sit.')
    toastMessage.unmount()
  })

  it('displays icon', () => {

  })

  it('accepts action text', () => {

  })

  it('accepts action href', () => {

  })

  it('displays as processing', () => {

  })

  it('displays as success', () => {

  })

  it('displays as failure', () => {

  })

  it('displays as dark variant of generic', () => {

  })

  it('displays as dark variant of default', () => {

  })

  it('accepts proxy props', () => {
    const onClick = jest.fn()
    const toastMessage = mount(
      <ToastMessage onClick={onClick} />,
    )

    expect(toastMessage.at(0).props().onClick).toBe(onClick)

    toastMessage.unmount()
  })

})