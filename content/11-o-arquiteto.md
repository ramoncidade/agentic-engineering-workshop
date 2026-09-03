# 11 · O arquiteto

A mudança mais importante deste workshop não é aprender uma ferramenta nova.

É mudar a pergunta.

Antes:

> “Como eu faço esta tarefa?”

Depois:

> “Qual é a melhor forma de organizar esta tarefa para que humanos e agentes produzam o resultado?”

## O arquiteto não abandona a engenharia

Existe um risco nessa transição: imaginar que o arquiteto passa a apenas distribuir tarefas.

Não é isso.

Quanto mais execução é delegada, mais importante fica entender o suficiente para avaliar as decisões e as evidências produzidas.

O arquiteto continua precisando compreender:

- arquitetura;
- sistemas distribuídos;
- código;
- segurança;
- operação;
- produto;
- custos;
- trade-offs.

A diferença é onde ele coloca sua energia.

## De executor para multiplicador

Um executor mede produtividade pelo que consegue produzir diretamente.

Um arquiteto de agentes começa a medir produtividade também pelo que consegue **fazer o sistema produzir com segurança**.

```text
Antes

Eu → tarefa → código

Depois

Eu
 │
 ├── objetivo
 ├── prioridades
 ├── decisões
 └── limites
       │
       ▼
    agentes
       │
       ├── investigação
       ├── arquitetura
       ├── implementação
       ├── testes
       └── revisão
       │
       ▼
    evidências
       │
       ▼
    integração
       │
       ▼
     resultado
```

## O que continua sendo humano

Nem tudo deve ser delegado.

Especialmente:

- definição do problema;
- decisões de negócio;
- prioridades conflitantes;
- aceitação de riscos importantes;
- decisões que comprometem a organização por muito tempo;
- responsabilidade pelo resultado.

Agentes podem recomendar. Podem investigar. Podem implementar. Podem revisar uns aos outros.

Mas a organização precisa saber quem é responsável pela decisão final.

## A nova competência

A competência central deixa de ser apenas escrever bons prompts.

Passa a ser:

> **desenhar sistemas de trabalho onde inteligência, ferramentas, contexto, especialização e validação se combinam para produzir resultados confiáveis.**

Essa competência tem muito mais em comum com arquitetura e liderança técnica do que com escrever instruções para um chatbot.

E agora podemos colocar tudo isso em prática.
