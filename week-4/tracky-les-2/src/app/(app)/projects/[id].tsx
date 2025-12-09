import { getProjectById, updateProject } from "@core/modules/projects/api.projects";
import DataView from "@functional/Data/DataView";
import ProjectForm from "@functional/Projects/ProjectForm";
import { Stack, useLocalSearchParams } from "expo-router";

const ProjectsDetailLayout = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <DataView
      queryKey={["projects", id]}
      queryFn={() => getProjectById(parseInt(id))}
      render={(project) => (
        <>
          <Stack.Screen options={{ title: project.name }} />
          <ProjectForm initialData={project} updateMethod={updateProject} label="Updaten" />
        </>
      )}
    />
  );
};

export default ProjectsDetailLayout;
