import Card from "./";
import ThemeProvider from "../ThemeProvider";
import theme from "../theme";

describe("Card component sanity", () => {
  it("has name", () => {
    expect(Card.displayName).toBe("Card");
  });

  it("matches default snapshot", () => {
    const component = render(<Card />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Card />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
