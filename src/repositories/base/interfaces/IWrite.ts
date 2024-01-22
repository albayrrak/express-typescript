export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  update(id: number, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
