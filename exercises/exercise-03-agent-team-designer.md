# Exercício 3 — Desenhe seu time de agentes

## Objetivo

Sair da ideia de “vários agentes” e aprender a projetar um time com responsabilidades, fronteiras, dependências e critérios de qualidade.

## O desafio

Você recebeu uma demanda que envolve:

- uma API existente;
- uma nova jornada web;
- integração com um serviço externo;
- requisitos de segurança;
- observabilidade;
- testes automatizados;
- uma decisão arquitetural que ainda não está fechada.

Você tem acesso a vários agentes, mas não quer simplesmente criar um agente para cada tecnologia.

Sua missão é desenhar o time.

## Regra principal

> **Um agente deve existir porque existe uma responsabilidade que precisa ser assumida, e não porque existe uma tecnologia.**

Evite começar com:

- “agente Java”;
- “agente React”;
- “agente Kafka”.

Comece com perguntas como:

- Quem precisa descobrir o que já existe?
- Quem propõe a arquitetura?
- Quem implementa?
- Quem valida segurança?
- Quem verifica qualidade?
- Quem integra os resultados?

## Etapa 1 — Defina as responsabilidades

Crie entre 3 e 6 agentes.

Para cada um, defina:

```text
Nome:
Responsabilidade:
O que ele pode decidir:
O que ele não pode decidir:
Entradas:
Saídas:
Dependências:
Critérios de qualidade:
```

## Etapa 2 — Dê uma identidade operacional

Agora conecte cada agente ao modelo apresentado durante o workshop.

| Elemento | Pergunta |
|---|---|
| Constituição | Quais princípios devem orientar suas decisões? |
| Instruções | Quais regras de trabalho ele precisa seguir? |
| Skills | Quais capacidades reutilizáveis ele precisa executar? |
| Contexto | O que ele precisa conhecer do projeto? |
| Missão | Qual resultado específico ele deve entregar? |
| Evidência | Como ele provará que terminou corretamente? |
| Ferramentas | De quais ferramentas ele precisa? |

O objetivo é perceber que “criar um agente” não significa apenas escrever uma personalidade.

## Etapa 3 — Faça os agentes se entrevistarem

Escolha dois agentes e simule uma conversa entre eles.

O primeiro deve fazer perguntas que o segundo precisa responder antes de começar o trabalho.

Exemplo:

```text
Arquitetura:
“Qual contrato você pretende alterar?”

Implementação:
“Antes de responder, preciso saber qual comportamento atual é obrigatório preservar.”

Arquitetura:
“Então sua primeira entrega não deve ser código. Deve ser o levantamento do comportamento atual.”
```

A conversa deve revelar informação faltante, dependências ou riscos.

## Etapa 4 — Defina o protocolo de passagem

Um agente não deve entregar apenas “terminei”.

Defina o que será passado ao próximo agente.

Por exemplo:

```text
Resultado:
Decisões:
Arquivos alterados:
Testes executados:
Evidências:
Riscos conhecidos:
Questões em aberto:
```

Isso transforma uma sequência de agentes em um sistema de trabalho.

## Etapa 5 — O arquiteto entra em cena

Agora responda:

1. Quais decisões continuam com o humano?
2. Em que pontos o arquiteto precisa intervir?
3. Qual agente pode bloquear a execução de outro?
4. Qual resultado precisa ser revisado antes de seguir?
5. O que aconteceria se um agente produzisse um resultado tecnicamente correto, mas incompatível com a estratégia do projeto?

## Debrief

Compare os times criados pelos grupos.

Observe especialmente:

- quantidade de agentes;
- sobreposição de responsabilidades;
- fronteiras pouco claras;
- dependências desnecessárias;
- excesso de autonomia;
- ausência de evidências;
- decisões que foram delegadas sem critério.

### Pergunta final

> **Se amanhã trocarmos o modelo de linguagem, o time ainda fará sentido?**

Se a resposta for sim, provavelmente vocês desenharam responsabilidades reais.

Se a resposta for não, talvez tenham desenhado personas para um modelo específico.
