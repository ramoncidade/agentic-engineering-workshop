# 06 · A missão

Finalmente chegamos à pergunta que iniciou tudo:

> **O que precisa ser feito?**

A missão é o pedido concreto que coloca o trabalho em movimento.

Um bom contexto não substitui uma boa missão. E uma missão detalhada não compensa a ausência de contexto.

## Missão não é um prompt mágico

Quando falamos de IA, é comum imaginar que existe uma formulação perfeita capaz de fazer o modelo produzir o resultado certo.

Essa visão coloca peso demais nas palavras do pedido.

Uma missão melhor funciona como uma ordem de trabalho:

```text
Objetivo
    O resultado que queremos

Contexto relevante
    O que o executor precisa saber

Restrições
    O que não pode ser violado

Critérios de aceite
    Como saberemos que terminou bem

Estratégia de validação
    Como vamos verificar o resultado
```

Não é necessário escrever tudo isso toda vez. A quantidade de informação deve acompanhar a complexidade da tarefa.

## Compare dois pedidos

**Pedido A**

> “Melhore o endpoint de pagamentos.”

**Pedido B**

> “Reduza a latência do endpoint de pagamentos. Preserve o contrato atual. Não altere o mecanismo de autenticação. Investigue primeiro onde está o gargalo. Considere a mudança concluída quando o P95 ficar abaixo de 400 ms nos testes de carga existentes e não houver regressão funcional.”

O segundo pedido não é melhor porque tem mais palavras.

Ele é melhor porque transforma uma intenção vaga em um resultado observável.

## Uma missão também pode ser pequena

Uma missão para um agente pode ser:

> “Analise este PR e encontre riscos de compatibilidade. Não altere arquivos. Entregue os riscos classificados por severidade e indique como validaria cada um.”

Observe que a missão também define limites. O agente não foi convidado a corrigir o código.

Isso é importante quando existem vários agentes trabalhando juntos.

## Missões compõem trabalho maior

Uma demanda grande pode ser decomposta:

```text
Missão principal
       │
       ├── descobrir contexto
       ├── propor arquitetura
       ├── implementar
       ├── criar testes
       └── revisar riscos
```

Cada parte pode receber uma missão própria.

É aqui que começamos a sair do modelo “uma pessoa conversa com uma IA” e entramos no modelo “um sistema organiza trabalho entre executores”.

## A pergunta do engenheiro novo

> “Beleza. Agora eu tenho contexto e sei qual é a missão. Com o que eu consigo trabalhar aqui? Onde estão meus arquivos, ferramentas e testes?”

Nosso engenheiro já sabe o que fazer. Agora precisamos dar a ele um ambiente para executar o trabalho.
