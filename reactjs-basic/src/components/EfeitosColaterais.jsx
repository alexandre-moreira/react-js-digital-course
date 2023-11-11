import { useState, useEffect } from "react";

const minhaLista = [
  { id: 1, value: "Fruta" },
  { id: 2, value: "Legume" },
  { id: 3, value: "Carne" },
  { id: 4, value: "Peixe" },
];

export default function EfeitosColaterais() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });

      setProdutos(novaLista);
    } else {
      setProdutos(minhaLista);
    }
  });

  return (
    <div>
      <h1>Efeitos Colaterais</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquise aqui!"
      />
      <h4>{pesquisa}</h4>
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}
    </div>
  );
}
