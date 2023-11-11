import { useState } from "react"
import "./Estilizacao.css"
import styles from "../button.module.css"
export default function Estilizacao() {
    const [contador, setContador] = useState(0)

    function increment(){
        setContador( contador + 1)
    }

  return (
    <div className="container">
        <h1>Meu contador</h1>
        <h3>{contador}</h3>
        <button onClick={increment} className={styles.myButton}>Incrementar</button>
    </div>
  )
}
