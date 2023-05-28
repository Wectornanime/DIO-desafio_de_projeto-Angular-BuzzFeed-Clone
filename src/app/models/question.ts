export type question = {
  id: number;
  question: string;
  options: {
    id: number,
    name: string,
    alias: string
  }[]
}
