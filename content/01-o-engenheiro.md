# Capítulo 1: O engenheiro

Vamos voltar ao cenário inicial.

Você contratou o melhor engenheiro de software do mundo. Ele está sentado na sua frente e pergunta:

> “O que você quer que eu faça?”

Você responde:

> “Precisamos criar um cadastro de usuários.”

Agora temos uma demanda que parece concreta. Ainda assim, o pedido está longe de descrever uma funcionalidade pronta para entrar em produção.

O que significa “cadastro de usuários” nesse produto? Quem pode criar um usuário? Quais dados podem ser armazenados? Como funciona a autenticação? Há requisitos de segurança ou privacidade? Existe uma experiência de cadastro no aplicativo? Já existe uma API que podemos aproveitar? Como sabemos que a entrega está correta?

O engenheiro consegue começar a trabalhar. Mas, sem essas respostas, ele também precisa inventar uma parte importante do problema.

## O que você teria vontade de contar a ele?

Pense por alguns minutos antes de continuar.

Você provavelmente começaria a explicar o produto, o público que usa a funcionalidade, a arquitetura existente e as restrições do ambiente. Também precisaria contar quais padrões a equipe segue, quais decisões já foram tomadas e como a solução será validada.

Perceba o que aconteceu.

Você não aumentou a inteligência do engenheiro. Você aumentou a quantidade de informação e de regras disponíveis para ele tomar decisões.

E o exemplo do cadastro vai continuar conosco durante o encontro. A cada nova peça que adicionarmos, aquele pedido simples vai ganhar mais precisão até chegar perto de uma entrega de verdade.

Esse é um dos pontos centrais do encontro:

> **Um profissional excelente ainda precisa de um ambiente de trabalho bem definido.**

Com agentes acontece a mesma coisa.

## Uma primeira distinção

É tentador chamar o modelo de linguagem de “agente”. Para este encontro, vamos separar as duas coisas.

O **LLM** é a capacidade cognitiva. Ele pode raciocinar, escrever, analisar e propor soluções.

O **agente** é essa capacidade colocada dentro de uma responsabilidade e de um ambiente de trabalho.

Essa diferença parece pequena no começo. Ela fica importante quando começamos a colocar mais de um agente para trabalhar no mesmo problema.

## A pergunta do engenheiro novo

> “Beleza. Então eu tenho um pedido inicial, mas ainda preciso entender como vocês tomam decisões aqui. O que vocês usam para orientar essas decisões?”

É aqui que entra a nossa primeira peça: a **Constituição**.
