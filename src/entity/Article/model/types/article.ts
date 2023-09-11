import { User } from '../../../User/model/types/userSchema';

export enum ArticleBlockType {
  IMAGE = 'IMAGE',
  CODE = 'CODE',
  TEXT = 'TEXT',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: Array<string>;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  ALL = 'All',
  IT = 'IT',
  FINANCIAL = 'Financial',
  SCIENCE = 'Science',
  ECONOMIC = 'Economic',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: Array<ArticleType>;
  blocks: Array<ArticleBlock>;
}
