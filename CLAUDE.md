# CLAUDE.md

Instruções para agentes de código neste repositório. Leia antes de qualquer alteração.

## O que este projeto é

Site de apresentação de uma página, em português do Brasil, com um único
objetivo comercial: fazer uma consultoria de SAP Business One ou uma software
house responder a uma mensagem de prospecção e contratar um projeto pontual de
integração.

Público: líder técnico ou responsável comercial que abre o link por 20 segundos
antes de decidir se responde. Ele confia em quem demonstra domínio do assunto,
não em quem tem o site mais bonito.

Critério de toda decisão: **isso aumenta a chance de a pessoa responder?** Se a
resposta não for um sim claro, não faça.

## O que este projeto NÃO é

Não transforme em nenhuma destas coisas, mesmo que pareça uma melhoria natural:

- blog, CMS, área de conteúdo ou coleção de artigos
- autenticação, painel administrativo, banco de dados ou backend
- formulário de contato com envio (não há servidor; o contato é direto)
- portfólio com galeria de projetos, carrossel ou filtros
- rotas adicionais, menu de navegação ou âncoras de seção
- página institucional genérica de desenvolvedor full stack

A página tem uma rota (`/`) e deve continuar com uma. Se uma mudança pedir rota
nova, questione antes de implementar.

## Escopo técnico travado

Stack fixa. Não introduza dependência nova sem o usuário pedir explicitamente.

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 — configuração **CSS-first** em `app/globals.css`.
  Não crie `tailwind.config.js`. Não instale PostCSS.
  O Tailwind entra por `@tailwindcss/turbopack`.
- shadcn/ui · lucide-react
- Alias de import: `@/*` a partir da raiz

Componentes do shadcn em `components/ui/` são código gerado. Não reescreva nem
"melhore" esses arquivos. Para adicionar outro componente:
`npx shadcn@latest add <nome>`.

Server Components por padrão. `"use client"` só quando houver estado,
efeito ou evento de verdade — hoje a página não precisa de nenhum.

## Paleta — regra mais importante

A identidade visual já foi decidida. **Não proponha, não ajuste e não
"modernize" a paleta.**

Direção: neutros de aço com viés azul (mundo industrial e de ERP) com um único
sinal em âmbar queimado. A disciplina é essa — um só ponto de cor, tudo em volta
em silêncio.

Todos os valores vivem como tokens CSS em `app/globals.css`, em `:root`, no
bloco `@media (prefers-color-scheme: dark)` e em `.dark`. Os três conjuntos
precisam ficar em sincronia: ao mudar um token, mude nos três.

Regras:

- **Nunca escreva cor literal em componente.** Sem `bg-[#b8560f]`, sem
  `text-slate-500`, sem `bg-zinc-900`. Use apenas classes de token:
  `bg-background`, `text-muted-foreground`, `border-border`, `text-signal`,
  `bg-signal-soft`, `bg-card`.
- `--signal` é a cor de marca (o âmbar). Use para destaque e estado.
- `--accent` e `--secondary` são **superfícies neutras de interação**, convenção
  do shadcn. Não são a cor de marca. Não troque um pelo outro.
- Toda cor nova entra como token nos três blocos, nunca inline.
- Os valores estão em hex de propósito, para o usuário editar com facilidade.
  Não converta para oklch.
- Nada de gradiente, sombra colorida, glassmorphism ou segundo tom de destaque.

Tipografia também está decidida: `Archivo` para display, `IBM Plex Sans` para
texto, `IBM Plex Mono` para rótulos técnicos. Carregadas por `next/font/google`
em `app/layout.tsx` e expostas como `font-display`, `font-sans`, `font-mono`.
Não troque de família e não adicione uma quarta.

## Conteúdo

**Todo texto visível mora em `lib/content.ts`.** Nunca escreva texto de
interface direto no JSX. Se uma seção nova precisar de texto, o texto entra no
`content.ts` e o componente consome.

Campos pendentes usam o tipo `Fillable`:

```ts
value: { todo: "seu e-mail pessoal aqui" }  // vira etiqueta laranja na tela
value: "jefferson@exemplo.com"              // texto normal
```

O componente `<Field>` (`components/fillable.tsx`) resolve os dois casos.
Não remova esse mecanismo: é o que impede o usuário de publicar com lacuna.

Regra de honestidade, sem exceção: **nunca invente experiência, resultado,
número, cliente, certificação ou depoimento.** Se um campo pede um dado que o
usuário não forneceu, deixe como `{ todo: ... }` e avise. Métrica inventada em
página comercial desmonta na primeira pergunta técnica e custa o contrato.

## Tom do texto

Português do Brasil. Frase curta e direta. Escreva como quem já resolveu o
problema, não como quem vende serviço.

- Nomeie termos reais do domínio: Service Layer, OData, objeto de negócio,
  sessão que expira, retentativa, payload recusado. É o que prova competência.
- Evite linguagem de agência: "soluções inovadoras", "transformação digital",
  "excelência", "parceiro estratégico", "unimos tecnologia e resultado".
- Sem emoji. Sem exclamação. Sem número inventado.
- Prefira o concreto: "portal onde o cliente consulta pedido e nota sem ligar
  para o comercial" vale mais que "solução integrada de atendimento".

## Armadilhas já conhecidas

Problemas que custaram tempo. Não repita:

- **lucide-react v1 não tem ícone de marca.** `Github` e `Linkedin` não
  existem. Confira o export antes de usar qualquer ícone:
  `node -e "console.log('Nome' in require('lucide-react'))"`.
- **O pulso do pipeline anima um `::after`.** Delay inline em style não alcança
  pseudo-elemento: passa pela variável `--flow-delay`, lida em `globals.css`.
- **`next/font/google` busca a fonte em tempo de build.** Sem acesso a
  `fonts.googleapis.com` o build falha. É limitação de rede, não do código —
  não troque para `<link>` do Google Fonts para contornar.
- Utilitários `dark:` do Tailwind não estão em uso. O tema é todo por token, e
  por isso funciona com `prefers-color-scheme` e com a classe `.dark`. Não
  declare `@custom-variant dark` sem necessidade.

## Antes de entregar qualquer alteração

```bash
npx tsc --noEmit
npm run build
```

Os dois precisam passar. Não entregue mudança sem rodar.

## Como responder a pedido fora de escopo

Se o usuário pedir algo que conflita com este arquivo — paleta nova, blog,
dashboard, segunda rota — diga em uma linha o que isso quebra do propósito da
página, ofereça a alternativa que atende a intenção dentro do escopo, e
implemente se ele confirmar. O escopo é dele, não deste arquivo. Mas ele
merece ouvir o custo antes de pagar.