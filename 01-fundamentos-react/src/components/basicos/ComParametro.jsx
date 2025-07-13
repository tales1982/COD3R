import "../../styles/ComParametro.css";

export default function ComParametro({ titulo, aluno, nota }) {
  const status = nota >= 7 ? "Aprovado" : "Reprovado";

  return (
    <>
      <h2>{titulo}</h2>
      <h3>
        O aluno <strong>{aluno}</strong> tem a nota <span className={nota < 7 ? "colorR" : "colorA"}>{nota}</span> e ele está{" "}
        <span className={status === "Aprovado" ? "colorA" : "colorR"}>
          {status}
        </span>
        !
      </h3>
    </>
  );
}
