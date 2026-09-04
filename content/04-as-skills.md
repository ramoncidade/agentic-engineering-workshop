# 04 · As Skills

Agora nosso engenheiro conhece os princípios e as regras do ambiente. Ainda existe uma diferença entre **saber que algo deve ser feito** e ter um procedimento confiável para fazê-lo.

Uma Skill é uma capacidade reutilizável.

Pode ser um procedimento técnico, uma forma de investigar um problema ou uma sequência de passos que vale a pena repetir.

## Pense em procedimento, não em conhecimento

Imagine uma Skill chamada `revisar-api`.

Ela pode orientar o agente a:

1. identificar contratos alterados;
2. verificar compatibilidade;
3. procurar riscos de autenticação e autorização;
4. avaliar timeout, retry e observabilidade;
5. executar os testes relevantes;
6. registrar problemas encontrados.

Isso é diferente de simplesmente dizer:

> APIs devem ser seguras e observáveis.

Essa frase é uma instrução ou princípio. A Skill transforma a intenção em uma forma de trabalho repetível.

## Uma boa Skill reduz decisões desnecessárias

Sem uma Skill, cada agente pode inventar seu próprio caminho.

Com uma Skill, parte do caminho já está estabelecida.

Isso não significa que o agente vira um robô que segue uma receita cegamente. Uma boa Skill define o procedimento e deixa espaço para julgamento quando a situação fugir do caso esperado.

## Skill também é conhecimento operacional

Algumas Skills não são comandos técnicos.

Podem ser:

- investigar um incidente;
- decompor uma demanda;
- preparar uma ADR;
- revisar uma pull request;
- analisar impacto de uma mudança;
- entrevistar outro agente;
- descobrir contexto de um projeto.

O ponto em comum é a reutilização.

Se você explicar a mesma sequência de raciocínio pela décima vez, talvez tenha encontrado uma Skill que deveria existir.

## A separação começa a ficar clara

```text
Constituição
    Como decidimos

Instruções
    Como trabalhamos aqui

Skills
    Como executamos uma atividade recorrente
```

Agora nosso engenheiro tem valores, regras e procedimentos.

Mas ainda falta colocar tudo isso em uma situação real de trabalho.

## A pergunta do engenheiro novo

> “Beleza. Eu já sei como vocês decidem, quais regras seguem e alguns procedimentos. Mas qual é o problema que estamos tentando resolver aqui?”

Precisamos de contexto.
