import { getProjects } from "@core/modules/projects/api.projects";
import { ProjectWithClient } from "@core/modules/projects/types.projects";
import ErrorMessage from "@design/Alert/ErrorMessage";
import HeaderButtonLink from "@design/Button/HeaderButtonLink";
import ListItem from "@design/List/ListItem";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { FlatList } from "react-native";

const ProjectsLayout = () => {
  const navigation = useNavigation();
  const {
    data: projects,
    error,
    isLoading,
  } = useQuery<ProjectWithClient[]>({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButtonLink href="/projects/create" title="Add project" icon="plus" />,
    });
  }, [navigation]);

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !projects) {
    return (
      <DefaultView>
        <LoadingIndicator />
      </DefaultView>
    );
  }

  if (projects.length === 0) {
    return (
      <EmptyView
        title="No Projects"
        description="You have not added any projects yet."
        icon="folder"
        href="/projects/create"
      />
    );
  }

  return (
    <DefaultView padding={false}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: ProjectWithClient }) => (
          <ListItem title={item.name} description={item.client.name} href={`/projects/${item.id}`} />
        )}
      />
    </DefaultView>
  );
};

export default ProjectsLayout;
