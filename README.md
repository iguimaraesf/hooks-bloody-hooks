# Hooks... bloody hooks

Este projeto serve para aprender cada um dos tipos de hook do React.\
Ele é a sequência do [Tutorial sobre hooks](https://www.youtube.com/watch?v=LlvBzyy-558&t=0) do PedroTech. Também tem um "catado" de tutoriais que explicam algumas pontas que ficaram soltas.

## UseState

Muda o estado de um trecho de HTML.\
Pode ser em uma variável ou em um campo de um formulário.

## UseReducer

É usado quando há mais do que um estado que muda ao mesmo tempo.\
Concentra a lógica de decisão em um único ponto de chamada.\
O exemplo usa ifs encadeados, mas profissionalmente se usaria o padrão Visitor, por exemplo.

## UseEffect

Este [vídeo](https://www.youtube.com/watch?v=Zw4lJqBphvA) mostra que, na versão 18 do React,
o useEffect não é feito para tratar chamadas http. Ao invés disso, use <b>React Query</b>. Há uma explicação neste [vídeo](https://www.youtube.com/watch?v=46vKqPlTW2w0).

Leia os casos em que [não precisa](https://beta.reactjs.org/learn/you-might-not-need-an-effect) de useEffect.
