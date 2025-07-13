import alunos from "../data/alunos";

export default function UsuarioInfo(props) {
  const aluno = alunos.find((aluno) => aluno.name === props.name);

  return (
    <div>
      {aluno ? (
        // 2a) Se achou, renderiza as informações
        <div>
          <p>
            <strong>Nome do Aluno:</strong> {aluno.name}
          </p>
          <p>
            <strong>Nota do Aluno:</strong>{" "}
            <span style={{ color: aluno.grade >= 7 ? "green" : "red" }}>
              {aluno.grade}
            </span>
          </p>
          <p>
            <strong>Situação:</strong>{" "}
            {aluno.grade >= 7 ? "Aprovado" : "Reprovado"}
          </p>
        </div>
      ) : (
        // 2b) Se não achou, renderiza mensagem de não cadastrado
        <p>
          O aluno <strong>{props.name}</strong> não está cadastrado.
        </p>
      )}
    </div>
  );
}
