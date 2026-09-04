# 06 · A missão

Finalmente chegamos à pergunta que iniciou tudo:

> **O que precisa ser feito?**

A missão é o pedido concreto que coloca o trabalho em movimento.

Um bom contexto não substitui uma boa missão. E uma missão detalhada não compensa a ausência de contexto.

## Voltando ao cadastro

Agora temos contexto suficiente para transformar o pedido inicial em uma missão de trabalho.

Em vez de simplesmente:

> “Crie um cadastro de usuários.”

podemos chegar a algo como:

> “Implemente a jornada de cadastro de usuários para o aplicativo atual, reutilizando o serviço de identidade existente. O cliente não pode receber credenciais internas. Preserve os contratos existentes e siga os padrões de segurança e observabilidade do projeto. A entrega deve incluir API, validações, tratamento dos principais erros e testes necessários para comprovar o fluxo.”

Ainda podemos descobrir detalhes durante a execução. A diferença é que agora existe um resultado esperado e limites claros.

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

> “Crie um cadastro de usuários.”

**Pedido B**

> “Implemente a jornada de cadastro de usuários no aplicativo atual. Reutilize o serviço de identidade existente, preserve os contratos atuais e não exponha credenciais internas ao cliente. Inclua validações, tratamento de erros e testes do fluxo principal. Considere a entrega concluída quando o fluxo puder ser executado de ponta a ponta e as validações definidas pelo projeto estiverem passando.”

O segundo pedido não é melhor porque tem mais palavras.

Ele é melhor porque transforma uma intenção vaga em um resultado observável e deixa explícitas as principais restrições.

## Uma missão também pode ser pequena

Uma missão para um agente pode ser:

> “Analise a API do cadastro e encontre riscos de compatibilidade. Não altere arquivos. Entregue os riscos classificados por severidade e indique como validaria cada um.”

Observe que a missão também define limites. O agente não foi convidado a corrigir o código.

Isso é importante quando existem vários agentes trabalhando juntos.

## Missões compõem trabalho maior

O cadastro de usuários parece uma única funcionalidade para quem olha de fora. Na execução, pode envolver várias frentes:

```text
Cadastro de usuários
       │
       ├── entender contexto existente
       ├── definir fluxo e contratos
       ├── implementar backend
       ├── implementar experiência no cliente
       ├── analisar segurança
       ├── criar testes
       └── revisar a entrega
```

Cada parte pode receber uma missão própria quando houver uma boa fronteira de responsabilidade.

É aqui que começamos a sair do modelo “uma pessoa conversa com uma IA” e entramos no modelo “um sistema organiza trabalho entre executores”.

## A pergunta do engenheiro novo

> “Beleza. Agora eu tenho contexto e sei qual é a missão. Com o que eu consigo trabalhar aqui? Onde estão meus arquivos, ferramentas e testes?”

Nosso engenheiro já sabe o que fazer. Agora precisamos dar a ele um ambiente para executar o trabalho.
