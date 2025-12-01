import { API } from "@core/network/supabase/api";
import { Client, CreateClientBody } from "./types.clients";

export const getClients = async (): Promise<Client[]> => {
  const { data } = await API.from("clients").select("*").order("name").throwOnError();
  return data;
};

export const getClientById = async (uid: number): Promise<Client | null> => {
  const { data } = await API.from("clients").select("*").eq("id", uid).throwOnError().single();
  return data;
};

export const createClient = async (body: CreateClientBody): Promise<Client | null> => {
  // select en single -> aangemaakte client ook terug geven
  const { data } = await API.from("clients").insert(body).throwOnError().select().single();
  return data;
};
