import { getProjectById } from "@core/modules/projects/api.projects";
import ErrorMessage from "@design/Alert/ErrorMessage";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import ThemedText from "@design/Typography/ThemedText";
import DefaultView from "@design/View/DefaultView";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";

const ProjectsDetailLayout = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    data: project,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects", id],
    queryFn: () => getProjectById(id),
  });

  // todo move fetch logic to keep title

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !project) {
    return (
      <DefaultView>
        <LoadingIndicator />
      </DefaultView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: project.name }} />
      <DefaultView>
        <ThemedText>{project.name}</ThemedText>
        <ThemedText>{project.client.name}</ThemedText>
      </DefaultView>
    </>
  );
};

export default ProjectsDetailLayout;
