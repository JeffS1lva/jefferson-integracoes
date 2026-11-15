# Melhorias pendentes

Revisão de 15/11/2026, sobre o commit `0ff4594`.

**Estado atual:** build passa, typecheck limpo, nenhuma pendência de conteúdo
em aberto, bloco de checklist removido. A página está publicável.

As melhorias abaixo estão em ordem de impacto. As do bloco 1 valem antes de
mandar o link para qualquer pessoa; o resto é acabamento.

---

## 1. Antes de divulgar o link

### 1.1 Completar o Open Graph

**Por quê:** este link vai ser colado em mensagem de LinkedIn e WhatsApp para
consultoria. Hoje o `openGraph` existe em `app/layout.tsx` mas está
incompleto — falta `metadataBase`, falta `url` e **falta imagem**. Sem imagem,
o link aparece como texto, sem cartão de preview. Link sem preview perde
clique, e este link é ferramenta de prospecção.

**O que fazer:**

- Adicionar `metadataBase` em `app/layout.tsx` apontando para o domínio de
  produção, lendo de variável de ambiente com fallback:
  ```ts
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://<dominio-da-vercel>"
  ),
  ```
  Na Vercel, `VERCEL_PROJECT_PRODUCTION_URL` também serve de origem.
- Criar `app/opengraph-image.tsx` usando `ImageResponse` do `next/og`
  (1200×630). Gera a imagem no build, sem precisar de arquivo binário no
  repositório. Usar os tokens da paleta: fundo `#0e1218`, texto `#e8ecf2`,
  destaque `#f0914a`. Conteúdo: nome, a frase de posicionamento e os termos
  `SAP Business One · Service Layer · Node`.
- Acrescentar `url` e `siteName` ao bloco `openGraph`.
- Acrescentar `twitter: { card: "summary_large_image" }`.

**Verificar depois do deploy:** colar o link no WhatsApp e no LinkedIn e
confirmar que o cartão aparece.

### 1.2 Favicon

**Por quê:** o favicon padrão do Next foi removido e não houve substituto, então
a aba mostra ícone genérico.

**O que fazer:** criar `app/icon.tsx` com `ImageResponse` (32×32): fundo
`#0e1218`, a letra `J` em `#f0914a`, fonte pesada. Mesma abordagem do item
anterior, sem arquivo binário.

### 1.3 Resolver o lockfile duplicado

**Por quê:** `package-lock.json` e `pnpm-lock.yaml` estão os dois versionados.
A Vercel detecta o gerenciador de pacote pelo lockfile presente; com dois, ela
pode escolher o que você não testou e instalar versões diferentes.

**O que fazer:** escolher um e remover o outro do versionamento.

```bash
# o projeto foi montado e verificado com npm
git rm --cached pnpm-lock.yaml
echo "pnpm-lock.yaml" >> .gitignore
```

---

## 2. Conteúdo

### 2.1 Explicar o portal das enfermeiras

**Por quê:** quem lê de fora não sabe que, em produtos hospitalares, a
enfermeira é quem especifica e padroniza o produto. Sem isso, o item parece
detalhe interno; com isso, mostra que você entendeu o negócio e não só o
sistema.

**Onde:** `lib/content.ts`, `experience.roles[0].projects`.

**Sugestão:** acrescentar ao `label` ou ao começo do `body` algo como
*"o público que especifica e padroniza produto dentro do hospital"*.

### 2.2 Subir a automação de cadastro para o topo

**Por quê:** entre os cinco projetos listados, a automação de cadastro é a de
maior diferenciação. Consultar SUFRAMA para apurar benefício de ICMS, IPI e
COFINS e gravar o parceiro de negócios via Service Layer exige entender regime
tributário além de código — é raro, e consultoria de B1 tem dificuldade de
contratar quem faça. Hoje ela está em último na lista, posição de menor
atenção.

**Onde:** `lib/content.ts`, reordenar `experience.roles[0].projects`.

**Ordem sugerida:** automação de cadastro, portal dos representantes, portal do
cliente, rastreio com transportadoras, portal das enfermeiras.

---

## 3. Acabamento

### 3.1 Remover código morto

`components/ui/separator.tsx` não é usado em lugar nenhum. Instalei junto com
os outros componentes shadcn e o projeto nunca precisou dele.

```bash
git rm components/ui/separator.tsx
npm uninstall @radix-ui/react-separator
```

### 3.2 `sitemap.ts` e `robots.ts`

Não existem. Criar `app/sitemap.ts` e `app/robots.ts` para o site ser
indexável. São poucos arquivos e quatro linhas cada.

### 3.3 Alternância de tema

O tema hoje segue a preferência do sistema. A classe `.dark` já está preparada
em `app/globals.css`, então um botão de alternância é só instalar `next-themes`
e envolver o layout. Opcional, mas é o tipo de acabamento que passa cuidado.

### 3.4 Transição de entrada por seção

Animação sutil ao entrar na viewport. Respeitar `prefers-reduced-motion`, que
já está tratado para o pulso do pipeline, e manter o estado de repouso visível
— nada de seção começando em `opacity: 0` esperando observer, senão a página
aparece vazia em link compartilhado e em leitor sem JavaScript.

---

## Antes de cada commit

```bash
npx tsc --noEmit
npm run build
```

Os dois precisam passar.

---

## Fora do escopo desta lista

Vale lembrar do que o `CLAUDE.md` do projeto trava, para não gastar tempo
discutindo com o agente: paleta, tipografia, rota nova, blog, formulário com
envio e autenticação. Se quiser mudar algum desses, edite o `CLAUDE.md`
primeiro — ele é a fonte da verdade, e brigar com ele a cada prompt custa mais
caro que alterá-lo.