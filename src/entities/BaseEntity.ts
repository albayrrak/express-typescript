import { UUID } from "crypto";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;
}
