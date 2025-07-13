import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState(0);
  const [maioridade, setMaioridade] = useState(false);

  const retornoFilho = (name, age, bool) => {
    setNome(name);
    setIdade(age);
    setMaioridade(bool);
    //console.log()
  };

  return (
    <div>
      <p>Dados recebido do Filho</p>

      <p>Nome : {nome}</p>
      <p>Idade : {idade}</p>
      <p>Maior de 18 anos : {maioridade === true ? "SIM" : "NAO"}</p>
      <IndiretaFilho enviarPai={retornoFilho} />
    </div>
  );
}
