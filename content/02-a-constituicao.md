# Capítulo 2: A Constituição

O engenheiro acabou de chegar. Você explicou o produto e mostrou a arquitetura.

Agora ele pergunta:

> “Quando houver mais de uma solução possível, como vocês decidem?”

Essa pergunta é diferente de “qual tecnologia vocês usam?”.

Tecnologia é uma escolha concreta. O que interessa aqui é o princípio que orienta a escolha.

## Voltando ao cadastro de usuários

No nosso exemplo, já sabemos que queremos criar um cadastro de usuários. Mas ainda existem muitas decisões abertas.

Onde os dados serão armazenados? O cadastro precisa nascer junto com uma conta autenticada? Podemos criar uma nova dependência? Como equilibramos velocidade de entrega, simplicidade e facilidade de evolução?

Imagine que existam duas formas de implementar uma parte da funcionalidade.

A primeira é rápida, mas cria uma dependência difícil de remover.

A segunda demora um pouco mais, mas reduz o acoplamento e facilita mudanças futuras.

Qual delas vocês escolheriam?

Não existe uma resposta universal. A resposta depende do que a equipe considera importante naquele contexto.

Talvez a regra seja:

> “Preferimos simplicidade e velocidade, desde que a decisão não crie uma dívida estrutural difícil de reverter.”

Isso é muito mais útil para um agente do que simplesmente dizer “use arquitetura limpa”.

## A Constituição não é manual

A Constituição contém princípios de decisão.

Ela responde perguntas como:

- O que valorizamos?
- O que é inegociável?
- Quais trade-offs aceitamos?
- O que fazemos quando dois objetivos entram em conflito?

Uma boa Constituição é curta. Se ela precisar explicar todos os detalhes da implementação, provavelmente estamos colocando Instruções ou Skills no lugar errado.

## Por que isso importa para agentes?

Porque agentes tomam decisões durante a execução.

Se todas as decisões precisarem voltar para uma pessoa, o agente vira apenas um executor de comandos.

Se existirem princípios claros, parte dessas decisões pode ser tomada dentro dos limites definidos.

A Constituição é, portanto, uma forma de transferir **critério**, não apenas informação.

## Exercício rápido

Escolha uma decisão técnica recorrente da sua equipe.

Agora escreva uma regra que explique **como decidir**, e não qual ferramenta usar.

Se a frase só puder ser aplicada a uma tecnologia específica, tente novamente.

## A pergunta do engenheiro novo

> “Entendi como vocês tomam decisões. Mas como vocês trabalham no dia a dia? Tem alguma regra que eu preciso conhecer antes de continuar o cadastro?”

Isso nos leva às **Instruções**.
