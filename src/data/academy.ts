import type { ImageAsset, Polo, Responsavel } from "@/types/academy";

const image = (src: string, alt: string): ImageAsset => ({
  src,
  alt,
  width: 1200,
  height: 900,
});

export const academy = {
  name: "AOW Jiu-Jitsu",
  description:
    "Um espaço para treinar com propósito, construir confiança e evoluir dentro e fora do tatame.",
  whatsapp: "5599999999999",
  instagram: "https://www.instagram.com/aow_jiu_jitsu?igsi=OXVzMHdnNjE5bmt0",
};
export const polos: Polo[] = [
  {
    name: "Polo Trindade",
    location: "Pinheiros · São Paulo",
    address: "Rua dos Pinheiros, 842 - Pinheiros, São Paulo - SP",
    schedule: "Seg a Sex · 06h30 / 12h / 19h30",
    leader: "Prof. André Martins",
    description:
      "Nosso primeiro endereço. Um tatame aberto para quem está começando e para quem busca sua próxima graduação.",
    images: [
      image(
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85",
        "Treino de Jiu-Jitsu no tatame",
      ),
    ],
  },
  {
    name: "Polo Itauna ",
    location: "Pinheiros · São Paulo",
    address: "Rua dos Pinheiros, 842 - Pinheiros, São Paulo - SP",
    schedule: "Seg a Sex · 06h30 / 12h / 19h30",
    leader: "Prof. André Martins",
    description:
      "Nosso primeiro endereço. Um tatame aberto para quem está começando e para quem busca sua próxima graduação.",
    images: [
      image(
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85",
        "Treino de Jiu-Jitsu no tatame",
      ),
    ],
  },
  {
    name: "Polo Bairro Antonia",
    location: "Pinheiros · São Paulo",
    address: "Rua dos Pinheiros, 842 - Pinheiros, São Paulo - SP",
    schedule: "Seg a Sex · 06h30 / 12h / 19h30",
    leader: "Prof. André Martins",
    description:
      "Nosso primeiro endereço. Um tatame aberto para quem está começando e para quem busca sua próxima graduação.",
    images: [
      image(
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85",
        "Treino de Jiu-Jitsu no tatame",
      ),
    ],
  },
  {
    name: "Polo São Gonçalo",
    location: "Pinheiros · São Paulo",
    address: "Rua dos Pinheiros, 842 - Pinheiros, São Paulo - SP",
    schedule: "Seg a Sex · 06h30 / 12h / 19h30",
    leader: "Prof. André Martins",
    description:
      "Nosso primeiro endereço. Um tatame aberto para quem está começando e para quem busca sua próxima graduação.",
    images: [
      image(
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85",
        "Treino de Jiu-Jitsu no tatame",
      ),
    ],
  },
  {
    name: "Polo Alcântara",
    location: "Pinheiros · São Paulo",
    address: "Rua dos Pinheiros, 842 - Pinheiros, São Paulo - SP",
    schedule: "Seg a Sex · 06h30 / 12h / 19h30",
    leader: "Prof. André Martins",
    description:
      "Nosso primeiro endereço. Um tatame aberto para quem está começando e para quem busca sua próxima graduação.",
    images: [
      image(
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85",
        "Treino de Jiu-Jitsu no tatame",
      ),
    ],
  },
  {
    name: "Polo Fonseca",
    location: "Pinheiros · São Paulo",
    address: "Rua dos Pinheiros, 842 - Pinheiros, São Paulo - SP",
    schedule: "Seg a Sex · 06h30 / 12h / 19h30",
    leader: "Prof. André Martins",
    description:
      "Nosso primeiro endereço. Um tatame aberto para quem está começando e para quem busca sua próxima graduação.",
    images: [
      image(
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=85",
        "Treino de Jiu-Jitsu no tatame",
      ),
    ],
  },
  {
    name: "Polo Mutuapira",
    location: "Vila Mariana · São Paulo",
    address: "Rua Vergueiro, 2.150 - Vila Mariana, São Paulo - SP",
    schedule: "Seg a Sex · 07h / 18h / 20h30",
    leader: "Prof. Camila Nogueira",
    description:
      "Treino técnico e acolhedor no coração da Vila Mariana, com turmas para todas as idades e níveis.",
    images: [
      image(
        "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=85",
        "Pessoa se preparando para treino",
      ),
    ],
  },
  {
    name: "Polo Ipiiba",
    location: "Cambuí · Campinas",
    address: "Av. Júlio de Mesquita, 510 - Cambuí, Campinas - SP",
    schedule: "Seg, Qua e Sex · 07h / 19h",
    leader: "Prof. Lucas Ribeiro",
    description:
      "Uma comunidade forte e próxima, feita para você encontrar constância, respeito e evolução.",
    images: [
      image(
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
        "Atleta em movimento",
      ),
    ],
  },
];
export const gallery: ImageAsset[] = [
  image(
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1000&q=85",
    "Dupla treinando no tatame",
  ),
  image(
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85",
    "Treino intenso",
  ),
  image(
    "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1000&q=85",
    "Atleta antes do treino",
  ),
  image(
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
    "Comunidade treinando",
  ),
  image(
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
    "Movimento e técnica",
  ),
];
export const responsavel: Responsavel = {
  name: "André Martins",
  rank: "Faixa-preta 3º grau",
  experience: "20 anos de tatame",
  bio: "O Jiu-Jitsu me ensinou que força sem direção é só esforço. Em 2012, fundei a academia para criar um lugar onde cada pessoa pudesse descobrir sua própria potência, no seu tempo e com uma comunidade ao lado.",
  image: image(
    "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=85",
    "André Martins, responsável pela academia",
  ),
};
