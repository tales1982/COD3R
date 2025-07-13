export default function FamiliaMembro(props) {
  return <div style={{ listStyle: "none", paddingTop: '10px' }}>{props.name} <strong>{props.surname}</strong></div>;
}