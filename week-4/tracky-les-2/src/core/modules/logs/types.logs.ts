import { Tables, TablesInsert, TablesUpdate } from "@core/network/supabase/database.types";
import { Project } from "../projects/types.projects";

export type Log = Tables<"logs">;

export type LogWithProject = Log & {
  project: Project;
};

export type CreateLogBody = TablesInsert<"logs">;
export type UpdateLogBody = TablesUpdate<"logs">;
