import { API } from "@core/network/supabase/api";
import { uploadImage } from "../storage/api";
import { Bucket } from "../storage/types";
import { Profile } from "./types.profiles";

export const getProfileById = async (id: string): Promise<Profile | null> => {
  const { data } = await API.from("profiles").select("*").eq("id", id).throwOnError().single();
  return data;
};

export const updateProfile = async (id: string, profile: Partial<Profile>) => {
  const { data } = await API.from("profiles").update(profile).eq("id", id).throwOnError().select().single();
  return data;
};

export const updateProfileAvatar = async (id: string, image: string) => {
  // 1. Upload image to bucket
  const filename = `${id}/${Date.now()}.jpg`;
  await uploadImage(Bucket.Avatars, image, filename);

  // 2. Update profile table with image
  const data = await updateProfile(id, {
    image: filename,
  });

  return data;
};
