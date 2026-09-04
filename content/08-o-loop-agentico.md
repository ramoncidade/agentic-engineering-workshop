# 08 · O loop de execução

Um chat tradicional tende a seguir esta lógica:

```text
Pessoa → pergunta → modelo → resposta
```

Quando colocamos o modelo dentro de um ambiente de trabalho, podemos acrescentar um ciclo.

```text
        ┌──────────┐
        │ Observar │
        └────┬─────┘
             ↓
        ┌──────────┐
        │  Pensar  │
        └────┬─────┘
             ↓
        ┌──────────┐
        │   Agir   │
        └────┬─────┘
             ↓
        ┌──────────┐
        │ Verificar│
        └────┬─────┘
             │
       ┌─────┴─────┐
       │           │
    sucesso      falha
       │           │
       ↓           └────→ observar novamente
    concluir
```

A diferença não está em uma palavra específica do prompt. Está na capacidade de **agir, observar o resultado e decidir o próximo passo**.

## Um exemplo simples

Imagine um agente encarregado de corrigir um teste quebrado.

Ele pode:

1. observar o teste e o código relacionado;
2. formular uma hipótese;
3. alterar o código;
4. executar os testes;
5. analisar o resultado;
6. se falhar, revisar a hipótese;
7. tentar novamente;
8. concluir quando houver evidência suficiente.

Um fluxo de chat poderia parar no passo 3 e entregar uma sugestão.

Um agente pode continuar até obter evidência.

## O loop precisa de freios

Um loop sem limites pode simplesmente repetir erros.

Por isso precisamos de condições como:

- limite de tentativas;
- tempo máximo;
- ações proibidas;
- critérios de parada;
- aprovação humana em mudanças sensíveis;
- evidências obrigatórias antes de concluir.

Autonomia não significa ausência de controle.

## A parte mais importante é verificar

Gerar código não prova que o código funciona.

Produzir uma arquitetura não prova que ela atende às restrições.

Escrever uma análise não prova que a investigação encontrou a causa correta.

O sistema precisa de alguma forma de evidência.

```text
Ação
  ↓
Resultado observado
  ↓
Evidência
  ↓
Decisão
  ↓
Próxima ação
```

É essa retroalimentação que transforma uma sequência de respostas em um processo de trabalho.

## E onde entra a pessoa?

A pessoa não desaparece do loop.

Ela define objetivos, estabelece limites, resolve ambiguidades importantes e assume as decisões que não devem ser delegadas.

O objetivo não é criar uma máquina que nunca precise de nós.

É parar de gastar tempo em cada passo mecânico quando podemos concentrá-lo nas decisões que realmente importam.

## A pergunta do engenheiro novo

> “Tá. Entendi como um agente consegue trabalhar sozinho por alguns passos. Mas e quando o problema é grande demais para um agente só? Aí eu divido o trabalho?”

É isso que vamos explorar agora.
