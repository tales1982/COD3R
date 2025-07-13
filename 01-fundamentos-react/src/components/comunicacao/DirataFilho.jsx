export default function DiretaFilho(props) {
  return (
    <div>
      <p>Nome do filho : {props.nome}</p>
      <p>Idade : {props.idade}</p>
      <p>Ele e inteligente : {props.nerd ? "Verdadeiro" : "Falso"} </p>
    </div>
  );
}
