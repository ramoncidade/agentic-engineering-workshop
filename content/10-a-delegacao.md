# 10 · A delegação

Delegar para agentes não é distribuir frases de um prompt entre várias janelas.

É distribuir **responsabilidades e resultados**.

## Comece pelo resultado

Uma decomposição ruim começa assim:

```text
Agente A: faça a parte 1
Agente B: faça a parte 2
Agente C: faça a parte 3
```

A divisão parece organizada, mas não diz por que as partes existem nem como serão reunidas.

Uma decomposição melhor começa pelo objetivo:

```text
Objetivo
  ↓
Resultados necessários
  ↓
Responsabilidades
  ↓
Dependências
  ↓
Missões
  ↓
Evidências
```

## O contrato entre agentes

Uma missão delegada precisa deixar claro pelo menos:

- o que o agente deve produzir;
- o que ele pode alterar;
- o que ele não deve fazer;
- de que contexto depende;
- como sua entrega será validada;
- qual informação o próximo agente precisa receber.

Isso cria uma interface entre agentes.

A entrega de um agente não precisa ser apenas código. Pode ser uma decisão, um relatório, uma hipótese validada, uma lista de riscos ou um artefato técnico.

## Paralelismo é uma decisão arquitetural

Considere:

```text
Descobrir contexto
        │
        ├────────→ análise de segurança
        │
        ├────────→ estratégia de testes
        │
        └────────→ alternativas arquiteturais
                         │
                         ↓
                  decisão arquitetural
                         │
                         ↓
                    implementação
                         │
                 ┌───────┴───────┐
                 ↓               ↓
              testes          revisão
                 └───────┬───────┘
                         ↓
                      integração
```

As três análises iniciais podem ser paralelas porque não dependem umas das outras.

A implementação espera a decisão.

A integração espera as entregas.

Esse raciocínio é muito parecido com desenho de sistemas distribuídos: dependências, contratos, sincronização e falhas importam.

## O custo da coordenação

Cada agente adicional cria comunicação e integração.

Se o trabalho não tem fronteiras claras, o custo de coordenar pode ser maior que o benefício do paralelismo.

Uma pergunta útil antes de criar outro agente é:

> **O que este agente consegue fazer independentemente que outro agente não consegue fazer sem atrapalhá-lo?**

Se a resposta for fraca, talvez seja melhor manter um único executor.

## O novo trabalho do arquiteto

Quando agentes executam em paralelo, alguém precisa enxergar o sistema inteiro.

Essa pessoa não precisa saber cada detalhe de cada execução. Precisa saber:

- por que o trabalho foi dividido daquela forma;
- quais decisões são irreversíveis ou caras;
- onde estão as dependências;
- quais evidências são confiáveis;
- onde existe risco de integração.

É aí que chegamos ao papel central do workshop: **o arquiteto como orquestrador**.
