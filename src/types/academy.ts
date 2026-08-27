export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type Polo = {
  name: string;
  location: string;
  address: string;
  schedule: string;
  leader: string;
  description: string;
  images: ImageAsset[];
};
export type Responsavel = {
  name: string;
  rank: string;
  experience: string;
  bio: string;
  image: ImageAsset;
};
