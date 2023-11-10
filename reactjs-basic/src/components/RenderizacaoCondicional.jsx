import { useState } from "react";

export default function RenderizacaoCondicional() {
  const [contador, setContador] = useState(0);

  function increment() {
    setContador(contador + 1);
  }

  function decrement() {
    setContador(contador - 1);
  }

  if (contador > 5) {
    return (
      <div>
        <h1>Valor muito alto!</h1>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
    );
  }

  return (
    <>
      <h1>Meu Contador: {contador}</h1>
      {contador > 9 ? <h1>Valor muito grande</h1> : null}
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </>
  );
}
