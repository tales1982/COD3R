export default function NumeroAleatorio(props) {
  const { valorMin, valorMax } = props;

  // Gera o número uma vez por render
  const numeroAleatorio = parseInt(
    Math.random() * (valorMax - valorMin) + valorMin
  );

  return (
    <>
      <h3>Desafio - 1</h3>
      <p>Sorteador de numero aleatorio passado como props </p>
      <p>
        <strong>valorMin :</strong>
        {valorMin}
      </p>
      <p>
        <strong> valorMax :</strong>
        {valorMax}
      </p>

      <p>
        <strong>Número sorteado:</strong> {numeroAleatorio}
      </p>
    </>
  );
}
