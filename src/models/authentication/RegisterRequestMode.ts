import { UUID } from "crypto";
import { Status } from "../../entities/Status";

export enum CurrentStatus {
  Passive = "passive",
  Rejected = "rejected",
  Pending = "pending",
}

export enum AppliedForRole {
  Default = "default",
  Artist = "artist",
  Curator = "curator",
  Gallery = "gallery",
}

export type RegisterRequestModel = {
  email: string;
  name: string;
  lastname: string;
  publicAddress: string;
  biography?: string;
  isVerified: boolean;
  role: string;
  totalSales: number;
  imageUrl?: string;
  bannerHash?: string;
  nonce?: string;
  website?: string;
  twitter?: string;
  facebook?: string;
  linkedIn?: string;
  mirrorxyz?: string;
  instagram?: string;
  approvedBy?: string;
  status?: Status;
};

export type RegisterResponseModel = {
  email: string;
  name: string;
  lastname: string;
  publicAddress: string;
  biography?: string;
  isVerified: boolean;
  role: string;
  totalSales: number;
  imageUrl?: string;
  bannerHash?: string;
  nonce?: string;
  website?: string;
  twitter?: string;
  facebook?: string;
  linkedIn?: string;
  mirrorxyz?: string;
  instagram?: string;
  approvedBy?: string;
  status?: Status;
};
