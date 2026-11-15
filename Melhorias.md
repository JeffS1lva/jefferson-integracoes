# Melhorias pendentes

Revisão de 15/11/2026, sobre o site no ar em
`https://jefferson-integracoes.vercel.app`.

## Já verificado e funcionando

Checado no navegador, não por leitura de código:

- Build e typecheck passam; nenhuma pendência de conteúdo em aberto.
- Tipografia carregando (Archivo, IBM Plex Sans e Mono).
- Paleta intacta nos dois temas; alternância de tema gravando `.dark` no html.
- **Sem overflow horizontal em 375px** (`scrollWidth` igual ao `clientWidth`).
- Animação por scroll revelando as seções corretamente, com
  `@supports (animation-timeline: view())` e `prefers-reduced-motion`
  tratados.
- `og:image` respondendo 200 em PNG 1200×630, com Twitter card, `og:url`,
  `siteName` e favicon.
- `robots.ts` e `sitemap.ts` no lugar.
- Lockfile duplicado resolvido; projetos reordenados com a automação de
  cadastro em primeiro; linha das enfermeiras explicada.

---

## 1. Corrigir o texto da imagem de Open Graph

**Arquivo:** `app/opengraph-image.tsx`

**Problema.** A imagem hoje diz:

> Integração entre **SAP Business One**

A frase está pendurada. "Entre" pede um segundo termo e ele não aparece, então
lê como texto cortado e não como espaço proposital — o lado direito fica vazio
e reforça a impressão. Além disso, "SAP Business One" aparece duas vezes: no
título e na linha de termos abaixo.

**Por que importa.** Essa imagem representa você em toda mensagem que for
enviada para consultoria. É a primeira coisa que a pessoa vê, antes de clicar.

**Correção preferida:** completar a frase e tirar a repetição.

- Título: `Integração entre SAP Business One e aplicações modernas`
- Linha de termos: `Service Layer · Node · TypeScript`

Isso preenche o vazio à direita e deixa o preview igual ao título do site, o
que dá coerência entre o que a pessoa vê na mensagem e o que encontra ao
clicar.

**Alternativa**, se preferir título curto: `Integração SAP Business One`, que
é autossuficiente, mantendo a linha de termos sem repetir o nome.

**Como conferir depois do deploy.** A Vercel versiona a imagem por hash, então
o cache do WhatsApp pode servir a antiga por um tempo. Abra
`/opengraph-image` direto no navegador para ver a nova na hora.

---

## 2. Tirar a animação de entrada do herói

**Arquivo:** `app/page.tsx` ou `components/sections/hero.tsx`, onde está a
classe `rise` no `h1` e no parágrafo seguinte.

**Situação.** A classe `rise` usa `animation-fill-mode: both` com delay
(`0.08s` no `h1`, `0.16s` no parágrafo). Com `fill-mode: both`, o elemento
fica no estado inicial — `opacity: 0` — durante o delay. Resultado: o primeiro
quadro da página tem o título invisível.

Em conexão boa é menos de um segundo e um visitante humano não percebe. Mas é
o elemento mais importante da página, já está acima da dobra, e serviço que
renderiza sem esperar pode capturar o quadro vazio.

**Recomendação.** Remover `rise` do `h1` e do parágrafo do herói, mantendo nas
seções de baixo. Animação de entrada no que a pessoa já está olhando compra
pouco e custa a primeira impressão.

**Isto é gosto, não defeito.** Os dois lados se defendem. Se preferir manter,
mantenha — mas saiba que o custo é esse.

---

## 3. Remover código morto

**Arquivo:** `components/ui/separator.tsx`

Continua no projeto e não é usado em lugar nenhum. Veio junto quando instalei
os componentes shadcn e o projeto nunca precisou dele.

```bash
git rm components/ui/separator.tsx
npm uninstall @radix-ui/react-separator
```

---

## Antes de cada commit

```bash
npx tsc --noEmit
npm run build
```

---

## Depois destes três

A página está pronta para ser divulgada. O que fica pendente não é mais
técnico: são as quinze mensagens para consultorias de SAP B1 e software
houses, que é o que transforma o site em projeto pago.