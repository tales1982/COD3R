import alunos from "../data/alunos";

export default function ListaAlunos(props) {
  const listaAluno = alunos.map((alunos) => (
    <li key={alunos.id} style={{  paddingTop: '7px' }}>
      {alunos.id}
      {")"} {alunos.name} {"-->"} {alunos.grade}
    </li>
  ));

  return (
    <div>
      <h3>Lista de Alunos</h3>
      <ul style={{ listStyle: "none", paddingTop: '5px' }}>{listaAluno}</ul>
    </div>
  );
}
