import TextButton from "./";
import ThemeProvider from "../ThemeProvider";
import theme from "../theme";

describe("TextButton component sanity", () => {
  it("has name", () => {
    expect(TextButton.displayName).toBe("TextButton");
  });

  it("matches default snapshot", () => {
    const component = render(<TextButton />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <TextButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
