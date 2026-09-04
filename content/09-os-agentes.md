# 09 · Os agentes

Até aqui, falamos de um agente como um único executor.

Agora aparece uma pergunta natural:

> “Por que colocar todo o trabalho nas mãos de um único agente?”

Um engenheiro experiente também não trabalha assim. Ele conversa com especialistas, pede uma segunda opinião, divide trabalho e revisa entregas.

Podemos fazer algo parecido com agentes.

## O cadastro começou a crescer

Nossa missão agora envolve backend, experiência no cliente, segurança e testes. Um único agente poderia tentar fazer tudo, mas talvez não seja a melhor forma de organizar o trabalho.

Podemos separar responsabilidades:

```text
              Cadastro de usuários
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     Backend        Frontend       Segurança
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                     Testes
                       ↓
                    Revisão
```

O desenho exato depende do problema. O ponto é que cada agente recebe uma responsabilidade clara.

## Especialização por responsabilidade

Em vez de criar agentes chamados “Java”, “Kafka” ou “Frontend”, pense em responsabilidades.

Um agente pode ser responsável por implementar o backend do cadastro. Outro pode investigar riscos de segurança. Outro pode avaliar a estratégia de testes.

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

## Uma possível divisão para o cadastro

Podemos ter:

- um agente descobrindo detalhes do fluxo atual;
- um agente analisando riscos de segurança;
- um agente propondo a estratégia de testes;
- um agente preparando a implementação do backend;
- um agente preparando a experiência no cliente, quando o contrato estiver definido.

Algumas dessas atividades podem ocorrer em paralelo. Outras precisam esperar uma decisão anterior.

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

> “Entendi. Posso dividir o cadastro entre agentes. Mas como eu decido o que cada um recebe e em que ordem eles trabalham?”

É isso que vamos explorar na delegação.
