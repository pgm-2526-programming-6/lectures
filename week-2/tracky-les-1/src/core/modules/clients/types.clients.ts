import { Tables, TablesInsert, TablesUpdate } from "@core/network/supabase/database.types";

export type Client = Tables<"clients">;

export type CreateClientBody = TablesInsert<"clients">;
export type UpdateClientBody = TablesUpdate<"clients">;
