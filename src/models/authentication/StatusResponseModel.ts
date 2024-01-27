import { AppliedForRole, CurrentStatus } from "./RegisterRequestMode";

export type StatusRequestModel = {
  currentStatus: CurrentStatus;
  appliedForRole: AppliedForRole;
  appliedForCategory: string;
};

export type StatusResponseModel = {
  currentStatus: CurrentStatus;
  appliedForRole: AppliedForRole;
  appliedForCategory: string;
};
