# Storyboard da apresentação

> Fonte de verdade: `content/`, `exercises/` e `facilitator/`.
>
> Este arquivo define a narrativa e o ritmo da apresentação. Ele não é o conteúdo final dos slides.

## Princípios editoriais

- A apresentação conta uma história de engenharia, em vez de apenas explicar conceitos.
- O mesmo problema acompanha toda a narrativa: **"Crie um cadastro de usuários."**
- As perguntas do novo engenheiro aparecem nos slides para sustentar o roleplay.
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

> “Crie um cadastro de usuários.”

**Visual:** personagem principal diante do computador.

**Fala:** apresentar o personagem como um excelente engenheiro que acabou de entrar no time.

**Interação:** perguntar à sala se ele já consegue começar.

---

## Cena 02 · As perguntas começam

**Objetivo:** fazer a audiência descobrir por que uma instrução curta não é suficiente.

**Perguntas no slide, reveladas progressivamente:**

> “Cadastro de quê?”

> “Quem vai usar?”

> “Quais dados precisamos guardar?”

> “Onde isso vai rodar?”

> “Tem alguma regra do negócio?”

> “Como vocês fazem isso aqui?”

> “Como vou saber que terminei?”

**Interação:** deixar a sala completar as perguntas antes de explicar a solução.

**Mensagem:** um engenheiro competente precisa de mais do que uma tarefa isolada para produzir uma boa solução.

---

# Ato 2 · Equipando o engenheiro

## Cena 03 · Como tomamos decisões?

**Objetivo:** introduzir Constitution como princípios que orientam escolhas.

**Slide:**

# Constitution

### Como tomamos decisões

**É**
- princípios
- valores
- trade-offs
- limites

**Não é**
- lista de tarefas
- tutorial
- documentação completa

**Pergunta do engenheiro:**

> “Quando existem duas soluções boas, como vocês escolhem?”

**Notas:** explicar princípios de decisão e trade-offs, usando o cadastro como exemplo.

---

## Cena 04 · Quais são as regras?

**Objetivo:** diferenciar regras de trabalho de princípios de decisão.

**Slide:**

# Instructions

### Como trabalhamos aqui

**É**
- padrões
- convenções
- regras
- restrições

**Não é**
- objetivo do projeto
- conhecimento genérico
- missão específica

**Pergunta do engenheiro:**

> “Tem alguma regra que eu preciso seguir?”

---

## Cena 05 · Como fazemos isso?

**Objetivo:** introduzir Skills como capacidades/procedimentos reutilizáveis.

**Slide:**

# Skills

### Como executamos tarefas

`Conhecimento → Procedimento reutilizável → Execução`

**É**
- capacidade reutilizável
- procedimento
- workflow

**Não é**
- responsabilidade de uma pessoa
- regra global
- contexto específico

**Pergunta do engenheiro:**

> “Vocês já sabem como fazer isso? Posso reutilizar o processo?”

---

# Ato 3 · Colocando o engenheiro dentro do sistema

## Cena 06 · Onde estou?

**Objetivo:** mostrar que conhecimento isolado não substitui o contexto do projeto.

**Slide:**

# Context

### Onde esse trabalho existe

`Produto → Sistema → Arquitetura → Cadastro → Usuário`

**Perguntas:**
- “O que já existe?”
- “Por que estamos fazendo isso?”
- “Quem será afetado?”
- “Quais são as restrições?”

**Notas:** explicar contexto como memória operacional do trabalho, não como acúmulo de documentação.

---

## Cena 07 · O que eu faço agora?

**Objetivo:** transformar o contexto em uma missão executável.

**Slide:**

# Mission

### O que precisa ser entregue agora?

`Contexto + Objetivo + Restrições + Critérios de aceite`

**Antes:**
> “Crie um cadastro de usuários.”

**Depois:**
> “Agora eu sei exatamente o que significa criar esse cadastro.”

---

# Ato 4 · Dando ferramentas

## Cena 08 · Onde eu trabalho?

**Objetivo:** introduzir Harness como ambiente operacional.

**Slide:**

# Harness

### O ambiente onde o trabalho acontece

```text
                 Harness
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
     Código       GitHub       Testes
       ↓            ↓            ↓
      API        Issues      Pipeline
```

**Notas:** diferenciar harness de LLM, agente e ferramentas individuais.

---

# Ato 5 · Deixar o engenheiro trabalhar

## Cena 09 · O loop

**Objetivo:** mostrar a diferença entre responder uma pergunta e executar um trabalho com feedback.

**Slide:**

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

**Pergunta do engenheiro:**

> “E se meu primeiro caminho não funcionar?”

**Notas:** explicar feedback, retry, limites, aprovações e evidências.

---

# Ato 6 · O problema ficou grande

## Cena 10 · Posso pedir ajuda?

**Objetivo:** fazer agentes especializados surgirem como consequência da complexidade.

**Slide:**

# 🤔

> “Isso ficou grande.”

Depois:

> **“Posso pedir ajuda?”**

**Notas:** introduzir a ideia de dividir trabalho antes de apresentar uma equipe de agentes.

---

# Ato 7 · Os outros entram

## Cena 11 · O primeiro agente

**Objetivo:** definir agente por responsabilidade, não por persona.

**Slide:**

```text
                 Engenheiro
                     │
                     ▼
                  ┌───────┐
                  │ Agent │
                  └───────┘
```

> **Um agente assume uma responsabilidade.**

**Notas:** diferenciar LLM, agente, ferramentas e harness.

---

## Cena 12 · O time cresce

**Objetivo:** mostrar especialização e responsabilidades distintas.

**Slide:**

```text
                 Engenheiro
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
     Backend      Security      Tests
        │            │            │
        └────────────┼────────────┘
                     ↓
                   Review
```

**Notas:** apresentar especialização como forma de dividir responsabilidade e reduzir sobrecarga de contexto.

**Possível humor:** aqui começam a aparecer os nomes dos personagens, se a identidade deles já estiver definida.

---

# Ato 8 · Quem coordena?

## Cena 13 · Decomposição e delegação

**Objetivo:** mostrar que múltiplos agentes não significam paralelismo automático.

**Slide 1:**

# Nem todo trabalho precisa ser paralelo.

**Slide 2:**

```text
Cadastro
   │
   ├── Backend
   ├── Frontend
   ├── Segurança
   └── Testes
```

**Slide 3:**

```text
Contrato
   ↓
Backend ──────→ Frontend
   ↓
Testes
   ↓
Integração
```

**Pergunta do engenheiro:**

> **“Quem faz o quê? E o que pode acontecer ao mesmo tempo?”**

**Notas:** explicar fronteiras, dependências, paralelismo e quando um único agente é melhor.

---

# Ato 9 · Agentes trabalhando juntos

## Cena 14 · Conversas entre agentes

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

**Frase-chave no slide:**

> **Agentes podem recomendar, investigar, implementar e revisar o trabalho de outro agente.**

---

# Ato 10 · Evidência

## Cena 15 · Está pronto?

**Objetivo:** impedir que “o agente terminou” seja confundido com “o trabalho está correto”.

**Slide:**

# “Está pronto?”

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

**Pergunta:**

> **“Como eu sei que posso confiar nisso?”**

**Notas:** qualidade, testes, validações, riscos, revisão humana e critérios de aceite.

---

# Ato 11 · A revelação

## Cena 16 · O mesmo pedido, outro sistema de trabalho

**Objetivo:** voltar ao início e revelar a transformação.

**Slide:**

> **“Crie um cadastro de usuários.”**

Depois revelar a estrutura:

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

# Ato 12 · Fechamento

## Cena 17 · A pergunta que fica

**Objetivo:** transformar a narrativa em uma pergunta prática para o trabalho real.

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

Uma direção possível é começar com referências informais como “Claudinho” apenas como fenômeno cultural e, depois, mostrar que o nome do modelo importa menos do que a responsabilidade assumida pelo agente.

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