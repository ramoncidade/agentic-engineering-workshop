# 09 · Os agentes

Até aqui, falamos de um agente como um único executor.

Agora aparece uma pergunta natural:

> “Por que colocar todo o trabalho nas mãos de um único agente?”

Um engenheiro experiente também não trabalha assim. Ele conversa com especialistas, pede uma segunda opinião, divide trabalho e revisa entregas.

Podemos fazer algo parecido com agentes.

## Especialização por responsabilidade

Em vez de criar agentes chamados “Java”, “Kafka” ou “Frontend”, pense em responsabilidades:

```text
              Objetivo
                 │
        ┌────────┼────────┐
        ↓        ↓        ↓
   Arquitetura Implementação Testes
    Review       Agent      Agent
        │        │        │
        └────────┼────────┘
                 ↓
             Integração
```

O nome da tecnologia pode mudar. A responsabilidade continua fazendo sentido.

## Agente não é uma persona

Uma persona diz:

> “Você é um desenvolvedor sênior especialista em Java.”

Isso pode influenciar o estilo da resposta, mas não define um sistema de trabalho.

Uma definição mais útil é:

> “Você é responsável por implementar a mudança descrita nesta missão, respeitando estas restrições e entregando estas evidências.”

Agora existe uma fronteira de responsabilidade.

## Dividir não significa paralelizar tudo

Esse é um ponto importante.

Mais agentes não significam automaticamente mais velocidade.

Se cinco agentes precisam editar o mesmo arquivo, provavelmente criamos cinco fontes de conflito.

Se uma tarefa depende de uma decisão que ainda não foi tomada, mandar três agentes implementarem soluções diferentes pode produzir apenas retrabalho.

Paralelismo funciona quando existem **fronteiras relativamente independentes**.

## Uma possível divisão

Imagine uma mudança de arquitetura.

Podemos ter:

- um agente descobrindo o contexto atual;
- um agente propondo alternativas;
- um agente analisando riscos de segurança;
- um agente avaliando estratégia de testes;
- um agente preparando a implementação depois que a direção estiver definida.

Algumas dessas atividades podem ocorrer em paralelo. Outras precisam esperar uma decisão anterior.

O trabalho passa a ser um grafo de dependências, não uma fila de prompts.

## A responsabilidade continua sendo humana

Delegar uma parte do trabalho não significa deixar de responder pelo resultado.

A pessoa que conduz a atividade ainda precisa entender:

- qual problema está sendo resolvido;
- quais restrições são importantes;
- quais alternativas fazem sentido;
- quando a evidência é suficiente;
- qual risco é aceitável;
- quando interromper ou redirecionar um agente.

## A pergunta do engenheiro novo

> “Entendi. Então posso dividir o trabalho entre agentes. Mas como eu decido o que cada um recebe e em que ordem eles trabalham?”

É isso que vamos explorar na delegação.
