import Modal from "./";

describe("Modal component sanity", () => {
  it("has name", () => {
    expect(Modal.displayName).toBe("Modal");
  });

  it("matches default snapshot", () => {
    const component = render(<Modal />);
    expect(component).toMatchSnapshot();
  });
});
