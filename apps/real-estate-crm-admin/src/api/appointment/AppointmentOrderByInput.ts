import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  propertyId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
