
export default function MinhaLista() {

    const minhaLista = [
        {id: 1, value: 'Fruta'},
        {id: 2, value: 'Legume'},
        {id: 3, value: 'Carne'},
        {id: 4, value: 'Peixe'}
    ]
    
  return minhaLista.map((item) => {
    return(
        <div key={item.id}>
            <h4>{item.value}</h4>
        </div>
    )
  });
}
