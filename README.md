## Conexão wallet
![Captura de tela 2023-07-10 095011](https://github.com/caiofaabio/metamask/assets/109986771/e7a8fc8a-4632-4b84-b9b1-3a01e5de0cd0)

Este projeto utiliza a biblioteca Wagmi para permitir a conexão e interação com contas Ethereum. Ele fornece um componente simples de perfil que exibe o endereço Ethereum do usuário, o nome ENS associado e o status da conexão.
Tecnologias Utilizadas

## O projeto utiliza as seguintes tecnologias:

-    React: O projeto é construído utilizando a biblioteca React, um framework JavaScript popular para construção de interfaces de usuário.
-    Wagmi: Wagmi é uma biblioteca para conectar e interagir com contas Ethereum de forma descentralizada. Ela fornece hooks e utilitários para gerenciar contas Ethereum, conectar a carteiras e recuperar informações do ENS (Ethereum Name Service).

## Funções e Componentes
# Profile

O componente Profile é responsável por exibir as informações de perfil do usuário. Ele utiliza diversos hooks fornecidos pelo Wagmi para recuperar e gerenciar detalhes da conta e da conexão. Veja a descrição das funções e variáveis utilizadas no componente:

 -   useAccount: Esse hook fornece informações sobre a conta Ethereum conectada, incluindo o endereço da conta, o conector da carteira conectada e o status da conexão.
  -  useEnsAvatar: Esse hook recupera o avatar do ENS associado à conta conectada.
  -  useEnsName: Esse hook recupera o nome ENS associado à conta conectada.
  -  useConnect: Esse hook gerencia o processo de conexão e fornece funções e variáveis relacionadas à conexão com diferentes provedores de carteira.
  -  useDisconnect: Esse hook fornece uma função para desconectar a conexão da carteira atual.
  -  formatWalletAddress: Essa função formata o endereço da conta Ethereum, exibindo apenas os primeiros 4 caracteres e os últimos 4 caracteres, com reticências no meio.

O componente Profile renderiza condicionalmente elementos diferentes com base no status da conexão. Se houver uma conexão, ele exibe o avatar ENS do usuário (comentado no trecho de código), o nome ENS (se disponível) juntamente com o endereço Ethereum formatado e o nome do conector da carteira conectada. Também oferece um botão para desconectar a carteira.

Se não houver conexão, o componente exibe uma lista de conectores de carteira disponíveis. Cada conector é renderizado como um botão e mostra o nome do conector. Os botões desabilitados indicam conectores não suportados, e se houver uma conexão em andamento, o botão correspondente exibe um estado de carregamento. Se ocorrer algum erro durante o processo de conexão, ele é exibido abaixo dos conectores de carteira.
Home

O componente Home serve como o ponto de entrada principal do aplicativo. Ele renderiza o componente Profile dentro de um elemento main e fornece um título para a página.
