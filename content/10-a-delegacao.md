# 10 · A delegação

O cadastro de usuários agora tem várias frentes de trabalho. Temos agentes investigando, implementando e revisando partes diferentes.

A próxima pergunta é prática: **como dividir esse trabalho sem transformar a entrega em uma reunião permanente entre agentes?**

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

## Aplicando ao cadastro

Imagine que o agente de segurança precise avaliar o fluxo antes da implementação final. Ele não precisa editar o frontend ou o backend. Sua entrega pode ser uma análise dos riscos, das validações obrigatórias e das decisões que precisam ser consideradas pelos demais agentes.

Enquanto isso, outro agente pode investigar o contrato do serviço de identidade e outro pode preparar a estratégia de testes.

A implementação pode começar quando as dependências realmente necessárias estiverem resolvidas.

## Paralelismo é uma decisão de desenho

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

Esse raciocínio lembra o desenho de sistemas distribuídos: dependências, contratos, sincronização e falhas importam.

## O custo da coordenação

Cada agente adicional cria comunicação e integração.

Se o trabalho não tem fronteiras claras, o custo de coordenar pode ser maior que o benefício do paralelismo.

Uma pergunta útil antes de criar outro agente é:

> **O que este agente consegue fazer independentemente que outro agente não consegue fazer sem atrapalhá-lo?**

Se a resposta for fraca, talvez seja melhor manter um único executor.

## Enxergar o trabalho inteiro

Quando o trabalho é dividido, alguém precisa enxergar o conjunto.

Não é necessário acompanhar cada detalhe de cada execução. É preciso saber:

- por que o trabalho foi dividido daquela forma;
- quais decisões são caras de reverter;
- onde estão as dependências;
- quais evidências são confiáveis;
- onde existe risco de integração.

Isso pode ser feito por quem estiver conduzindo a atividade, independentemente do cargo ou senioridade.

## A pergunta do engenheiro novo

> “Beleza. Já sei dividir o cadastro. Como eu faço para acompanhar as entregas sem virar gargalo de tudo?”

Agora chegamos ao ponto em que a pessoa deixa de olhar apenas para a execução individual e começa a enxergar o trabalho como um sistema.
