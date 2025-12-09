import { createProject } from "@core/modules/projects/api.projects";
import ProjectForm from "@functional/Projects/ProjectForm";
import { useQueryClient } from "@tanstack/react-query";
import { Stack, useRouter } from "expo-router";

const CreateProjectLayout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["projects"] });
    router.back();
  };

  return (
    <>
      <Stack.Screen options={{ title: "Add project" }} />

      <ProjectForm
        initialData={{ name: "" }}
        label="Aanmaken"
        updateMethod={createProject}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default CreateProjectLayout;
