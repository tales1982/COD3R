import { Component } from "react";

class ComponentClasse extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,  // inicializa o passo
  };

  incrementarValor = () => {
    this.setState((state) => ({
      numero: state.numero + state.passo,
    }));
  };

  decrementarValor = () => {
    this.setState((state) => ({
      numero: state.numero - state.passo,
    }));
  };

  alterarPasso = (e) => {
    // converte para número e atualiza o passo no state
    const novoPasso = parseInt(e.target.value, 10) || 0;
    this.setState({ passo: novoPasso });
  };

  render() {
    const { numero, passo } = this.state;

    return (
      <div>
        <h2>Componente de Classe</h2>
        <div style={{ padding: "5px", gap: "5px" }}>
          <h3>Contador</h3>

          <p>Valor atual: {numero}</p>

          {/* Campo para definir o passo */}
          <div style={{ marginBottom: "0.5rem" }}>
            <label>
              Passo:&nbsp;
              <input
                type="number"
                value={passo}
                onChange={this.alterarPasso}
                style={{ width: "60px" }}
              />
            </label>
          </div>

          {/* Botões de + e – */}
          <button
            onClick={this.incrementarValor}
            style={{
              padding: "5px",
              margin: "0 5px",
              width: "30px",
              background: "#1499D3",
              color: "white",
              borderRadius: "50px",
            }}
          >
            +
          </button>

          <button
            onClick={this.decrementarValor}
            style={{
              padding: "5px",
              margin: "0 5px",
              width: "30px",
              background: "#1499D3",
              color: "white",
              borderRadius: "50px",
            }}
          >
            –
          </button>
        </div>
      </div>
    );
  }
}

export default ComponentClasse;
