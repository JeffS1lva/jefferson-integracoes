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
  ogTerms: "Service Layer · Node · TypeScript",
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
  groups: [
    {
      label: "Backend",
      items: ["TypeScript", "Node.js", "NestJS", "Express"],
    },
    {
      label: "SAP",
      items: ["Service Layer", "REST / OData"],
    },
    {
      label: "Banco de dados",
      items: ["SAP HANA", "MySQL", "PostgreSQL"],
    },
    {
      label: "Frontend",
      items: ["TypeScript", "shadcn/ui"],
    },
    {
      label: "Ferramentas",
      items: ["Git"],
    },
  ],
};

export const experience = {
  rail: "Experiência",
  title: "Onde eu fiz isso",
  roles: [
    {
      when: "abr 2024 — hoje" as Fillable,
      title: "Auxiliar Técnico de Informática" as Fillable,
      org: "Polar Fix · Indústria e Comércio de Produtos Hospitalares · Mauá, SP",
      summary:
        "Aplicação em NestJS integrada à Service Layer do SAP Business One 10 em HANA, com localização Brasil.",
      projects: [
        {
          label: "Automação de cadastro",
          body: "Preenche o módulo de parceiros de negócios do SAP direto via Service Layer. Consulta de CNPJ na Receita Federal, consulta de inscrição estadual e busca automática de CEP. Consulta à SUFRAMA que traz para o cadastro os descontos de impostos a que o cliente tem direito, como ICMS, IPI, COFINS e outros. Plataforma compartilhada entre comercial, diretoria e financeiro.",
        },
        {
          label: "Portal dos representantes",
          body: "As informações do cliente, mais inadimplência. Cotações enviadas direto ao SAP via Service Layer. Consultas de venda: o que mais vende e o que deixou de vender.",
        },
        {
          label: "Portal do cliente",
          body: "Telas de pedidos com dados completos, notas fiscais e XML, boletos e rastreio de pedidos.",
        },
        {
          label: "Rastreio com transportadoras",
          body: "Integração com Pajuçara, Camilo dos Santos e Moviment, entre outras, e com agências dos Correios.",
        },
        {
          label: "Portal das enfermeiras",
          body: "Público que padroniza produtos dentro do hospital. Criação de oportunidades de venda e envio de amostras.",
        },
      ],
      support: "Suporte e infraestrutura de TI da operação industrial.",
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
      value:
        "Sistema pronto e funcionando na sua hospedagem, com código e documentação entregues. Parte da integração não fica no GitHub, por ser interna à operação.",
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
      value: "jeffdsilva.29@gmail.com",
      href: "mailto:jeffdsilva.29@gmail.com",
      icon: "mail" as const,
    },
    {
      label: "WhatsApp",
      value: "(11) 91467-4286",
      href: "https://wa.me/5511914674286",
      icon: "whatsapp" as const,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jefferson-silva-developer",
      href: "https://www.linkedin.com/in/jefferson-silva-developer/",
      icon: "linkedin" as const,
    },
    {
      label: "GitHub",
      value: "github.com/JeffS1lva",
      href: "https://github.com/JeffS1lva",
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

export const theme = {
  toggle: "Alternar entre tema claro e escuro",
};
