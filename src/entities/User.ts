import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Status } from "./Status";

import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @Column("text")
  @IsEmail()
  email!: string;

  @Column("text")
  name!: string;

  @Column("text")
  lastname!: string;

  @Column("text")
  publicAddress!: string;

  @Column("varchar")
  biography?: string;

  @Column("boolean")
  isVerified!: boolean;

  @Column("text")
  role: string = "default";

  @Column("integer")
  totalSales: number = 0;

  @Column({ type: "text", nullable: true })
  imageUrl?: string;

  @Column("text")
  bannerHash?: string;

  @Column("text")
  nonce?: string;

  @Column("text")
  website?: string;

  @Column("text")
  twitter?: string;

  @Column("text")
  facebook?: string;

  @Column("text")
  linkedIn?: string;

  @Column("text")
  mirrorxyz?: string;

  @Column("text")
  instagram?: string;

  @Column("text")
  approvedBy?: string;

  @OneToOne(() => Status)
  @JoinColumn()
  status?: Status;
}
