# 13 — Do chat ao sistema

Até aqui, vimos como transformar um modelo de linguagem em parte de um processo de trabalho.

Agora podemos voltar à pergunta que abriu o workshop:

> **O que muda quando deixamos de usar IA como alguém com quem conversamos e passamos a tratá-la como parte de um sistema de execução?**

No fluxo tradicional, o centro é a conversa.

```text
Pessoa → prompt → modelo → resposta → pessoa
```

A pessoa interpreta a resposta, decide o próximo passo e inicia outra interação.

No fluxo orientado a agentes, o centro é o trabalho.

```text
Objetivo
   ↓
Contexto + regras + capacidades
   ↓
Missão
   ↓
Agente
   ↓
Ferramentas
   ↓
Execução
   ↓
Evidência
   ↓
Decisão / próxima etapa
```

A conversa continua existindo. Ela apenas deixa de ser o mecanismo principal de coordenação.

## O que muda para o engenheiro

O engenheiro continua precisando entender código, arquitetura, infraestrutura e produto.

A diferença está em onde sua atenção produz mais valor.

Antes, uma parte grande do esforço estava em:

- explicar cada passo;
- acompanhar cada comando;
- responder perguntas do executor;
- corrigir pequenos detalhes;
- repetir contexto.

Com um sistema de agentes bem desenhado, parte desse trabalho pode ser absorvida pelo próprio sistema.

A atenção humana migra para:

- definir o resultado desejado;
- decidir o que é importante;
- estabelecer limites;
- decompor problemas;
- avaliar alternativas;
- revisar evidências;
- resolver conflitos;
- tomar decisões que exigem contexto de negócio e responsabilidade.

Isso não torna o engenheiro menos técnico.

Torna o conhecimento técnico mais alavancado.

## A unidade de produtividade muda

No desenvolvimento tradicional, podemos pensar em produtividade como:

> “Quanto código um engenheiro consegue produzir?”

No desenvolvimento orientado a agentes, uma pergunta mais interessante aparece:

> “Quanto trabalho de qualidade um engenheiro consegue coordenar sem aumentar proporcionalmente a própria carga operacional?”

Essa mudança é importante porque introduz um novo tipo de engenharia: **engenharia do sistema de trabalho**.

Você não está apenas construindo software.

Está construindo a maneira pela qual software será construído.

## Mas existe uma armadilha

Mais agentes não significam automaticamente mais produtividade.

Mais autonomia também não significa automaticamente mais valor.

Um sistema mal projetado pode produzir:

- mais código para revisar;
- mais branches para integrar;
- mais decisões conflitantes;
- mais contexto perdido;
- mais custos de execução;
- uma falsa sensação de velocidade.

A métrica não deve ser o número de agentes em execução.

Deve ser a qualidade do resultado em relação ao esforço total de coordenação.

## O novo papel do arquiteto

É aqui que a jornada deste workshop termina.

O arquiteto de um sistema agentic não é o chefe de uma fila de agentes.

Ele é responsável por desenhar um sistema no qual o trabalho possa ser distribuído sem perder coerência.

Ele decide:

- quais responsabilidades existem;
- quais podem ser delegadas;
- quais precisam permanecer humanas;
- quais informações precisam acompanhar cada trabalho;
- como os resultados serão verificados;
- como agentes colaboram;
- onde a autonomia termina;
- como o sistema aprende com as falhas.

Essa é a diferença entre **usar agentes** e **projetar uma organização de agentes**.

## Uma última mudança de pergunta

No começo, a pergunta era:

> “Qual prompt devo escrever?”

Agora ela pode ser:

> “Qual sistema de trabalho produzirá o melhor resultado para este problema?”

Essa pergunta é maior.

E, justamente por isso, é uma pergunta de engenharia.
