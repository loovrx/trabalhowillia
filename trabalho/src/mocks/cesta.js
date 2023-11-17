import logo from '../../assets/frutas/logo.png';

import tenisesportivo from '../../assets/frutas/tenisesportivo.png';
import tenis from '../../assets/frutas/tenis.png';
import sandalia from '../../assets/frutas/sandalia.png';
import bota from '../../assets/frutas/bota.png';
import coturno from '../../assets/frutas/coturno.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Produtos",
    logoFazenda: logo,
    nomeFazenda: "Shoe Store",
    descricao: "Uma cesta com os melhores calçados",
    preco: "R$ 750,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tênis esportivo",
        imagem: tenisesportivo,
      },
      {
        nome: "Tênis casual ",
        imagem: tenis,
      },
      {
        nome: "Sandalia ",
        imagem: sandalia,
      },
      {
        nome: "Bota",
        imagem: bota,
      },
      {
        nome: "Coturno",
        imagem: coturno,
      }
    ]
  }
}

export default cesta;