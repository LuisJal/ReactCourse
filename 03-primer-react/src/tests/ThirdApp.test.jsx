import { getByTestId, render, screen } from "@testing-library/react";
import { ThirdApp } from "../ThirdApp";

describe("Pruebas en ThirdApp", () => {
  const title = "Hola buenas soy Luis";

  const subt = "Soy un subtitulo";

  /* 
    test('debe hacer match con el snapshot', () => {
       
        const title ='Hola buenas soy Luis'

        const{container} = render(<ThirdApp titulo={title}/>)
        

        expect(container).toMatchSnapshot();

    });  */

  test("debe mostrar el titulo en un h1", () => {
    //EL dom se renderiza con el render
    const { container, getByText, getByTestId } = render(
      <ThirdApp titulo={title} />
    );

    //Checkeo que el titulo este yu nadie se lo haya cargado
    //Si me lo cargo del ThirdApp.js me dara fallo y opcion a
    //HAcer update del snapshot
    expect(getByText(title)).toBeTruthy();

    expect(getByTestId("test-tittle").innerHTML).toBe(title);
    /* const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe(title)
     */
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const { container, getByTestId } = render(
      <ThirdApp titulo={title} subtitulo={subt} />
    );

    const subtituloReal = container.querySelector("h1");
    console.log(subtituloReal.innerHtml);
    expect(getByTestId("test-subt").innerHTML).toBe(subt);
    //expect(getByText(subt)).toBeTruthy();
  });

  test("Probando screen", () => {
    render(<ThirdApp titulo={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    //screen.debug();
  });

  test("Probando screen h1", () => {
    render(<ThirdApp titulo={title} subtitulo={subt} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(subt);
    //screen.debug();
  });
});
