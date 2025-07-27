import { useState } from "react";

export default function MegaSena() {
  const [valorMin, setValorMin] = useState(1);
  const [valorMax, setValorMax] = useState(60);
  const [quantity, setQuantity] = useState(6);
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  function generateUniqueNumbers() {
    const collection = new Set();
    while (collection.size < quantity) {
      const number = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
      collection.add(number);
    }
    const sortedNumbers = Array.from(collection).sort((a, b) => a - b);
    setNumerosSorteados(sortedNumbers);
  }

  return (
    <>
      <h3>Desafio - Mega Sena</h3>
      <p>Gerador de números aleatórios</p>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Valor mínimo:{" "}
          <input
            type="number"
            value={valorMin}
            onChange={(e) => setValorMin(Number(e.target.value))}
          />
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Valor máximo:{" "}
          <input
            type="number"
            value={valorMax}
            onChange={(e) => setValorMax(Number(e.target.value))}
          />
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Quantidade de números:{" "}
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
      </div>

      <p>
        <strong>Números sorteados:</strong>{" "}
        {numerosSorteados.length > 0 ? numerosSorteados.join(", ") : "Nenhum número ainda"}
      </p>

      <button onClick={generateUniqueNumbers}>Gerar números</button>
    </>
  );
}
