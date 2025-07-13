export default function ParOuImpar(props) {
  return (
    <div style={{ paddingTop: 15 }}>
      {props.condicao % 2 === 0
        ? `O número ${props.condicao} é Par`
        : `O número ${props.condicao} é Ímpar`}
    </div>
  );
}
