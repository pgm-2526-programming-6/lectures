import { API } from "@core/network/supabase/api";
import { LogWithProject } from "./types.logs";

export const getLogsByDate = async (date: Date): Promise<LogWithProject[]> => {
  const { data } = await API.from("logs").select("*, project:projects(*)").eq("date", date).throwOnError();
  return data;
};
