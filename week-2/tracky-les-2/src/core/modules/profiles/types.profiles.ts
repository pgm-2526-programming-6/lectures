import { Database, Tables } from "@core/network/supabase/database.types";

export type Profile = Tables<"profiles">;

export type UserRole = Database["public"]["Enums"]["role"];
