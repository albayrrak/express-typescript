import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { AppliedForRole, CurrentStatus } from "../models/authentication/RegisterRequestMode";

@Entity()
export class Status extends BaseEntity {
  @Column("text")
  currentStatus: CurrentStatus = CurrentStatus.Passive;

  @Column("text")
  appliedForRole: AppliedForRole = AppliedForRole.Default;

  @Column("text")
  appliedForCategory!: string;
}
