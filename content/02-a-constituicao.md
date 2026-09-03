# Capítulo 2: A Constitution

O engenheiro acabou de chegar. Você explicou o produto e mostrou a arquitetura.

Agora ele pergunta:

> “Quando houver mais de uma solução possível, como vocês decidem?”

Essa pergunta é diferente de “qual tecnologia vocês usam?”.

Tecnologia é uma escolha concreta. O que interessa aqui é o princípio que orienta a escolha.

## Um exemplo

Imagine que existem duas formas de implementar uma funcionalidade.

A primeira é rápida, mas cria uma dependência difícil de remover.

A segunda demora um pouco mais, mas reduz o acoplamento e facilita mudanças futuras.

Qual delas vocês escolheriam?

Não existe uma resposta universal. A resposta depende do que a equipe considera importante naquele contexto.

Talvez a regra seja:

> “Preferimos simplicidade e velocidade, desde que a decisão não crie uma dívida estrutural difícil de reverter.”

Isso é muito mais útil para um agente do que simplesmente dizer “use arquitetura limpa”.

## Constitution não é manual

A Constitution contém princípios de decisão.

Ela responde perguntas como:

- O que valorizamos?
- O que é inegociável?
- Quais trade-offs aceitamos?
- O que fazemos quando dois objetivos entram em conflito?

Uma boa Constitution é curta. Se ela precisar explicar todos os detalhes da implementação, provavelmente estamos colocando Instructions ou Skills no lugar errado.

## Por que isso importa para agentes?

Porque agentes tomam decisões durante a execução.

Se todas as decisões precisarem voltar para o humano, o agente vira apenas um executor de comandos.

Se existirem princípios claros, parte dessas decisões pode ser delegada.

A Constitution é, portanto, uma forma de transferir **critério**, não apenas informação.

## Exercício rápido

Escolha uma decisão técnica recorrente da sua equipe.

Agora escreva uma regra que explique **como decidir**, e não qual ferramenta usar.

Se a frase só puder ser aplicada a uma tecnologia específica, tente novamente.

## Próxima pergunta

O engenheiro já sabe como vocês pensam. Mas ainda não sabe como vocês trabalham no dia a dia.

Isso nos leva às **Instructions**.
