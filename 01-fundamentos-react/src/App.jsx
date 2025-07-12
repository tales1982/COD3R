import "./index.css";
import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Cards from "./components/layout/Cards";
import Card from "./components/layout/Cards";
import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="SectionMain">
      <Primeiro />
      <div className="SectionCards">
        <Card titulo="#1 Componentes com props">
          <ComParametro aluno="Tales" nota={9.7} />
          <ComParametro aluno="Theo" nota={9.9} />
          <ComParametro aluno="Thomas" nota={10} />
          <ComParametro aluno="Thierry" nota={6.7} />
          <ComParametro aluno="Taylor" nota={8.7} />
        </Card>

        <Cards titulo="#2 Desafio Aleatorio" color='#FA6900'>
          <NumeroAleatorio valorMin={10} valorMax={100} />
        </Cards>
      </div>
    </div>
  );
};
