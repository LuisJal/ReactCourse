import { Giffitem } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <GifItem></GifItem>", () => {
  const tittle = "Luis";
  const url = "https://www.luispa.com/";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<Giffitem tittle={tittle} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen y el url indicados", () => {
    render(<Giffitem tittle={tittle} url={url} />);
    //screen.debug();

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Debe mostrar el titulo del componente", () => {
    render(<Giffitem tittle={tittle} url={url} />);
    expect(screen.getByText(tittle)).toBeTruthy();
  });
});
