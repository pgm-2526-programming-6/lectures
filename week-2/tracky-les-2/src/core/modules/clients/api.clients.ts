import { API } from "@core/network/supabase/api";
import { Client } from "./types.clients";

export const getClients = async (): Promise<Client[]> => {
  const { data } = await API.from("clients").select("*").order("name").throwOnError();
  return Promise.resolve(data);
};

export const getClientById = async (uid: number): Promise<Client | null> => {
  const response = await API.from("clients").select("*").eq("id", uid).throwOnError().single();
  return Promise.resolve(response.data);
};
