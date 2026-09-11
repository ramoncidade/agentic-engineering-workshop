# Agentic Engineering Workshop · Speaker Notes

## Duração sugerida

- **Versão executiva:** 35–45 min, passando pelos conceitos e pela revelação final.
- **Workshop completo:** 2–3 h, usando as perguntas de cada capítulo para exercícios e discussão.
- A apresentação tem **29 slides**. Não leia os slides. Use-os como cenário e deixe a explicação acontecer na conversa.

## Roteiro

### 01 · O problema
**Slides 1–3**

Abra com a frase: “Precisamos criar um cadastro de usuários.” Não explique IA ainda.

Pergunte à sala: “Se eu entregar isso para alguém agora, o que pode dar errado?”

Deixe aparecerem produto, domínio, tecnologia e qualidade. O objetivo é criar desconforto com a falsa simplicidade da tarefa.

### 02 · Orientação
**Slides 4–8**

Apresente Constitution, Instructions, Skills, Context e Mission como camadas diferentes.

Ponto-chave: não transformar tudo em prompt. Cada artefato existe para reduzir uma classe diferente de ambiguidade.

Sugestão de exercício: entregue uma tarefa vaga e peça à turma para identificar o que falta em cada camada.

### 03 · Conhecimento
**Slides 9–11**

A pergunta central é memória. Um sistema agentic não deveria depender de uma pessoa ou agente lembrar tudo em cada conversa.

Mostre a base de conhecimento como infraestrutura. Ao falar de AI Toolbox, deixe claro que ela é um exemplo do ecossistema, não o conceito em si.

### 04 · Conexão
**Slides 12–14**

Explique a diferença entre fonte de conhecimento e interface de acesso.

MCP: ponte para ferramentas e fontes.

Harness: ambiente de execução. O agente precisa conseguir observar o estado, agir sobre o mundo e verificar o resultado.

No loop OBSERVE → THINK → ACT → VERIFY, enfatize que VERIFY não é opcional. Sem evidência, temos apenas uma hipótese de conclusão.

### 05 · Agentes
**Slides 15–17**

Faça a transição: “E quando o problema é grande demais?”

Introduza os personagens como representação de responsabilidades, não como mascotes.

Cora representa coordenação e dependências. Pedro representa produto e resultado. Manuela representa experiência e frontend.

Depois mostre Backend, Security e Tests. A mensagem é: especialização permite paralelismo e revisão cruzada.

### 06 · Orquestração
**Slides 18–20**

Este é o coração do workshop.

Delegar não é dizer “faça isso”. Delegar é fornecer responsabilidade, fronteira, contexto e critério de sucesso.

Mostre que paralelismo tem custo. Descoberta e decisões arquiteturais frequentemente precisam acontecer antes da implementação paralela.

### 07 · Evidência
**Slide 21**

Pergunte: “Se três agentes trabalharam durante uma hora, como você revisa isso sem refazer o trabalho deles?”

Resposta: evidências estruturadas. Código, testes, validações, review e resultados observáveis.

### 08 · Revelação
**Slides 22–23**

Volte para a frase original: “Crie um cadastro de usuários.”

Pause.

“A tarefa não mudou.”

Então mostre tudo que mudou ao redor dela: objetivo, contexto, missão, skills, harness, agentes, delegação e evidência.

### 09 · Novo papel
**Slides 24–25**

Aqui faça a conexão com Principal Engineer.

O trabalho não é desaparecer. É subir de nível: definir, arquitetar, revisar e integrar.

Pergunte: “Qual parte do seu trabalho hoje é coordenação manual que poderia virar sistema?”

### 10 · Fechamento
**Slides 26–29**

Não termine falando de ferramenta.

Termine com a mudança de pergunta:

> “Como faço isso?”
>
> “Como organizo esse trabalho para que humanos e agentes produzam o melhor resultado?”

Essa é a tese do workshop.

## Frases para enfatizar

- “O objetivo não é escrever mais prompts.”
- “Delegar não é distribuir tarefas. É distribuir contexto, responsabilidade e critérios de sucesso.”
- “Paralelizar cedo demais também é uma forma de criar retrabalho.”
- “O humano não precisa observar cada tecla. Precisa conseguir julgar o resultado.”
- “Seu trabalho não desaparece. Ele sobe de nível.”

## Controles da apresentação

- `→`, `↓`, `Space`: próximo slide
- `←`, `↑`: slide anterior
- `Home`: primeiro slide
- `End`: último slide
- `F`: fullscreen
- Swipe horizontal no celular/tablet
- Clique no lado direito/esquerdo da tela para avançar/voltar
- `#N` na URL abre diretamente o slide N

## Checklist antes de apresentar

- Abrir `presentation/index.html` em uma aba dedicada.
- Testar fullscreen com `F`.
- Testar teclado e clique.
- Testar em resolução do projetor/TV.
- Passar o deck uma vez sem parar para validar ritmo.
- Não depender de internet: a apresentação é autocontida e não usa bibliotecas externas.
