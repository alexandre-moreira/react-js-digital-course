import { useState } from "react";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function increment (){
    setContador(contador + 1)
  }

  function decrement (){
    setContador(contador - 1)
  }

  return (
    <>
      <div>{contador}</div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </>
  );
}
