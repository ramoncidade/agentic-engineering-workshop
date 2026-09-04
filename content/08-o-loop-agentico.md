# 08 · O loop de execução

Um chat tradicional tende a seguir esta lógica:

```text
Pessoa → pergunta → modelo → resposta
```

Quando colocamos o modelo dentro de um ambiente de trabalho, o fluxo pode continuar depois da primeira resposta.

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

Essa retroalimentação é o que permite continuar o trabalho sem tratar a primeira resposta como resultado final.

## E onde entra a pessoa?

A pessoa não desaparece do loop.

Ela define objetivos, estabelece limites, resolve ambiguidades importantes e assume as decisões que não devem ser delegadas.

O objetivo não é criar uma máquina que nunca precise de nós.

É evitar gastar tempo acompanhando cada passo mecânico quando podemos concentrá-lo nas decisões que realmente importam.

## A pergunta do engenheiro novo

> “E se ficar grande demais pra fazer sozinho? Dá pra dividir? Ou, se eu não souber alguma coisa, posso pedir ajuda?”

É isso que vamos explorar agora.
