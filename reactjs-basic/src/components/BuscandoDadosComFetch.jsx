import { useEffect, useState } from "react";

const tarefas = [
    { id: "1", title: "Minha primeira tarefa" },
    { id: "2", title: "Minha segunda tarefa" },
    { id: "3", title: "Minha teceira tarefa" },
    { id: "4", title: "Minha quarta tarefa" },
    { id: "5", title: "Minha quinta tarefa" },
  ];

export default function BuscandoDadosComFetch() {
 const [tarefas, setTarefas] = useState([])

 useEffect(()=> {
    async function buscarDados(){
        const resultado =  await fetch('https://jsonplaceholder.typicode.com/todos')
        const resultadoFinal = await resultado.json()
        return resultadoFinal
    }

    buscarDados().then(res => setTarefas(res))
 },[])
  return (
    <>
      <div>BuscandoDadosComFetch</div>
      <ol>
        {tarefas.map((tarefa) => {
          return(
            <div>
                 <li key={tarefas.id}>
                    {tarefa.title} - 
                    {tarefa.completed ? ' Concluída' : ' Pendente'}
                </li>
            </div>
          )
        })}
      </ol>
    </>
  );
}
