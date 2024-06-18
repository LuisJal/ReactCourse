import { CounterApp } from "../CounterApp";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

describe("Pruebas en CounterApp", () => {

    const initValue = 100;
  
  test("debe hacer match con el snapshot", () => {
    
    const { container } = render(<CounterApp value={initValue} />);

    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor inicial de 100", () => {
    const {  getByTestId } = render(
        <CounterApp value={initValue} />
      );
      expect(screen.getByTestId("contador").innerHTML).toBe("100");

  });

  test("debe incrementar con el boton", () =>{
    render(<CounterApp value={initValue} />)
    fireEvent.click(screen.getByText('+1'))

    expect(screen.getByTestId("contador").innerHTML).toBe("101");
    

  });



  test("debe decrementar con el boton", () =>{
    render(<CounterApp value={initValue} />)
    fireEvent.click(screen.getByText('-1'))

    expect(screen.getByTestId("contador").innerHTML).toBe("99");
    

  });

  test("debe resetear con el boton", () =>{
    render(<CounterApp value={initValue} />)
    fireEvent.click(screen.getByText('Reset'))

    expect(screen.getByTestId("contador").innerHTML).toBe("0");
    

  });

  
});
