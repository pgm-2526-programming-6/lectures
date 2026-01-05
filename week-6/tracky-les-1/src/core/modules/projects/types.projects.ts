import { Client } from "@core/modules/clients/types.clients";
import { Tables, TablesInsert, TablesUpdate } from "@core/network/supabase/database.types";

export type Project = Tables<"projects">;

export type ProjectWithClient = Project & {
  client: Client;
};

export type CreateProjectBody = TablesInsert<"projects">;
export type UpdateProjectBody = TablesUpdate<"projects">;
