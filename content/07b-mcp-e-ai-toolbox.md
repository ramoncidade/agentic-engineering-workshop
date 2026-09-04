# 07b · MCP e a AI Toolbox

> **Slide opcional**

Agora que nosso agente tem um harness, aparece uma pergunta bastante prática:

> “Se eu tenho vários agentes trabalhando, como faço para eles acessarem as mesmas regras, conhecimentos e capacidades sem ficar copiando tudo para cada prompt?”

## MCP: uma ponte para ferramentas e recursos

O **MCP (Model Context Protocol)** é um padrão para conectar aplicações de IA a ferramentas e recursos externos.

Na prática, ele permite que o harness disponibilize para o agente capacidades que estão fora do próprio modelo.

```text
                 AGENTE
                    │
             ┌──────┴──────┐
             │   Harness   │
             └──────┬──────┘
                    │
               MCP Server
          ┌─────────┼─────────┐
          ↓         ↓         ↓
       GitHub    Banco     AI Toolbox
       APIs      Docs      Knowledge
```

O ponto importante é:

> **MCP não é o conhecimento. É um mecanismo padronizado para disponibilizar conhecimento e capacidades ao agente.**

Ele pode ser uma das pontes entre o harness e sistemas externos.

## E onde entra a AI Toolbox?

A **AI Toolbox** é a nossa tentativa de transformar conhecimento espalhado em uma infraestrutura reutilizável para agentes.

Ela pode centralizar:

- princípios de decisão e Constituição;
- Instruções e padrões de trabalho;
- Skills reutilizáveis;
- Agents especializados;
- conhecimento técnico e arquitetural;
- contexto que precisa ser compartilhado entre projetos.

A ideia não é criar um grande depósito de prompts.

É organizar o conhecimento de forma que ele possa ser **descoberto, reutilizado e disponibilizado aos agentes quando necessário**.

```text
                    AI Toolbox
                  ↙      ↓      ↘
             Projeto A Projeto B Projeto C
                  ↓      ↓      ↓
                Agentes + Harness
```

Em vez de cada projeto começar com uma coleção própria de explicações, podemos construir uma base comum e reaproveitável.

## Um teste simples

Se uma informação precisa ser repetida em dezenas de prompts, vale perguntar:

> **“Essa informação ainda está no lugar certo?”**

Talvez ela seja uma Instruction. Talvez uma Skill. Talvez um Agent. Talvez faça parte do Contexto do projeto ou até da Constituição.

A Toolbox não decide essa classificação sozinha. Ela é a infraestrutura que ajuda a armazenar, organizar e distribuir esses elementos.

## Uma distinção importante

A AI Toolbox **não precisa fazer parte do harness**.

Ela é uma infraestrutura externa que o harness pode acessar. O MCP é uma das formas possíveis de criar essa conexão.

```text
Constituição
      ↓
Instruções
      ↓
Skills
      ↓
Contexto
      ↓
Missão
      ↓
Harness
      ↓
MCP ─────────→ AI Toolbox
      ↓
Conhecimento + ferramentas
      ↓
Agente executa
      ↓
Verifica
      ↓
Melhoramos a Toolbox
```

Isso fecha um ciclo interessante: o conhecimento deixa de ser algo que fica preso em uma conversa e passa a fazer parte da infraestrutura usada para executar o trabalho.

## A pergunta do engenheiro novo

> “Então a ideia é que o agente não precise carregar tudo na cabeça. Ele precisa saber onde encontrar o que precisa para trabalhar.”

Exatamente. E agora que ele consegue trabalhar e consultar o que precisa, falta entender como ele executa uma tarefa, verifica o resultado e reage quando alguma coisa não funciona.

É isso que vamos explorar no loop de execução.
