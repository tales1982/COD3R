import "../src/styles/index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Cards from "./components/layout/Cards";
import Card from "./components/layout/Cards";
import "../src/styles/App.css";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import ComponentClasse from "./components/componenteClasse/ComponenteClasse";
import MegaSena from "./components/desafio/MegaSena";

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

        <Cards titulo="#2 Desafio Aleatorio" color="#FA6900">
          <NumeroAleatorio valorMin={10} valorMax={100} />
        </Cards>

        <Cards titulo="#3 Componentes com filho" color="#1ba50f">
          <Familia surname="Lima de Paula">
            <FamiliaMembro name="Tales" />
            <FamiliaMembro name="Theo" />
            <FamiliaMembro name="Tomas" />
            <FamiliaMembro name="Alex" />
            <FamiliaMembro name="Adria" />
            <FamiliaMembro name="Camily" />
            <FamiliaMembro name="Gabriel" />
            <FamiliaMembro name="Thierry" surname="Da Silva  Moreira" />
            <FamiliaMembro name="Gabriel" surname="Da Silva  Moreira" />
          </Familia>
        </Cards>

        <Cards titulo="#4 Lista de alunos  -- (MAP)" color="#260cb8">
          <ListaAlunos />
        </Cards>

        <Cards titulo="#5 Tabela de Produtos  -- (MAP)" color="#093f2f">
          <TabelaProdutos />
        </Cards>

        <Cards titulo="#6 Rederizacao Condicional-1" color="#05999e">
          <ParOuImpar condicao={20} />
          <ParOuImpar condicao={21} />
          <ParOuImpar condicao={25} />
          <ParOuImpar condicao={22} />
          <ParOuImpar condicao={29} />
          <ParOuImpar condicao={210} />
        </Cards>

        <Cards titulo="#7 Rederizacao Condicional-2" color="#982395">
          <UsuarioInfo name="Tales" />
          <hr />
          <UsuarioInfo name="Thierry" />
          <hr />
          <UsuarioInfo name="Carlos" />
        </Cards>

        <Cards titulo="#8 Comunicacao Direta" color="#027df0">
          <DiretaPai />
        </Cards>

        <Cards titulo="#9 Comunicacao Indireta" color="#7c7a03">
          <IndiretaPai />
        </Cards>

        <Cards titulo="#10 Componente criado com classes" color="#280446">
          <ComponentClasse numeroInicial={10}/>
        </Cards>

        <Cards titulo="#11 Dessafio numeros MegaSena" color="#3d2403">
          <MegaSena valorMin={1} valorMax={60} quantity={6}/>
        </Cards>
      </div>
    </div>
  );
};
