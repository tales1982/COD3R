import React, { useState } from "react";

export default function IndiretaFilho(props) {
  const propiedade = props.enviarPai;

  const [nome, setNome]   = useState("");
  const [idade, setIdade] = useState("");
  const [isAdult, setIsAdult] = useState(false);

  const aoEnvia = (e) => {
    e.preventDefault(); 
    propiedade(nome, idade, isAdult);
  }

  return (
    <div>
      <p>Filho</p>
      <form onSubmit={aoEnvia} style={{display:"flex", flexDirection:"column"}}>
        <input type="text" placeholder="Nome" value={nome} onChange={ e => setNome(e.target.value)} style={{height:"20px",margin:"3px"}}/>
        <input type="number" placeholder="Idade" id={idade} onChange={ e => setIdade(e.target.value)} style={{height:"20px",margin:"3px"}}/>
        <input type="text" placeholder="0" id={isAdult} onChange={ e => setIsAdult(e.target.value)} style={{height:"20px",margin:"3px"}}/>
        <button type="submit" style={{margin:"3px" , background:"green", color:"white" , height:"26px"}}> Envia para o pai</button>
      </form>
    </div>
  );
}