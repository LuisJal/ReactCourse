import { GifExpertApp } from "../src/GifExpertApp";
import { render, screen } from "@testing-library/react";
describe("Pruebas en <GifExpertApp/>", () => {
  test("Probar la funcionalidad del if", () => {
    render(<GifExpertApp />);
    screen.debug();
  });
});
