import Button from './';
import Loader from '../Loader/';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

describe('Button component sanity', () => {
  it('has name', () => {
    expect(Button.displayName).toBe('Button');
  });

  it('matches default snapshot', () => {
    const component = render(<Button />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button.Outline component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button.Outline />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button.Outline />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button.Text component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button.Text />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button.Text />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button size variant component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button size={'small'} />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button size={'small'} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('matches default snapshot', () => {
    const component = render(<Button size={'large'} />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button size={'large'} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button disabled component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button disabled />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button disabled />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button Icon component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button icon={'Send'} />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button icon={'Send'} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Button Icon with position prop component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button icon={'Send'} iconpos={'right'} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Button Icon only component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button icon={'MoreHoriz'} icononly />);
    expect(component).toMatchSnapshot();
  });
});

describe('Loading Button component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(
      <Button>
        <Loader color={'white'} />
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Loading Button component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(<Button icon={'MoreHoriz'} icononly />);
    expect(component).toMatchSnapshot();
  });
});

describe('Link Button component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(
      <Button as={'a'} href={'#!'} target={'_blank'} title={'Learn more'}>
        Learn More
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Link Button Outline component sanity', () => {
  it('matches default snapshot', () => {
    const component = render(
      <Button.Outline
        as={'a'}
        href={'#!'}
        target={'_blank'}
        title={'Learn more'}
      >
        Learn More
      </Button.Outline>
    );
    expect(component).toMatchSnapshot();
  });
});
