# Lista de 101 exercícios sobre React.js, organizada de forma gradativa, abordando desde o básico até o uso de hooks avançados

### Fundamentos do React.js

1. **Instalação do React**: Instale o React usando `create-react-app`.
2. **Hello World**: Crie um componente que exibe "Hello World".
3. **JSX**: Escreva um componente que exibe uma frase dentro de um elemento `h1` usando JSX.
4. **Renderizar Vários Componentes**: Crie dois componentes e renderize-os na mesma página.
5. **Props**: Crie um componente que receba uma prop de texto e a exiba em um `h1`.
6. **Props de objeto**: Passe um objeto como prop e use-o dentro do componente.
7. **Componente Funcional e Componente Classe**: Crie um componente de classe e um funcional que renderizem o mesmo
   conteúdo.
8. **State em Classe**: Crie um componente de classe com estado e exiba o estado em um `h1`.
9. **Atualizar State**: Adicione um botão para alterar o estado e exibir o valor atualizado.
10. **Eventos**: Adicione um evento `onClick` para alterar o estado em resposta ao clique de um botão.
11. **Condicionais com `if`**: Renderize conteúdo condicionalmente com base no estado.
12. **Condicionais com operador ternário**: Renderize conteúdo condicional usando um operador ternário.
13. **Mapear uma lista**: Renderize uma lista de itens usando o método `map()`.
14. **Chave no mapeamento**: Adicione uma chave única a cada item da lista ao usar o `map()`.
15. **Estilos inline**: Adicione estilos inline aos elementos JSX.
16. **Estilos externos**: Importe e aplique uma folha de estilos externa.
17. **Formulário simples**: Crie um formulário com um campo de texto e um botão.
18. **Manipulação de Formulário**: Capture e exiba o valor inserido em um campo de texto.
19. **Componente Controlado**: Transforme o campo de texto em um componente controlado.
20. **Componente Não Controlado**: Crie um componente de formulário não controlado.
21. **State lifting**: Passe dados de um filho para o pai através do `setState`.

### Prática Intermediária

22. **PropTypes**: Adicione `PropTypes` para verificar o tipo das props.
23. **Default Props**: Defina props padrão para um componente.
24. **Fragmentos React**: Utilize `React.Fragment` para renderizar múltiplos elementos sem um contêiner extra.
25. **Componentes filhos**: Renderize conteúdo entre tags de abertura e fechamento de um componente.
26. **Comunicação entre componentes**: Passe uma função do componente pai para o filho e invoque-a.
27. **Renderização Condicional**: Use um componente condicional para alternar entre dois estados de exibição.
28. **Iteração sobre objetos**: Renderize uma tabela com base em um objeto de dados.
29. **Eventos de Formulário**: Capture o evento `onSubmit` de um formulário e previna o comportamento padrão.
30. **Ref em componente de classe**: Utilize `ref` para acessar diretamente um elemento DOM.
31. **ComponentDidMount**: Use o método de ciclo de vida `componentDidMount` para buscar dados.
32. **ComponentDidUpdate**: Utilize o método `componentDidUpdate` para realizar ações quando o estado ou as props mudam.
33. **ComponentWillUnmount**: Use `componentWillUnmount` para realizar uma limpeza antes que o componente seja
    destruído.
34. **Renderização condicional com operador lógico**: Renderize componentes usando o operador `&&` para verificações
    booleanas.
35. **Requisição HTTP com `fetch`**: Faça uma requisição HTTP com `fetch` e exiba os dados retornados.
36. **Promises com `fetch`**: Lide com `then` e `catch` ao fazer uma requisição HTTP.
37. **Componente de erro**: Crie um componente que mostre uma mensagem de erro se a requisição HTTP falhar.
38. **Spinner de carregamento**: Adicione um indicador de carregamento enquanto os dados estão sendo buscados.
39. **State lifting avançado**: Passe dados de um componente filho para o pai através de callbacks.
40. **Prop Drilling**: Passe props para componentes em níveis profundos da árvore de componentes.
41. **Renderização condicional com `switch`**: Use um `switch` para renderizar diferentes componentes com base no
    estado.
42. **Composição de Componentes**: Crie componentes pequenos que podem ser combinados para formar uma interface.
43. **Reutilização de Componentes**: Crie componentes reutilizáveis com diferentes props.
44. **Gerenciamento de erro**: Implemente captura de erros usando `try...catch` no `componentDidCatch`.

### Introdução aos Hooks

45. **useState**: Use o hook `useState` para criar e alterar o estado dentro de um componente funcional.
46. **useEffect**: Utilize `useEffect` para buscar dados de uma API.
47. **useEffect com dependências**: Controle a execução do `useEffect` usando o array de dependências.
48. **Limpeza no `useEffect`**: Adicione uma função de limpeza dentro do `useEffect` para executar ao desmontar o
    componente.
49. **useEffect para eventos de clique**: Adicione e remova um listener de clique no `useEffect`.
50. **useContext**: Utilize o hook `useContext` para compartilhar estado global entre componentes.
51. **useReducer**: Use `useReducer` para gerenciar estados complexos.
52. **useRef**: Utilize `useRef` para acessar elementos DOM diretamente.
53. **Persistência com `useRef`**: Armazene valores persistentes entre renderizações usando `useRef`.
54. **useMemo**: Otimize o desempenho de componentes com `useMemo` para memorizar valores.
55. **useCallback**: Use `useCallback` para memorizar funções e evitar renderizações desnecessárias.
56. **Hook personalizado**: Crie um hook personalizado para encapsular lógica de repetição.
57. **Hook de fetch**: Crie um hook personalizado que faça uma requisição HTTP e retorne os dados.
58. **Hook de formulário**: Crie um hook personalizado para gerenciar o estado de um formulário.
59. **useEffect com timer**: Use `useEffect` para criar um timer com `setTimeout` ou `setInterval`.
60. **Múltiplos estados com `useState`**: Gerencie vários pedaços de estado em um componente com múltiplos `useState`.
61. **Combinar hooks**: Combine `useState` e `useEffect` para buscar dados e atualizar o estado.
62. **Desmembramento de estados**: Use arrays e objetos como valores no estado com `useState`.
63. **Gerenciar arrays no estado**: Adicione e remova itens de um array armazenado no estado com `useState`.
64. **Gerenciar objetos no estado**: Atualize propriedades específicas de objetos no estado sem sobrescrever o objeto
    inteiro.
65. **Renderização condicional com hooks**: Use hooks para alternar entre diferentes componentes com base no estado.

### Avançado com Hooks e Performance

66. **useReducer com context**: Combine `useReducer` e `useContext` para gerenciar estados globais.
67. **Contexto de tema**: Crie um contexto para gerenciar o tema da aplicação (modo claro/escuro).
68. **Contexto de autenticação**: Implemente um contexto para gerenciar a autenticação de usuários.
69. **Memoização de componentes**: Utilize `React.memo` para evitar renderizações desnecessárias de componentes.
70. **Memoização de listas**: Use `React.memo` e `useMemo` para otimizar o mapeamento de listas grandes.
71. **Debounce com hooks**: Implemente debounce para atrasar a execução de funções com hooks.
72. **Throttle com hooks**: Implemente throttle para limitar a execução de funções.
73. **Hooks com formulários complexos**: Crie um formulário complexo com validação e gerenciamento de estado com hooks.
74. **Manter estado entre páginas**: Use hooks para manter estado entre diferentes componentes sem recarregar a página.
75. **Hooks com autenticação JWT**: Crie um hook para lidar com autenticação e tokens JWT.
76. **Animações com hooks**: Integre bibliotecas de animação com hooks.
77. **Teste de componentes com hooks**: Escreva testes unitários para componentes que utilizam hooks.
78. **Testar `useEffect`**: Teste o comportamento de `useEffect` em diferentes cenários.
79. **Testar hooks personalizados**: Escreva testes unitários para hooks personalizados.
80. **Lazy loading com hooks**: Implemente carregamento sob demanda de componentes utilizando hooks.
81. **Iniciar múltiplos `useEffect`**: Crie e gerencie múltiplos efeitos colaterais com hooks.

### Projeto Final

82. **Criar um To-Do list**: Desenvolva uma aplicação de lista de tarefas usando `useState` e `useEffect`.
83. **Projeto de Blog**: Crie uma aplicação de blog que busca posts de uma

API com hooks.

84. **Formulário de autenticação**: Desenvolva uma aplicação de login com gerenciamento de autenticação utilizando
    hooks.
85. **Dashboard com hooks**: Crie uma interface de dashboard que exibe dados dinâmicos de uma API.
86. **Tabela de dados com filtros**: Crie uma tabela que permite filtrar e ordenar dados.
87. **Galeria de imagens**: Desenvolva uma galeria de imagens que carrega as fotos a partir de uma API externa.
88. **Sistema de busca com hooks**: Crie uma interface de busca que exibe resultados em tempo real.
89. **Componente de carrinho de compras**: Implemente um carrinho de compras com adição e remoção de itens.
90. **E-commerce básico**: Desenvolva um site de e-commerce com hooks para gerenciamento de produtos e carrinho.
91. **Chat em tempo real**: Desenvolva um chat simples em tempo real utilizando hooks e WebSockets.
92. **CRUD com hooks**: Implemente as operações CRUD (Create, Read, Update, Delete) em uma aplicação com hooks.
93. **Aplicação de clima**: Crie uma aplicação que consome uma API de clima e exibe os dados em tempo real.
94. **Aplicação de agendamento**: Crie um sistema de agendamento com gerenciamento de datas e horários utilizando hooks.
95. **Multi-step Form**: Desenvolva um formulário de múltiplas etapas usando `useState` e `useReducer`.
96. **Testar Projeto To-Do List**: Escreva testes automatizados para validar a funcionalidade da aplicação de lista de
    tarefas.
97. **Testar Projeto Blog**: Escreva testes para garantir o correto funcionamento do blog com hooks.
98. **Testar Componente de Formulário**: Implemente testes de validação e envio de formulários utilizando hooks.
99. **Perfomance Testing**: Teste a performance da aplicação e otimize componentes que utilizam hooks.
100. **Refatorar Projeto E-commerce**: Refatore o código da aplicação de e-commerce, otimizando a utilização de hooks.
101. **Refatorar Chat Real-time**: Otimize o chat em tempo real utilizando técnicas avançadas com hooks.

Essa lista deve cobrir desde os fundamentos do React até tópicos avançados, permitindo um aprendizado profundo e
consistente ao longo dos exercícios.