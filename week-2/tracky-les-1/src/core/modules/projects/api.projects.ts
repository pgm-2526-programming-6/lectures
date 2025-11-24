import { API } from "@core/network/supabase/api";
import { ProjectWithClient } from "./types.projects";

export const getProjects = async (): Promise<ProjectWithClient[] | null> => {
  const { data } = await API.from("projects").select("*, client:clients(*)").order("name").throwOnError();
  return Promise.resolve(data);
};

export const getProjectById = async (uid: number): Promise<ProjectWithClient | null> => {
  const response = await API.from("projects")
    .select("*, client:clients(*)")
    .eq("id", uid)
    .throwOnError()
    .single();
  return Promise.resolve(response.data);
};
