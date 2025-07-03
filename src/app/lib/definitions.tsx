/**
 * Props Definition
 */

export type PropVocabSearchQuery = Partial<{
  ch: string;
  onlyWord: string;
  onlyMeaning: string;
  page: string;
  random: string,
  offset: string,
  count: number
}>;

export type Vocab = {
  word: string;
  meaning: string;
  hideWord?: boolean;
  hideMeaning?: boolean;
  conversation?: boolean;
  ch: number;
  image_url?: string;
};

export type VocabsList = Vocab[];
