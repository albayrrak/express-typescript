import { EntityTarget, ObjectLiteral, EntityManager } from "typeorm";
import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";

export abstract class BaseRepository<T extends ObjectLiteral> implements IWrite<T>, IRead<T> {
  private repository: EntityManager;
  private entity: EntityTarget<T>;

  constructor(repository: EntityManager, entity: EntityTarget<T>) {
    this.repository = repository;
    this.entity = entity;
  }

  async create(item: T): Promise<boolean> {
    try {
      await this.repository.save(this.entity, item);
      return true;
    } catch (error) {
      console.error("Error creating item:", error);
      return false;
    }
  }

  async update(id: number, item: T): Promise<boolean> {
    try {
      await this.repository.update(this.entity, id, item);
      return true;
    } catch (error) {
      return false;
    }
  }

  async delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  async findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
