export interface ContentModel {
  name: string,
  id: number,
  order: number,
  children?: ContentModel[]
}
