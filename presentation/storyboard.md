# Storyboard da apresentação

> Fonte de verdade: `content/`, `exercises/` e `facilitator/`.
>
> Este arquivo define a narrativa e o ritmo da apresentação. Ele não é o conteúdo final dos slides.

## Princípios editoriais

- A apresentação conta uma história de engenharia, em vez de apenas explicar conceitos.
- O mesmo problema acompanha toda a narrativa: **“Crie um cadastro de usuários.”**
- A **pergunta do novo engenheiro vem antes do conceito**. O conceito apresentado em seguida é a resposta à pergunta.
- As perguntas do engenheiro aparecem nos slides para sustentar o roleplay.
- Exemplos de **É / Não é** também aparecem nos slides quando ajudam a fixar o conceito.
- Explicações, exemplos adicionais, ressalvas e instruções de condução ficam nas notas do apresentador.
- Diagramas e relações entre conceitos devem privilegiar linguagem visual.
- O personagem principal é um engenheiro humano; agentes entram progressivamente conforme o trabalho exige.
- Nomes e identidade visual dos personagens ainda não estão definidos.
- A narrativa deve evitar infantilização. O humor pode aparecer nos personagens e situações, sem transformar o encontro em uma paródia.

---

# Ato 1 · O primeiro dia

## Cena 01 · Segunda-feira, 9:07

**Objetivo:** colocar a audiência dentro da situação antes de apresentar qualquer conceito.

**Slide:**

# Segunda-feira, 9:07

> “O que você quer que eu faça?”

**Resposta:**

> “Precisamos criar um cadastro de usuários.”

**Visual:** personagem principal diante do computador.

**Interação:** perguntar à sala se ele já consegue começar.

---

## Cena 02 · O que falta?

**Objetivo:** fazer a audiência perceber que o pedido inicial deixa muitas decisões em aberto.

**Perguntas no slide, reveladas progressivamente:**

> “O que significa ‘cadastro de usuários’ nesse produto?”

> “Quem pode criar um usuário?”

> “Quais dados podem ser armazenados?”

> “Como funciona a autenticação?”

> “Há requisitos de segurança ou privacidade?”

> “Existe uma experiência de cadastro no aplicativo?”

> “Já existe uma API que podemos aproveitar?”

> “Como sabemos que a entrega está correta?”

**Interação:** deixar a sala descobrir outras perguntas.

---

# Ato 2 · Como o engenheiro deve decidir?

## Cena 03 · A pergunta vem primeiro

**Slide:**

> **“Beleza. Então eu tenho um pedido inicial, mas ainda preciso entender como vocês tomam decisões aqui. O que vocês usam para orientar essas decisões?”**

Pausa. Deixar a pergunta existir antes de apresentar o conceito.

### Resposta

# Constitution

**Como tomamos decisões**

**É**
- princípios
- valores
- trade-offs
- limites

**Não é**
- lista de tarefas
- tutorial
- documentação completa

**Notas:** explicar que a Constituição transfere critério, não apenas informação.

---

# Ato 3 · Como trabalhamos aqui?

## Cena 04 · A próxima pergunta

**Slide:**

> **“Entendi como vocês tomam decisões. Mas como vocês trabalham no dia a dia? Tem alguma regra que eu preciso conhecer antes de continuar o cadastro?”**

### Resposta

# Instructions

**Como trabalhamos aqui**

**É**
- padrões
- convenções
- regras
- restrições

**Não é**
- objetivo do projeto
- conhecimento genérico
- missão específica

**Notas:** mostrar que uma Constituição orienta escolhas, enquanto instruções definem o modo de trabalho daquele ambiente.

---

# Ato 4 · Como executamos atividades recorrentes?

## Cena 05 · A pergunta seguinte

**Slide:**

> **“Beleza. Eu já sei quais regras seguir. Mas quando existe uma atividade que fazemos toda hora, vocês têm algum procedimento para isso ou cada pessoa faz do seu jeito?”**

### Resposta

# Skills

**Como executamos uma atividade recorrente**

`Conhecimento → Procedimento reutilizável → Execução`

**É**
- capacidade reutilizável
- procedimento
- workflow

**Não é**
- responsabilidade de uma pessoa
- regra global
- contexto específico

**Notas:** usar `revisar-api` como exemplo.

---

# Ato 5 · Onde esse trabalho existe?

## Cena 06 · A pergunta seguinte

**Slide:**

> **“Beleza. Eu já sei como vocês decidem, quais regras seguem e alguns procedimentos. Mas qual é o problema que estamos tentando resolver com esse cadastro?”**

### Resposta

# Context

**Onde estamos e por quê**

`Produto → Sistema → Arquitetura → Cadastro → Usuário`

**O contexto precisa permitir responder:**
- “O que já existe?”
- “Por que estamos fazendo isso?”
- “Quem será afetado?”
- “Quais são as restrições?”

**Notas:** explicar contexto como memória operacional do trabalho, incluindo decisões, riscos, restrições e validação.

---

# Ato 6 · O que exatamente precisa ser entregue?

## Cena 07 · A pergunta seguinte

**Slide:**

> **“Tá. Agora eu sei como vocês trabalham e entendo o problema. O que exatamente vocês querem que eu entregue nesse cadastro?”**

### Resposta

# Mission

**O que precisa ser entregue agora?**

`Contexto + Objetivo + Restrições + Critérios de aceite`

**Antes:**
> “Crie um cadastro de usuários.”

**Depois:**
> “Agora eu sei exatamente o que significa criar esse cadastro.”

**Notas:** explicar que missão não é prompt mágico. Ela é uma ordem de trabalho proporcional à complexidade da tarefa.

---

# Ato 7 · Com o que eu consigo trabalhar?

## Cena 08 · A pergunta seguinte

**Slide:**

> **“Beleza. Agora eu tenho contexto e sei qual é a missão. Com o que eu consigo trabalhar aqui? Onde estão meus arquivos, ferramentas e testes?”**

### Resposta

# Harness

**O ambiente onde o trabalho acontece**

```text
                 Harness
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
     Código       GitHub       Testes
       ↓            ↓            ↓
      API        Issues      Pipeline
```

**Notas:** diferenciar LLM, agente e harness; introduzir limites de acesso e aprovação.

---

# Ato 8 · Como sei que funcionou?

## Cena 09 · A pergunta seguinte

**Slide:**

> **“Beleza. Agora eu tenho ambiente, ferramentas e uma missão. Mas como eu sei se o que fiz funcionou? Se der errado, eu paro ou tento outra coisa?”**

### Resposta

# Loop de execução

```text
OBSERVE
   ↓
THINK
   ↓
ACT
   ↓
VERIFY
   │
   ├── OK → DONE
   │
   └── ERRO
         ↓
       CORRIGE
         ↓
       OBSERVE
```

**Notas:** explicar feedback, retry, limites, critérios de parada, aprovações e evidências.

---

# Ato 9 · Posso pedir ajuda?

## Cena 10 · O problema ficou grande

**Slide:**

> **“E se ficar grande demais pra fazer sozinho? Dá pra dividir? Ou, se eu não souber alguma coisa, posso pedir ajuda?”**

### Resposta

# Vamos dividir o trabalho.

**Visual:** o personagem olha para o cadastro crescendo em várias frentes.

**Notas:** esta é a ponte narrativa para agentes especializados.

---

# Ato 10 · Quem assume cada responsabilidade?

## Cena 11 · Por que mais de um agente?

**Slide:**

> **“Por que colocar todo o trabalho nas mãos de um único agente?”**

### Resposta

# Agentes

**Um agente assume uma responsabilidade.**

```text
                 Engenheiro
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
     Backend      Security      Tests
```

**Notas:** agente não é apenas persona. Responsabilidade, contexto, regras, ferramentas e evidências importam.

---

## Cena 12 · Como dividir?

**Slide:**

> **“Entendi. Posso dividir o cadastro entre agentes. Mas como eu decido o que cada um recebe e em que ordem eles trabalham?”**

### Resposta

# Decomposição e delegação

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

**Notas:** explicar que mais agentes não significam automaticamente mais velocidade.

---

# Ato 11 · O trabalho começa a circular

## Cena 13 · Paralelismo

**Slide:**

# Nem todo trabalho precisa ser paralelo.

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

**Notas:** mostrar dependências e fronteiras relativamente independentes.

---

## Cena 14 · Agentes conversam

**Objetivo:** mostrar colaboração entre agentes e revisão cruzada.

**Slide:**

```text
Backend Agent
     │
     │ “Contrato pronto.”
     ▼
Frontend Agent

Security Agent
     │
     │ “Tenho uma restrição.”
     ▼
Backend Agent

Test Agent
     │
     │ “Encontrei um caso não coberto.”
     ▼
Backend Agent
```

**Frase-chave:**

> **Agentes podem recomendar, investigar, implementar e revisar o trabalho de outro agente.**

---

# Ato 12 · Está pronto?

## Cena 15 · Evidência

**Slide:**

> **“Como eu sei que posso confiar nisso?”**

### Resposta

# Evidências

```text
Código
  ↓
Testes
  ↓
Validações
  ↓
Review
  ↓
Evidências
```

**Notas:** reforçar que “o agente terminou” não significa “o trabalho está correto”.

---

# Ato 13 · A revelação

## Cena 16 · O mesmo pedido, outro sistema de trabalho

**Slide inicial:**

> **“Crie um cadastro de usuários.”**

Depois revelar progressivamente:

```text
                 OBJETIVO
                    │
              ┌─────┴─────┐
              │           │
         Constituição   Contexto
              │           │
         Instructions   Mission
              │           │
            Skills     Harness
              │           │
              └─────┬─────┘
                    ↓
                 Agentes
                    ↓
               Delegação
                    ↓
             Loop + Evidência
                    ↓
                 Entrega
```

**Pergunta final da cena:**

# O que mudou?

**Notas:** conduzir a audiência até a conclusão de que a mudança principal foi a organização do trabalho, não apenas a escolha de um modelo.

---

# Ato 14 · Fechamento

## Cena 17 · A pergunta que fica

**Slide:**

# Da próxima vez que receber uma tarefa...

> **“Como faço isso?”**

↓

> **“Como organizo esse trabalho para que humanos e agentes produzam o melhor resultado?”**

**Notas:** reforçar que isso é uma forma de organizar trabalho de engenharia, não uma mudança formal de cargo ou função.

---

# Elementos ainda a definir

## Personagem principal

Precisamos decidir:
- nome;
- aparência do doodle;
- personalidade;
- como ele evolui visualmente durante a história.

## Personagens/agentes secundários

Precisamos decidir se cada responsabilidade terá:
- apenas um rótulo técnico;
- um personagem recorrente;
- ou uma combinação dos dois.

Uma direção possível é usar referências informais como “Claudinho” apenas como fenômeno cultural e, depois, mostrar que o nome do modelo importa menos do que a responsabilidade assumida pelo agente.

## Identidade visual

Definir depois do storyboard:
- estilo do doodle;
- tipografia;
- tratamento de diagramas;
- transições;
- como representar perguntas do engenheiro;
- como representar a entrada de novos agentes.

---

# Próxima etapa

Transformar cada cena em uma unidade de apresentação:

```text
Cena
├── Slide(s)
├── Visual
├── Speaker notes
└── Interação
```

A criação do `index.html` deve acontecer somente depois dessa camada estar suficientemente definida.