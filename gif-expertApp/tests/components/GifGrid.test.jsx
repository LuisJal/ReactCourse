import { render, screen } from "@testing-library/react";
import { GiffGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Punch";

  test("debe mostrar el loading inicial", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GiffGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuando se cargan ls imagenes useFetchGif ", () => {
    //Voy a confiaqr en que mi hook funciona ya que el testing se hará en otro test
    //Mockeo del hook
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https;//unos.com",
      },
      {
        id: "CBA",
        title: "Goku",
        url: "https;dos.com",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GiffGrid category={category} />);
    console.log(screen.getAllByRole("img").length);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
