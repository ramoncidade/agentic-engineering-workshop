# Exercício 2 — Quebre o problema, não o prompt

## Objetivo

Praticar uma das mudanças mais importantes do trabalho com agentes: transformar uma demanda grande em unidades de trabalho que possam ser executadas com autonomia, verificadas e, quando fizer sentido, executadas em paralelo.

## O cenário

Imagine que o time recebeu esta demanda:

> **Adicionar uma nova jornada de cadastro de clientes.**

O produto precisa funcionar no aplicativo e na web. O backend já existe, mas algumas APIs precisarão ser alteradas. Há requisitos de segurança, observabilidade e testes.

Você é o responsável técnico pela entrega.

A primeira reação costuma ser:

> “Vou abrir o projeto e pedir para um agente implementar.”

Pare aqui.

Seu trabalho agora não é escrever o prompt. É desenhar o trabalho.

## Parte 1 — Encontre as fronteiras

Em grupos, liste tudo que precisa ser descoberto ou produzido antes de considerar a demanda pronta.

Não tente criar agentes ainda.

Perguntas úteis:

- O que já existe?
- O que precisa ser entendido antes de alterar código?
- Quais partes são independentes?
- Quais partes dependem de outras?
- Onde existem riscos?
- O que precisa ser validado?
- O que pode ser feito em paralelo?
- O que precisa de uma decisão humana?

## Parte 2 — Monte o grafo de trabalho

Organize as atividades como dependências.

Exemplo simplificado:

```text
Descobrir arquitetura
        |
        +------> Definir contrato da API
        |                  |
        |                  +------> Implementar backend
        |                                      |
        +------> Definir jornada web ---------+
        |                                      |
        +------> Definir jornada mobile ------+
                                               |
                                      Testes de integração
                                               |
                                          Revisão final
```

O objetivo não é produzir o grafo perfeito. É tornar visível o que depende de quê.

## Parte 3 — Decida onde colocar agentes

Agora escolha quais atividades seriam executadas por agentes e quais permaneceriam sob responsabilidade humana.

Para cada unidade, responda:

| Campo | Pergunta |
|---|---|
| Resultado | O que precisa existir ao final? |
| Contexto | O que o executor precisa saber? |
| Dependências | O que precisa acontecer antes? |
| Autonomia | O agente pode decidir sozinho? |
| Evidência | Como saberemos que terminou bem? |
| Risco | O que pode dar errado? |
| Integração | Quem consumirá esse resultado? |

## Parte 4 — Procure o paralelismo

Marque as atividades que podem acontecer simultaneamente.

Depois pergunte:

> O paralelismo realmente reduz o tempo total ou apenas cria mais coordenação?

Esse ponto é importante. Colocar cinco agentes em uma tarefa que poderia ser resolvida por um agente não é orquestração. É overhead distribuído.

## Parte 5 — Compare as duas abordagens

### Abordagem A

Um único agente recebe:

> “Implemente toda a jornada de cadastro, incluindo backend, web, mobile, testes e observabilidade.”

### Abordagem B

O trabalho é dividido em unidades com fronteiras claras, por exemplo:

- descoberta da arquitetura atual;
- contrato e decisões de API;
- implementação backend;
- implementação web;
- implementação mobile;
- estratégia e execução de testes;
- revisão de segurança;
- revisão arquitetural.

Discuta:

1. Qual abordagem produz melhor contexto para cada executor?
2. Onde a abordagem B introduz dependências?
3. Quais resultados precisam ser compartilhados entre agentes?
4. Quais decisões não deveriam ser delegadas?
5. O que o arquiteto precisa acompanhar?

## O aprendizado

Uma boa decomposição possui três propriedades:

1. **Cada unidade tem um resultado observável.**
2. **As fronteiras reduzem a quantidade de contexto desnecessário.**
3. **As dependências são explícitas.**

A partir daí, o prompt deixa de ser o centro do desenho.

Ele passa a ser apenas a missão de uma unidade de trabalho.

> **Orquestração começa quando você desenha o trabalho antes de distribuir o trabalho.**
