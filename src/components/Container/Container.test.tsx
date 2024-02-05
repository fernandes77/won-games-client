import { render } from "@/utils/tests/helpers";
import { Container } from "./Container";

describe("<Container />", () => {
  it("should render the heading", () => {
    const { container } = render(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="w-full max-w-container mx-auto px-half-gutter"
      >
        <span>
          Won Games
        </span>
      </div>
    `);
  });
});
