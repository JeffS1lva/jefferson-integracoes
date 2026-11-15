/**
 * TODO o conteúdo do site mora aqui. Você não precisa abrir nenhum componente
 * para editar o texto.
 *
 * Campos do tipo `Fillable` aceitam duas formas:
 *   "texto pronto"            -> aparece normalmente
 *   { todo: "o que escrever" } -> aparece como etiqueta laranja de pendência
 *
 * Troque cada `{ todo: ... }` por uma string e a etiqueta desaparece.
 */

export type Todo = { todo: string };
export type Fillable = string | Todo;

export function isTodo(value: Fillable): value is Todo {
  return typeof value !== "string";
}

export const profile = {
  name: "Jefferson Silva",
  location: "Mauá, São Paulo",
  github: "JeffS1lva",
  githubUrl: "https://github.com/JeffS1lva",
  headline: {
    before: "Integração entre ",
    emphasis: "SAP Business One",
    after: " e aplicações modernas.",
  },
  lede:
    "Desenvolvo as integrações e APIs que ligam o B1 ao resto da operação: portal de cliente, e-commerce, aplicativo interno, rotina automática. Node.js, TypeScript e NestJS sobre a Service Layer.",
  status: "Disponível para projeto pontual",
};

export const pipeline = {
  label: "Onde eu entro",
  nodes: [
    {
      kind: "Origem",
      name: "SAP Business One",
      detail: "HANA · localização Brasil",
      icon: "database" as const,
      highlight: false,
    },
    {
      kind: "Interface",
      name: "Service Layer",
      detail: "OData · objetos de negócio",
      icon: "plug" as const,
      highlight: false,
    },
    {
      kind: "Meu trabalho",
      name: "API em Node / NestJS",
      detail: "autenticação · regra · fila · log",
      icon: "code" as const,
      highlight: true,
    },
    {
      kind: "Destino",
      name: "Portal, app ou parceiro",
      detail: "consumo sem tocar no ERP",
      icon: "monitor" as const,
      highlight: false,
    },
  ],
  note:
    "A Service Layer resolve o acesso, não o resto: sessão que expira, payload que o B1 recusa sem explicar, erro que precisa de retentativa, e a camada de regra que não cabe dentro do ERP. É essa parte que eu construo.",
};

export const services = {
  rail: "Serviços",
  title: "O que eu entrego",
  sub:
    "Escopo fechado, prazo combinado e código que sua equipe consegue manter depois que eu entrego.",
  items: [
    {
      n: "01",
      title: "Integração com o B1",
      body:
        "Leitura e gravação de pedido, parceiro de negócio, estoque e documento fiscal via Service Layer, com tratamento de sessão, erro e reprocessamento.",
    },
    {
      n: "02",
      title: "API e backend",
      body:
        "API REST em NestJS ou Express sobre TypeScript, com autenticação, validação e documentação, pronta para o front ou para o sistema do cliente consumir.",
    },
    {
      n: "03",
      title: "Automação de rotina manual",
      body:
        "Aquela planilha que alguém preenche toda manhã e joga no sistema. Viro isso em rotina agendada, com registro do que passou e do que falhou.",
    },
  ],
};

export const stack = {
  rail: "Stack",
  title: "Com o que eu trabalho",
  sub: "O que eu uso em produção hoje. Não listo o que só vi em curso.",
  items: [
    "TypeScript",
    "Node.js",
    "NestJS",
    "Express",
    "SAP B1 Service Layer",
    "SAP HANA",
    "REST / OData",
    "Git",
  ],
  pending: {
    todo: "+ acrescente: banco, Docker, front, testes",
  } satisfies Todo,
};

export const experience = {
  rail: "Experiência",
  title: "Onde eu fiz isso",
  roles: [
    {
      when: "abr 2024 — hoje" as Fillable,
      title: "Auxiliar Técnico de Informática" as Fillable,
      org: "Polar Fix · Indústria e Comércio de Produtos Hospitalares · Mauá, SP",
      bullets: [
        "Desenvolvimento de aplicação em NestJS integrada à Service Layer do SAP Business One 10 em HANA, com localização Brasil.",
        {
          todo: "descreva aqui o que a aplicação resolveu, em uma linha",
        },
        {
          todo: "um número, se tiver: horas economizadas, pedidos por dia, usuários",
        },
        "Suporte e infraestrutura de TI da operação industrial.",
      ] as Fillable[],
    },
    {
      when: { todo: "período" } satisfies Todo,
      title: { todo: "outro projeto, pessoal ou freelance" } satisfies Todo,
      org:
        "Se tiver algo no GitHub que funciona, vale mais que um curso. Se não tiver, apague este bloco inteiro em lib/content.ts.",
      bullets: [] as Fillable[],
    },
  ],
};

export const terms = {
  rail: "Condições",
  title: "Como eu trabalho",
  sub:
    "Trabalho em período integral em outra empresa. Isso define o formato, e eu prefiro deixar claro antes de começar.",
  items: [
    {
      label: "Formato",
      value: "Projeto com escopo e prazo fechados",
      icon: "file" as const,
    },
    {
      label: "Disponibilidade",
      value: "Noites de terça a quinta e sábado pela manhã",
      icon: "clock" as const,
    },
    {
      label: "Entrega",
      value: "Código no seu repositório, com documentação",
      icon: "branch" as const,
    },
    {
      label: "Primeiro passo",
      value: "Conversa de 30 minutos para ver se o escopo cabe",
      icon: "call" as const,
    },
  ],
};

export const contact = {
  rail: "Contato",
  title: "Tem uma integração parada na fila?",
  sub:
    "Me manda o cenário em duas linhas. Eu respondo se dá para fazer, em quanto tempo e por quanto, sem enrolação.",
  channels: [
    {
      label: "E-mail",
      value: { todo: "seu e-mail pessoal aqui" } satisfies Todo,
      href: null as string | null,
      icon: "mail" as const,
    },
    {
      label: "WhatsApp",
      value: { todo: "seu número" } satisfies Todo,
      href: null as string | null,
      icon: "whatsapp" as const,
    },
    {
      label: "LinkedIn",
      value: { todo: "link do seu perfil" } satisfies Todo,
      href: null as string | null,
      icon: "linkedin" as const,
    },
    {
      label: "GitHub",
      value: "github.com/JeffS1lva" as Fillable,
      href: "https://github.com/JeffS1lva" as string | null,
      icon: "github" as const,
    },
  ],
};

/**
 * Este bloco é um lembrete para você, não para o cliente.
 * Apague o <Checklist /> de app/page.tsx antes de enviar o link para alguém.
 */
export const checklist = {
  rail: "Antes de enviar o link",
  title: "Cinco coisas para você preencher",
  items: [
    {
      strong: "Contato.",
      body:
        "Use e-mail pessoal, nunca o do trabalho. Cliente responde no endereço que ele vê.",
    },
    {
      strong: "O que a aplicação do SAP resolveu.",
      body:
        "Uma linha concreta vale mais que a página toda. “Portal onde o cliente consulta pedido e nota sem ligar para o comercial” convence; “desenvolvimento de solução integrada” não.",
    },
    {
      strong: "Um número, se existir.",
      body: "Se não existir, não invente. Apague a linha.",
    },
    {
      strong: "Complete a stack",
      body: "com o que você usa de verdade e tire o que não usa.",
    },
    {
      strong: "Confira seu contrato de trabalho",
      body:
        "antes de publicar: cláusula de exclusividade ou de dedicação integral existe em parte dos contratos, e isso é assunto para o RH ou um advogado, não para uma página.",
    },
  ],
};
