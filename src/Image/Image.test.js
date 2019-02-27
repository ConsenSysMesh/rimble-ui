import Image from "./";
import ThemeProvider from "../ThemeProvider";
import theme from "../theme";

describe("Image component sanity", () => {
  it("has name", () => {
    expect(Image.displayName).toBe("Image");
  });

  it("matches default snapshot", () => {
    const component = render(<Image />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Image />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
