# 07 · O harness

Temos um engenheiro muito bem preparado. Mas inteligência sozinha não executa trabalho.

Ele precisa de um ambiente.

Um terminal. Um repositório. Acesso aos arquivos. Ferramentas de busca. Capacidade de executar testes. Permissão para editar código. Alguma forma de receber resultados e continuar trabalhando.

Esse ambiente é o **harness**.

## O harness não é o agente

É importante separar as coisas.

O modelo de linguagem fornece capacidade de raciocínio e geração.

O agente é essa capacidade aplicada a uma responsabilidade, dentro de um contexto, usando ferramentas e seguindo regras.

O harness fornece o ambiente operacional que permite esse trabalho acontecer.

```text
LLM
capacidade cognitiva
       │
       ▼
Agente
responsabilidade + contexto + regras
       │
       ▼
Harness
ferramentas + execução + ambiente + feedback
```

Na prática, as fronteiras entre esses termos variam conforme a ferramenta. O objetivo aqui não é criar uma taxonomia religiosa. É separar conceitos que costumam ser misturados.

## O que o harness permite

Um agente de desenvolvimento pode precisar de:

- sistema de arquivos;
- shell;
- Git;
- testes automatizados;
- navegador ou APIs;
- acesso a documentação;
- mecanismos de observabilidade;
- memória ou artefatos persistentes;
- outros agentes.

Sem essas capacidades, ele pode até produzir uma boa sugestão, mas não consegue operar sobre o sistema com autonomia.

## A autonomia tem limites

Dar ferramentas a um agente não significa dar acesso irrestrito.

O harness também é onde colocamos controles:

- quais arquivos podem ser alterados;
- quais comandos podem ser executados;
- quais credenciais estão disponíveis;
- quais ambientes podem ser acessados;
- quando uma aprovação humana é necessária.

A pergunta deixa de ser apenas:

> “O modelo é inteligente?”

E passa a ser:

> “Que ações esse sistema consegue realizar e como sabemos que elas são seguras?”

## Agora ele consegue trabalhar

Nosso engenheiro possui:

```text
Constituição   → como decidir
Instruções     → como trabalhar
Skills         → como executar
Contexto       → onde está e por quê
Missão         → o que fazer agora
Harness        → com o que pode trabalhar
```

Falta uma propriedade importante: ele precisa conseguir verificar o próprio trabalho e reagir ao resultado.

## A pergunta do engenheiro novo

> “Beleza. Agora eu tenho ambiente, ferramentas e uma missão. Mas como eu sei se o que fiz funcionou? Se der errado, eu paro ou tento outra coisa?”

É isso que vamos explorar no loop de execução.
