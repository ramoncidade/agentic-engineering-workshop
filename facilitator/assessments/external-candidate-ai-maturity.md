# Sophia | Assessment de Maturidade no Uso de IA
## Racional, roteiro para candidatos externos e critérios de avaliação

**Status:** proposta inicial para validação  
**Público:** candidatos externos a posições de tecnologia e funções que utilizem agentes  
**Objetivo:** avaliar maturidade prática no uso de IA, com foco em trabalho orquestrado por agentes, qualidade, julgamento humano e segurança.

---

## 1. Resumo executivo

O assessment da Sophia busca identificar como uma pessoa transforma intenção e conhecimento em resultados confiáveis utilizando IA.

A avaliação **não deve medir apenas conhecimento teórico, habilidade de escrever prompts ou familiaridade com termos como LLM, MCP, RAG, Skills e Agents**. Deve observar como o candidato trabalha: como entende o problema, fornece contexto, delega atividades, usa ferramentas, valida resultados, identifica riscos e transforma procedimentos recorrentes em capacidades reutilizáveis.

O objetivo não é encontrar o candidato que usa mais IA ou que produz mais código em menos tempo. O objetivo é reunir evidências sobre a capacidade de usar IA de forma produtiva, crítica, segura e progressivamente orientada a agentes.

### Tese central

> Não avaliamos apenas se a pessoa sabe conversar com a IA. Avaliamos se consegue organizar e orquestrar trabalho com IA, mantendo responsabilidade pelo resultado.

### Princípios

- **Maturidade em IA é independente da senioridade profissional.** Não inferir nível de IA a partir de cargo, idade ou anos de experiência.
- **Evidências práticas valem mais que autodeclarações.** O comportamento observado durante o caso tem mais peso que o candidato afirmar que domina determinada ferramenta.
- **O resultado final não conta a história inteira.** Registrar decisões, validações e mudanças de direção feitas durante o trabalho.
- **IA é permitida e incentivada.** A avaliação deve refletir um ambiente real de trabalho, no qual ferramentas de IA estão disponíveis.
- **Segurança e qualidade são requisitos transversais.** Velocidade não compensa exposição de dados, código inseguro ou ausência de validação.
- **O assessment não é uma prova de vocabulário.** Não exigir que a pessoa saiba nomear corretamente cada mecanismo interno do harness.
- **Avaliação sem punição por ferramenta específica.** Sempre que possível, permitir as ferramentas aprovadas e disponíveis ao candidato, registrando quais foram utilizadas.

---

## 2. O que queremos distinguir

### Perfil prompt-centric (“prompteiro”)

Usa a IA principalmente como um interlocutor que responde a pedidos isolados. Pode escrever prompts elaborados e gerar código rapidamente, mas tende a manter para si a decomposição, a coordenação e a execução de cada etapa.

Comportamentos possíveis:
- solicita geração de código sem contexto ou critérios claros;
- trabalha em ciclos de pergunta, resposta, cópia e ajuste;
- aceita respostas plausíveis sem validação suficiente;
- não define critérios de conclusão;
- não identifica oportunidades de delegação ou reutilização.

O uso de prompts não é, por si só, um problema. O sinal de baixa maturidade é depender exclusivamente desse padrão, sem evoluir para delegação, validação sistemática ou orquestração.

### Trabalho orquestrado por agentes

A pessoa organiza o trabalho em torno de um objetivo, fornece contexto e restrições, delega etapas apropriadas, utiliza ferramentas ou agentes quando disponíveis, estabelece checkpoints e valida os resultados.

Comportamentos possíveis:
- esclarece requisitos e ambiguidades;
- decompõe o problema em etapas verificáveis;
- define restrições e critérios de aceite;
- delega trabalho sem abdicar da responsabilidade;
- revisa e testa os resultados;
- questiona sugestões da IA e descarta as inadequadas;
- identifica oportunidades de tornar o processo reutilizável.

### Dois perfis avançados, não excludentes

**Heavy User**
- extrai valor consistente das capacidades existentes;
- usa agentes, ferramentas, skills e contexto de forma eficiente;
- compõe etapas de trabalho e valida o resultado.

**Builder**
- identifica trabalho recorrente ou de alto atrito;
- transforma experiência de domínio em procedimentos, conhecimento, ferramentas, skills ou workflows reutilizáveis;
- amplia a capacidade disponível para outras pessoas.

Builder não significa necessariamente especialista em IA. Pode ser um engenheiro experiente, profissional de produto, analista ou especialista de domínio. O candidato não precisa conhecer a implementação interna de uma Skill ou Instruction para demonstrar comportamento de Builder.

---

## 3. Formato sugerido

**Duração sugerida:** 60 a 90 minutos, ajustável ao contexto da vaga.

1. **Orientação (5 min):** explicar o objetivo, os recursos disponíveis e as regras.
2. **Entendimento e planejamento (10 min):** candidato explora o caso e define uma abordagem.
3. **Execução assistida por IA (30–45 min):** candidato resolve o problema com liberdade para usar as ferramentas autorizadas.
4. **Melhoria e reutilização (10 min):** candidato identifica como evitar repetir trabalho semelhante.
5. **Revisão e conversa final (10–20 min):** candidato explica decisões, validações, riscos e alternativas.

A avaliação deve ser proporcional à função e ao escopo do caso. Para funções não relacionadas a desenvolvimento de software, substituir o repositório por um problema realista do domínio correspondente, preservando os mesmos princípios de avaliação.

### Recursos fornecidos

- um problema com contexto suficiente para começar;
- dados e artefatos sintéticos, sem informações confidenciais;
- acesso a uma ferramenta de IA aprovada ou alternativa equivalente;
- instruções sobre limites do ambiente e ações permitidas;
- critérios gerais de conclusão, sem entregar a solução.

### Regras para o candidato

- Pode usar IA durante a avaliação.
- É responsável por revisar e validar o resultado final.
- Não deve inserir dados pessoais, segredos, credenciais ou informações confidenciais em ferramentas não autorizadas.
- Deve sinalizar ambiguidades e premissas relevantes.
- Pode explicar limitações de tempo ou de acesso a ferramentas.
- Não será avaliado por usar uma ferramenta específica ou por memorizar nomenclaturas.

---

## 4. Caso prático

### Enunciado enviado ao candidato

> Você recebeu uma tarefa com um resultado esperado, um conjunto de artefatos existentes e acesso a uma ferramenta de IA.
>
> Sua missão é compreender o problema, produzir uma solução funcional ou uma recomendação verificável, validar o resultado e explicar as decisões tomadas.
>
> Você pode utilizar IA e ferramentas disponíveis. Não esperamos que siga um processo único. Esperamos que escolha uma abordagem adequada, explicite as premissas importantes e mantenha responsabilidade pelo resultado.

### Variante para desenvolvimento de software

Fornecer um pequeno repositório com:
- uma funcionalidade incompleta ou um defeito;
- testes existentes, mas incompletos;
- requisitos com uma ambiguidade deliberada;
- uma dependência ou integração com comportamento relevante;
- pelo menos um risco ou uma sugestão plausível, mas incorreta, que possa surgir durante a análise.

Solicitar ao candidato:
1. entender e implementar a mudança necessária;
2. adicionar ou corrigir testes;
3. validar a solução;
4. descrever riscos, limitações e decisões;
5. identificar uma parte do trabalho que poderia ser reutilizada em tarefas futuras.

O caso deve ser testado previamente para confirmar que é resolvível no tempo previsto e que os sinais de avaliação são observáveis. Não depender de uma única “armadilha” ou de uma resposta exata.

---

## 5. Perguntas enviadas ao candidato

As perguntas abaixo devem ser fornecidas como parte do caso ou da revisão final. Não é necessário fazer todas verbalmente se as evidências já estiverem claras.

### A. Entendimento e planejamento

**Pergunta 1 — Antes de executar, o que você precisa entender sobre o problema?**

O que observar:
- identifica requisitos, restrições e ambiguidades;
- separa fatos de hipóteses;
- busca contexto relevante antes de pedir uma solução completa.

**Pergunta 2 — Como você dividiria o trabalho e saberia que terminou?**

O que observar:
- define etapas e critérios de aceite;
- identifica dependências;
- propõe verificações observáveis, em vez de confiar apenas na resposta da IA.

### B. Uso e delegação de IA

**Pergunta 3 — Que partes do trabalho você delegaria à IA e quais manteria sob sua responsabilidade? Por quê?**

O que observar:
- escolhe a delegação conforme risco, complexidade e verificabilidade;
- mantém julgamento e responsabilidade humanos;
- não delega indiscriminadamente nem evita IA sem motivo.

**Pergunta 4 — Que contexto, restrições e critérios você forneceria à IA?**

O que observar:
- fornece contexto relevante;
- comunica restrições e resultado esperado;
- evita instruções vagas quando uma definição mais clara é necessária.

**Pergunta 5 — Se a ferramenta sugerisse uma solução plausível, mas você discordasse dela, como procederia?**

O que observar:
- questiona premissas;
- compara alternativas;
- pede evidências ou realiza verificações;
- consegue rejeitar a sugestão e explicar por quê.

### C. Validação e segurança

**Pergunta 6 — Como você verificou que o resultado está correto? O que ainda pode estar errado?**

O que observar:
- usa testes, inspeção, execução, fontes ou outras verificações apropriadas;
- considera casos de borda e falhas;
- reconhece incertezas e limitações.

**Pergunta 7 — Quais riscos de segurança, privacidade ou qualidade você identificou?**

O que observar:
- evita exposição de dados e credenciais;
- considera permissões, entradas não confiáveis, dependências e efeitos colaterais;
- reconhece que saída gerada por IA não é automaticamente confiável.

### D. Reutilização e Builder mindset

**Pergunta 8 — Se essa atividade se repetisse toda semana, o que você faria para reduzir o trabalho manual sem comprometer a qualidade?**

O que observar:
- identifica passos repetíveis;
- propõe checklist, template, conhecimento, automação, skill, agente ou workflow conforme o problema;
- inclui critérios de validação e manutenção.

**Pergunta 9 — Como você disponibilizaria essa solução para que outra pessoa pudesse usá-la sem depender de você?**

O que observar:
- documenta contexto, entradas, saídas, limites e critérios de qualidade;
- pensa em reutilização, descoberta e manutenção;
- não precisa saber o nome técnico do componente que implementaria isso.

### E. Reflexão final

**Pergunta 10 — O que você fez manualmente, o que delegou e quais sugestões da IA descartou?**

O que observar:
- consegue explicar o próprio processo;
- distingue geração de validação;
- reconhece contribuições e limitações da ferramenta;
- demonstra responsabilidade pelas decisões.

---

## 6. Rubrica de avaliação

Avaliar cada dimensão em uma escala de **0 a 4**, usando evidências observadas. A pontuação serve para organizar a avaliação, não para produzir uma falsa precisão sobre a pessoa.

| Nota | Descrição |
|---|---|
| **0 — Sem evidência** | Não demonstrou o comportamento, mesmo após oportunidade razoável. |
| **1 — Inicial** | Atua de forma reativa, com orientação limitada e validação insuficiente. |
| **2 — Funcional** | Executa a tarefa com alguma estrutura e validações básicas. |
| **3 — Consistente** | Trabalha com método, delega de forma apropriada e valida resultados de maneira independente. |
| **4 — Sistêmico** | Orquestra etapas e ferramentas, trata riscos explicitamente e transforma aprendizado em capacidade reutilizável. |

### Dimensões e pesos sugeridos

| Dimensão | Peso | Evidências principais |
|---|---:|---|
| Entendimento e decomposição do problema | 15% | Esclarece requisitos, explicita hipóteses e organiza etapas. |
| Contexto e instruções | 10% | Fornece contexto, restrições e critérios de aceite. |
| Delegação e orquestração | 20% | Delega unidades de trabalho, coordena etapas e mantém checkpoints. |
| Validação e pensamento crítico | 20% | Testa, questiona e rejeita saídas incorretas quando necessário. |
| Qualidade da solução | 15% | Resultado funcional, sustentável e adequado ao caso. |
| Segurança e responsabilidade | 10% | Protege dados, considera riscos e respeita limites de ferramentas. |
| Reutilização e potencial Builder | 10% | Identifica oportunidades e descreve uma capacidade reutilizável. |

**Cálculo opcional:** converter cada nota para o intervalo de 0 a 100 e aplicar o peso da dimensão. A pontuação agregada nunca deve substituir as evidências qualitativas nem funcionar como único critério de decisão.

### Condições críticas

Uma falha relevante de segurança, privacidade ou integridade deve ser registrada separadamente. Dependendo da gravidade e do contexto, pode exigir revisão humana específica, independentemente da pontuação agregada.

Não tratar uma falha isolada em ambiente simulado como evidência automática de intenção inadequada. Registrar o comportamento, o contexto, a resposta do candidato quando alertado e a capacidade de corrigir o problema.

---

## 7. Interpretar maturidade sem confundir com senioridade

A avaliação deve gerar um **perfil de maturidade em IA**, não uma classificação profissional.

| Nível | Perfil | Comportamento observado |
|---|---|---|
| **0 — Observador** | Uso limitado | Conhece ou experimenta IA, mas ainda não a integra de forma consistente ao trabalho. |
| **1 — Prompter** | Execução orientada por prompts | Usa principalmente interações isoladas para obter respostas ou gerar artefatos. |
| **2 — Operador** | Uso sistemático | Incorpora IA em tarefas recorrentes e realiza verificações básicas. |
| **3 — Delegador** | Delegação de problemas | Fornece contexto, restrições e critérios, delega partes do trabalho e revisa os resultados. |
| **4 — Orquestrador** | Coordenação de trabalho agentic | Compõe agentes, ferramentas e etapas com checkpoints e validação explícita. |
| **5 — Builder** | Criação de capacidades | Converte experiência em capacidades reutilizáveis que ampliam o que outras pessoas conseguem realizar. |

O nível deve ser atribuído pelo comportamento predominante demonstrado, e não apenas pela maior ação observada. Uma pessoa pode demonstrar comportamentos de níveis diferentes conforme a tarefa, a familiaridade com o domínio e as ferramentas disponíveis.

### Heavy User e Builder são perfis, não degraus obrigatórios

Além do nível de maturidade, registrar um ou ambos os perfis:

- **Heavy User:** demonstra uso eficiente e consistente das capacidades disponíveis.
- **Builder:** demonstra capacidade de identificar, estruturar e compartilhar conhecimento ou workflows reutilizáveis.

Uma pessoa pode ser Heavy User sem ser Builder, Builder em um domínio específico, ou demonstrar ambos. Não presumir que Builder é sempre superior em todas as dimensões.

### Exemplo de saída

**Perfil observado**
- Maturidade predominante: Delegador
- Perfil: Heavy User emergente
- Pontos fortes: decomposição, validação
- Oportunidades: reutilização, desenho de workflows
- Evidências: exemplos concretos observados no caso
- Limitações da avaliação: tempo, ferramenta disponível, familiaridade com o domínio

---

## 8. Como avaliar o resultado

Os avaliadores devem usar a mesma rubrica e registrar exemplos observáveis. Sempre que possível, dois avaliadores devem revisar casos de maior impacto ou situações próximas a um limite de decisão.

### Evidências a registrar

- abordagem inicial e perguntas feitas;
- como o candidato forneceu contexto;
- como escolheu o que delegar;
- mudanças de direção e motivos;
- verificações realizadas;
- erros da IA identificados ou não identificados;
- riscos reconhecidos;
- qualidade do resultado;
- oportunidades de reutilização identificadas;
- capacidade de explicar as decisões.

### O que não deve ser premiado isoladamente

- prompts longos ou sofisticados;
- quantidade de mensagens enviadas à IA;
- número de ferramentas ou termos técnicos citados;
- volume de código gerado;
- velocidade sem evidência de correção;
- uso de uma ferramenta específica quando alternativas são equivalentes;
- confiança verbal sem validação.

### O que deve contar como evidência positiva

- delegação proporcional à tarefa;
- critérios claros de conclusão;
- verificação independente;
- reconhecimento de incerteza;
- rejeição fundamentada de sugestões incorretas;
- tratamento responsável de dados e permissões;
- transformação de trabalho recorrente em capacidade reutilizável.

---

## 9. Como evitar uma avaliação injusta

- Usar um caso padronizado e previamente testado.
- Oferecer instruções, tempo e acesso a ferramentas comparáveis.
- Não exigir conhecimento prévio do harness interno ou de nomenclaturas proprietárias.
- Avaliar a qualidade do raciocínio e da validação, não o estilo pessoal de interação.
- Considerar diferenças de familiaridade com o domínio do exercício.
- Permitir que o candidato declare limitações de acesso ou de ferramenta.
- Separar a maturidade em IA da avaliação técnica específica da vaga.
- Não inferir maturidade por idade, cargo atual, anos de experiência ou eloquência.
- Registrar evidências e incertezas, em vez de transformar impressões em fatos.
- Comunicar previamente como o exercício será usado no processo seletivo e respeitar as políticas de privacidade e retenção aplicáveis.

---

## 10. Modelo de relatório do avaliador

### Identificação do exercício
- Candidato:
- Data:
- Família de função:
- Ferramentas utilizadas:
- Duração:
- Avaliador(es):

### Resultado observado
- Solução ou artefato entregue:
- Critérios de aceite atendidos:
- Limitações conhecidas:

### Perfil de maturidade
- Nível predominante:
- Perfil Heavy User:
- Evidências de Builder:
- Confiança da avaliação: baixa / média / alta

### Dimensões
| Dimensão | Nota (0–4) | Evidência observada |
|---|---:|---|
| Entendimento e decomposição | | |
| Contexto e instruções | | |
| Delegação e orquestração | | |
| Validação e pensamento crítico | | |
| Qualidade da solução | | |
| Segurança e responsabilidade | | |
| Reutilização e potencial Builder | | |

### Síntese
- Comportamentos fortes demonstrados:
- Oportunidades de evolução:
- Riscos ou lacunas que precisam de investigação adicional:
- Limitações do exercício:
- Próximo passo recomendado para o processo seletivo:

**Importante:** o relatório informa a decisão humana; não a substitui. Não utilizar a pontuação agregada como decisão automática de contratação.

---

## 11. Segurança, privacidade e governança

- Usar apenas dados sintéticos ou previamente autorizados.
- Não permitir credenciais reais, dados de clientes ou informações internas confidenciais no exercício.
- Definir previamente quais ferramentas de IA são permitidas e como seus dados são tratados.
- Limitar permissões do sandbox ao necessário para a avaliação.
- Não executar comandos destrutivos ou ações externas sem autorização explícita.
- Definir retenção e acesso aos artefatos e registros do candidato.
- Informar o propósito da coleta de dados e limitar o uso ao processo declarado.
- Tratar logs de interação como dados potencialmente sensíveis.
- Revisar o exercício periodicamente para detectar vazamento de respostas, viés ou mudanças nas ferramentas.

---

## 12. Evolução futura

O assessment externo deve permanecer um **módulo isolado e opcional**, sem criar dependência para as waves do domínio principal da Sophia.

O modelo de maturidade pode compartilhar conceitos genéricos com o enablement interno, desde que isso não introduza entidades, fluxos ou requisitos específicos de recrutamento no domínio central.

Evoluções possíveis:
1. validar o caso com avaliadores e candidatos piloto;
2. calibrar rubrica e pesos com evidências reais;
3. criar versões para diferentes famílias de função;
4. estabelecer exemplos de evidências por nível;
5. revisar consistência entre avaliadores;
6. melhorar acessibilidade, segurança e experiência do candidato.

### Critério de sucesso

O assessment é útil se permite distinguir, com evidências compreensíveis e comparáveis, entre uso predominantemente baseado em prompts e capacidade de organizar, delegar, orquestrar, validar e transformar trabalho em capacidades reutilizáveis, sem confundir isso com senioridade profissional.
