# Jefferson Silva — Integrações SAP

Página de apresentação para captar projeto de integração SAP Business One.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · lucide-react

---

## Rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

Build de produção:

```bash
npm run build
npm start
```

---

## Onde editar o conteúdo

**Tudo em `lib/content.ts`.** Você não precisa abrir nenhum componente para
mudar texto.

Campos pendentes usam este formato:

```ts
value: { todo: "seu e-mail pessoal aqui" }
```

Eles aparecem no site como etiqueta laranja tracejada. Troque por uma string
normal e a etiqueta desaparece:

```ts
value: "jefferson@exemplo.com"
```

### Pendências antes de divulgar o link

1. **Contato** — e-mail pessoal, WhatsApp e LinkedIn em `contact.channels`.
   Não use e-mail do trabalho.
2. **O que a aplicação do SAP resolveu** — `experience.roles[0].bullets`.
   Uma linha concreta. "Portal onde o cliente consulta pedido e nota sem
   ligar para o comercial" convence; "desenvolvimento de solução integrada"
   não.
3. **Um número**, se existir. Se não existir, apague a linha.
4. **Stack** — complete `stack.items` e apague `stack.pending`.
5. **Segundo bloco de experiência** — preencha ou apague
   `experience.roles[1]` inteiro.
6. **Remova o checklist** — apague `<Checklist />` de `app/page.tsx`. Ele é
   lembrete seu, não conteúdo para o cliente.

---

## Estrutura

```
app/
  layout.tsx          fontes (next/font) e metadata
  page.tsx            composição das seções
  globals.css         tokens de tema (claro/escuro) e animação do pipeline
components/
  section.tsx         casca de seção (rail + título + subtítulo)
  fillable.tsx        <Field> que renderiza texto ou etiqueta de pendência
  sections/           hero, pipeline, serviços, stack, experiência,
                      condições, contato, checklist
  ui/                 componentes shadcn (button, card, badge, separator)
lib/
  content.ts          TODO o conteúdo
  utils.ts            cn()
```

## Tema

Paleta em `app/globals.css`: neutros de aço com viés azul e um único sinal em
âmbar queimado (`--signal`). Claro e escuro definidos como tokens.

O tema segue a preferência do sistema (`prefers-color-scheme`). A classe
`.dark` também funciona, caso você queira adicionar um botão de alternância
depois — nesse caso instale `next-themes`.

Valores em hex em vez de oklch, de propósito: é mais fácil de você editar.

## shadcn/ui

O projeto já tem `components.json`, `lib/utils.ts` e quatro componentes em
`components/ui`. Para adicionar outros:

```bash
npx shadcn@latest add dialog sheet
```

(O CLI foi configurado na mão porque o registro do shadcn estava bloqueado no
ambiente onde o projeto foi gerado. Na sua máquina o comando acima funciona
normalmente.)

## Publicar

A forma mais rápida é Vercel: suba o repositório no GitHub, importe em
vercel.com e o deploy sai sem configuração. O plano gratuito atende de sobra
um site de apresentação.

---

## Nota sobre o contrato de trabalho

Antes de divulgar o link, confira se seu contrato tem cláusula de
exclusividade ou de dedicação integral. Isso é assunto para o RH ou um
advogado.
