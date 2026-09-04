# 05 · O contexto do projeto

Até aqui, nosso engenheiro sabe como decidir, conhece as regras da equipe e possui procedimentos reutilizáveis.

Agora ele precisa descobrir onde está pisando.

Contexto é a informação que explica o projeto: **o que existe, por que existe, quem é afetado, quais são as restrições e como saberemos que deu certo**.

## Contexto não é documentação acumulada

Um projeto pode ter centenas de documentos e ainda assim não ter contexto suficiente para uma tarefa.

O que importa é conseguir responder perguntas como:

- Qual problema estamos tentando resolver?
- Por que ele importa agora?
- Quem usa ou depende dessa solução?
- Como a arquitetura funciona hoje?
- Quais restrições não podemos ignorar?
- Que decisões já foram tomadas?
- Quais riscos conhecemos?
- Como vamos validar o resultado?

Contexto bom reduz o espaço de soluções erradas.

## Voltando ao cadastro de usuários

Até aqui, sabemos apenas que queremos criar um cadastro. Agora imagine que o contexto do produto traga algumas informações:

> O cadastro será usado por clientes de um aplicativo mobile já existente. O aplicativo não pode conhecer credenciais internas. O backend já possui um serviço de identidade. Dados pessoais precisam seguir as políticas de segurança e privacidade da instituição. A plataforma corporativa já fornece observabilidade para os serviços.

De repente, várias decisões que pareciam abertas deixam de ser tão abertas.

Talvez não faça sentido criar outro mecanismo de identidade. Talvez o frontend precise seguir um fluxo já existente. Talvez determinadas informações nem devam ser armazenadas pelo novo serviço.

O pedido continua sendo “criar um cadastro de usuários”, mas o espaço de soluções mudou completamente.

## Contexto também inclui o que não fazer

Restrições são parte do contexto.

Por exemplo:

```text
Objetivo
    Permitir que um cliente crie sua conta pelo aplicativo

Restrições
    Não armazenar credenciais no aplicativo
    Reutilizar o serviço de identidade existente
    Manter compatibilidade com a jornada atual

Sucesso
    Cadastro concluído com validações de segurança
    Testes de regressão passando
```

Isso é muito mais útil para um agente do que simplesmente entregar um documento enorme sobre o sistema.

## O contexto precisa sobreviver ao agente

Uma característica importante de um sistema de trabalho com agentes é que o conhecimento relevante não deveria depender da memória de uma única conversa.

Pense em algo bem comum: você começa uma investigação em um chat, passa um monte de contexto, toma algumas decisões e chega a uma conclusão parcial. No dia seguinte, precisa continuar o trabalho, mas aquela conversa ficou para trás.

Se você precisa reconstruir tudo no próximo chat, começa a acumular contexto como prompts: explicações, decisões e descobertas ficam espalhadas pelas conversas em vez de fazerem parte do trabalho.

O contexto relevante é justamente aquela informação que você queria que o próximo agente soubesse, mas que acabou ficando perdida em outro chat.

Por isso, se o agente A começa uma investigação sobre o cadastro e o agente B continua o trabalho, o contexto essencial precisa estar disponível para B.

Isso muda a forma como pensamos documentação.

Não estamos documentando apenas para humanos que vão ler depois. Estamos criando **memória operacional para o sistema de trabalho**.

## Agora temos o cenário completo

```text
Constituição
    Como decidimos
        ↓
Instruções
    Como trabalhamos aqui
        ↓
Skills
    Como executamos atividades recorrentes
        ↓
Contexto
    Onde estamos e por que
```

O cadastro de usuários já tem um problema definido, algumas restrições e decisões que precisam ser respeitadas.

## A pergunta do engenheiro novo

> “Tá. Agora eu sei como vocês trabalham e entendo o problema. O que exatamente vocês querem que eu entregue nesse cadastro?”

Essa é a missão.
