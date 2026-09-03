# Você acabou de contratar o melhor engenheiro do mundo

Imagine que amanhã você possa contratar um engenheiro de software excepcional.

Ele raciocina rápido, conhece arquitetura, escreve código, entende testes e consegue aprender uma tecnologia nova quando precisa.

No primeiro dia, você entrega uma demanda:

> “Precisamos colocar essa nova funcionalidade em produção.”

E vai embora.

Quando voltar, o que você espera encontrar?

Provavelmente não um resultado excelente.

O problema não é a capacidade técnica desse engenheiro. É que ele não sabe quase nada sobre o lugar onde acabou de chegar.

Ele não conhece o produto. Não conhece as restrições. Não sabe quais decisões já foram tomadas. Não conhece os padrões da equipe. Não sabe o que pode mudar e o que não pode. E, principalmente, não sabe como vocês definem que uma solução é boa.

Essa situação é uma boa porta de entrada para entender agentes de IA.

## O ponto de partida

Um modelo de linguagem pode ter uma capacidade impressionante de raciocínio e geração de código. Mas capacidade cognitiva, sozinha, não define uma forma confiável de trabalhar.

Um sistema agentic acrescenta ao modelo aquilo que um engenheiro experiente normalmente acumula ao longo do tempo: contexto, regras, procedimentos, ferramentas, responsabilidades e mecanismos de verificação.

Durante este workshop vamos construir esse sistema aos poucos.

Primeiro, vamos entender o que falta para aquele engenheiro trabalhar bem.

Depois vamos transformar essas necessidades em uma estrutura que agentes conseguem utilizar.

No final, vamos colocar vários agentes trabalhando em paralelo e voltar à pergunta mais importante:

**O que passa a ser responsabilidade do humano quando a execução deixa de ser o principal gargalo?**

## O mapa

Vamos usar estes conceitos como nosso vocabulário:

- **Constitution:** como tomamos decisões.
- **Instructions:** como trabalhamos.
- **Skills:** como executamos procedimentos recorrentes.
- **Project Context:** onde estamos e por que estamos fazendo isso.
- **Mission:** o que precisa ser feito agora.
- **Agent:** quem assume uma responsabilidade.
- **Harness:** o ambiente que permite ao agente observar, agir e verificar.
- **Evidence:** como sabemos que o trabalho ficou bom.

Não vamos memorizar essas palavras por definição. Vamos chegar a elas pela necessidade.
