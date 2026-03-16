import { Post } from "./types/post";

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Lançamento do Nexus: A nova rede para parceiros de negócios",
    author: {
      name: "João Figueiredo",
      avatarUrl: "https://github.com/joaopedrofig.png",
    },
    contentSnippet:
      "Estamos animados em anunciar o lançamento do Nexus, uma plataforma inovadora projetada para conectar empreendedores e parceiros de negócios. Encontre seu próximo sócio ou colaborador aqui!",
    tags: ["lançamento", "negócios", "startup"],
    upvotes: 152,
    commentsCount: 34,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    id: "2",
    title: "Como validar sua ideia de negócio com R$100",
    author: {
      name: "Maria Silva",
      avatarUrl: "https://i.pravatar.cc/150?u=maria",
    },
    contentSnippet:
      "Validar uma ideia de negócio não precisa ser caro. Neste post, compartilho um guia passo a passo sobre como você pode testar sua hipótese de mercado com um orçamento mínimo.",
    tags: ["validação", "empreendedorismo", "dicas"],
    upvotes: 289,
    commentsCount: 78,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    id: "3",
    title: "Procurando um desenvolvedor full-stack para um projeto de IA",
    author: {
      name: "Carlos Andrade",
      avatarUrl: "https://i.pravatar.cc/150?u=carlos",
    },
    contentSnippet:
      "Tenho um projeto inovador na área de inteligência artificial e estou em busca de um desenvolvedor full-stack para se juntar como sócio. O projeto envolve processamento de linguagem natural e visão computacional.",
    tags: ["vaga", "sócio", "ia", "desenvolvedor"],
    upvotes: 98,
    commentsCount: 21,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    id: "4",
    title: "UI/UX Designer disponível para novos projetos",
    author: {
      name: "Ana Beatriz",
      avatarUrl: "https://i.pravatar.cc/150?u=ana",
    },
    contentSnippet:
      "Olá, comunidade! Sou designer UI/UX com 5 anos de experiência e estou aberta para novos projetos como freelancer ou em troca de equity. Meu portfólio está disponível no meu perfil.",
    tags: ["freelancer", "ui-ux", "design"],
    upvotes: 120,
    commentsCount: 45,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
];
