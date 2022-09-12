import { Wifi } from "@prisma/client";

export type TypeWifiData = Omit<Wifi, "id">;
