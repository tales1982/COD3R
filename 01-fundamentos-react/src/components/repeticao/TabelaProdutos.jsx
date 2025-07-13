import produtos from "../data/produtos";
import "../../styles/TabelaProdutos.css";

export default function TabelaProdutos() {
  const listaProdutos = produtos.map((produto) => (
    <tr key={produto.id}>
      <td>{produto.id}</td>
      <td>{produto.name}</td>
      <td>{produto.price.toFixed(2)}</td>
    </tr>
  ));

  return (
    <div className="tabela-container">
      <table className="tabela-produtos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos}
        </tbody>
      </table>
    </div>
  );
}
