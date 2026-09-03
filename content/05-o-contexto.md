# 05 · O contexto do projeto

Até aqui, nosso engenheiro sabe como decidir, conhece as regras da equipe e possui procedimentos reutilizáveis.

Agora ele precisa descobrir onde está pisando.

Contexto é a informação que explica o projeto: **o que existe, por que existe, quem é afetado, quais são as restrições e como saberemos que deu certo**.

## Contexto não é documentação acumulada

Um projeto pode ter centenas de documentos e ainda assim não ter contexto suficiente para uma tarefa.

O que importa é conseguir responder perguntas como:

- Qual problema estamos tentando resolver?
- Por que ele importa agora?
- Quem usa ou depende dessa solução?
- Como a arquitetura funciona hoje?
- Quais restrições não podemos ignorar?
- Que decisões já foram tomadas?
- Quais riscos conhecemos?
- Como vamos validar o resultado?

Contexto bom reduz o espaço de soluções erradas.

## O mesmo pedido pode gerar soluções diferentes

Imagine que a missão seja:

> “Crie uma API para consultar pedidos.”

Sem contexto, o agente pode escolher praticamente qualquer arquitetura.

Agora acrescente:

> A API será usada por um aplicativo mobile já existente. O backend precisa suportar picos de tráfego. O cliente não pode conhecer credenciais internas. Existe um BFF responsável pelas regras de negócio e há uma plataforma corporativa de observabilidade.

A tarefa continua sendo “criar uma API”, mas o espaço de decisão mudou completamente.

## Contexto também inclui o que não fazer

Restrições são parte do contexto.

Por exemplo:

```text
Objetivo
    Reduzir o tempo de resposta da jornada

Restrições
    Não alterar o contrato público
    Não adicionar uma nova base de dados
    Manter compatibilidade com o aplicativo atual

Sucesso
    P95 abaixo de 300 ms
    Testes de regressão passando
```

Isso é muito mais útil para um agente do que simplesmente entregar um documento enorme sobre o sistema.

## O contexto precisa sobreviver ao agente

Uma característica importante de um sistema agentic é que o conhecimento relevante não deveria depender da memória de uma única conversa.

Se o agente A começa uma investigação e o agente B continua o trabalho, o contexto essencial precisa estar disponível para B.

Isso muda a forma como pensamos documentação.

Não estamos documentando apenas para humanos que vão ler depois. Estamos criando **memória operacional para o sistema de trabalho**.

## Agora temos o cenário completo

```text
Constituição
    Como decidimos
        ↓
Instruções
    Como trabalhamos aqui
        ↓
Skills
    Como executamos atividades recorrentes
        ↓
Project Context
    Onde estamos e por que
```

Falta apenas uma coisa para colocar o engenheiro em movimento:

> **O que exatamente você quer que ele faça agora?**

Essa é a missão.
