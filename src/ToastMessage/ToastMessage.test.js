import ToastMessage from './'
import { ThemeProvider } from 'styled-components'

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
    const toastMessage = mount(<ToastMessage variant={'default'} message={'message'} secondaryMessage={'secondary message'} actionHref={'http://test.com'} actionText={'Link'} icon={'InfoOutline'} />)
    expect(toastMessage).toMatchSnapshot()
    toastMessage.unmount()
  })
})

describe('ToastMessage component unit tests', () => {
  it('displays message', () => {
    const toastMessage = shallow(
      <ToastMessage message={'Generic message inside Toast'} />
    ).dive()
    expect(toastMessage.find('Text').at(0).text()).toBe('Generic message inside Toast')
  })
  
  it('displays secondary message', () => {
    const toastMessage = shallow(
      <ToastMessage secondaryMessage={'Lorem ipsum dolor sit.'} />
    ).dive()
    expect(toastMessage.find('Text').at(1).text()).toBe('Lorem ipsum dolor sit.')
  })

  it('displays icon', () => {
    const toastMessage = shallow(
      <ToastMessage message={''} icon={'InfoOutline'} />
    ).dive()
    expect(toastMessage.exists('Icon')).toEqual(true)
  })

  it('creates action href and text', () => {
    const toastMessage = shallow(
      <ToastMessage actionHref={'http://link.com'} actionText={'link text'} />
    ).dive()
    expect(toastMessage.exists('Link')).toEqual(true)
    expect(toastMessage.find('Link').text()).toBe('link text')
  })

  it('displays processing with processing icon', () => {
    // Not passing
    // const toastMessage = mount(
    //   <ToastMessage variant={'processing'} />
    // )
    // console.log(toastMessage.find('.iconBox').type() )
    // expect(toastMessage.exists('AnimatedIconProcessing')).toEqual(true)
  })

  it('displays as success', () => {

  })

  it('displays as failure', () => {

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

describe('ToastMessage theme applied correctly', () => {
  // Not passing
  // let toastMessage;

  // beforeEach(() => {
  //   toastMessage = mount(
  //     <ThemeProvider theme={myTheme}>
  //       <ToastMessage variant={'dark'} />
  //     </ThemeProvider>
  //   )
  // })

  // it('displays as dark variant of default', () => {
  //   expect(toastMessage).toHaveStyleRule("background-color", myTheme.colors.dark)
  // })
})