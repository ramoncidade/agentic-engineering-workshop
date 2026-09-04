# 03 · As instruções

O engenheiro já sabe **como decidir**. Agora precisamos dizer **como trabalhar neste ambiente**.

Imagine que ele entrou em uma equipe e ouviu:

- usamos Java e Spring Boot neste produto;
- todo endpoint precisa de timeout;
- mudanças relevantes precisam de testes;
- segredos não ficam no código;
- antes de introduzir uma tecnologia nova, explique o problema que ela resolve;
- decisões arquiteturais importantes precisam ser registradas.

Isso não é conhecimento genérico de engenharia. São regras do lugar onde ele está trabalhando.

## Constituição e instruções não são a mesma coisa

A Constituição responde:

> **Que tipo de decisão queremos tomar?**

As instruções respondem:

> **Como trabalhamos aqui?**

Uma Constituição pode dizer:

> Prefira soluções simples quando elas atenderem ao objetivo.

Uma instrução pode dizer:

> Neste projeto, novos serviços devem usar o padrão de observabilidade definido pela plataforma.

A primeira continua válida mesmo que a tecnologia mude. A segunda pode mudar quando o ambiente mudar.

## Voltando ao cadastro

Agora essas regras começam a afetar uma decisão concreta.

Se o cadastro precisar de uma nova integração HTTP, o engenheiro já sabe que não deve simplesmente escrever a chamada e seguir em frente. Ele precisa aplicar os padrões de timeout, observabilidade, testes e tratamento de segredos definidos pela equipe.

O pedido continua sendo o mesmo. O jeito de executá-lo mudou.

## O problema do excesso de instruções

Existe uma tentação quando começamos a trabalhar com agentes: documentar tudo.

Cinquenta páginas de regras não transformam um agente em um engenheiro melhor. Podem apenas tornar difícil descobrir quais regras realmente importam.

Uma boa instrução deve existir porque muda uma decisão ou evita um erro relevante.

Pergunte:

> **Se eu remover esta regra, o agente provavelmente fará algo diferente e pior?**

Se a resposta for não, talvez ela não precise estar ali.

## Um teste simples

Considere estas duas instruções:

> Escreva código limpo, organizado e de boa qualidade.

> Ao criar uma integração HTTP, configure timeout explícito, política de retry apenas para operações idempotentes e métricas de latência e erro.

A segunda é muito mais útil para um agente. Ela reduz ambiguidade e aponta para uma decisão verificável.

A primeira expressa uma intenção válida, mas deixa quase tudo para interpretação.

## No nosso engenheiro novo

Agora temos duas peças:

```text
Constituição
    ↓
Como decidimos

Instruções
    ↓
Como trabalhamos aqui
```

O cadastro de usuários já deixou de ser apenas uma frase. O engenheiro começa a ter critérios para escolher como implementá-lo.

Mas ainda falta uma coisa.

Saber **o que fazer** não significa necessariamente saber **como executar uma tarefa recorrente**.

## A pergunta do engenheiro novo

> “Beleza. Eu já sei quais regras seguir. Mas quando existe uma atividade que fazemos toda hora, vocês têm algum procedimento para isso ou cada pessoa faz do seu jeito?”

É aí que entram as **Skills**.
