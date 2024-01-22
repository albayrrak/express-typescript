import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class User extends BaseEntity {
  @Column("text")
  name!: string;

  @Column("text")
  lastname!: string;
}
