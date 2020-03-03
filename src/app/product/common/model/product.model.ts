

export interface ProductModel {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly price: number;
  readonly key: string;
  readonly categoryId: string;
}
