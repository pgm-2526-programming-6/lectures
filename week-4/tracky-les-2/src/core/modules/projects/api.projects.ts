import { API } from "@core/network/supabase/api";
import { CreateProjectBody, Project, ProjectWithClient, UpdateProjectBody } from "./types.projects";

export const getProjects = async (): Promise<ProjectWithClient[]> => {
  const { data } = await API.from("projects").select("*, client:clients(*)").order("name").throwOnError();
  return data;
};

export const getProjectById = async (uid: number): Promise<ProjectWithClient | null> => {
  const { data } = await API.from("projects")
    .select("*, client:clients(*)")
    .eq("id", uid)
    .throwOnError()
    .single();
  return data;
};

export const createProject = async (body: CreateProjectBody): Promise<Project | null> => {
  // select en single -> aangemaakte client ook terug geven
  const { data } = await API.from("projects").insert(body).throwOnError().select().single();
  return data;
};

export const updateProject = async (body: UpdateProjectBody): Promise<Project | null> => {
  if (!body.id) {
    throw new Error("Project id is required");
  }
  const { data } = await API.from("projects").update(body).eq("id", body.id).throwOnError().select().single();
  return data;
};
