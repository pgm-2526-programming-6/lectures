import { API } from "@core/network/supabase/api";
import { Bucket } from "../storage/types";
import { Profile } from "./types.profiles";

export const formatName = (profile: Profile) => {
  const { first_name: firstName, last_name: lastName } = profile;
  return `${firstName} ${lastName}`;
};

export const getInitials = (profile: Profile) => {
  const { first_name: firstName, last_name: lastName } = profile;
  return `${firstName[0]}${lastName[0]}`;
};

export const getAvatarUrl = (path: string) => {
  const { data } = API.storage.from(Bucket.Avatars).getPublicUrl(path);
  return data?.publicUrl;
};
