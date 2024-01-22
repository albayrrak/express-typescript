import { EntityManager, EntityTarget } from "typeorm";
import { IRead } from "../repositories/base/interfaces/IRead"; // Burada IRepositoryInterfaces'u oluşturduğunuz arayüzleri eklemeniz gerekebilir
import { IWrite } from "../repositories/base/interfaces/IWrite"; // Burada IRepositoryInterfaces'u oluşturduğunuz arayüzleri eklemeniz gerekebilir

export class BaseService<T> implements IWrite<T>, IRead<T> {
  private repository: IWrite<T> & IRead<T>;

  constructor(repository: IWrite<T> & IRead<T>) {
    this.repository = repository;
  }

  async create(item: T): Promise<boolean> {
    return await this.repository.create(item);
  }

  async update(id: number, item: T): Promise<boolean> {
    return await this.repository.update(id, item);
  }

  async delete(id: string): Promise<boolean> {
    return await this.repository.delete(id);
  }

  async find(item: T): Promise<T[]> {
    return await this.repository.find(item);
  }

  async findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
