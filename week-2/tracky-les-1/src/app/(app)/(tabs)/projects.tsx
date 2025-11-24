import { getProjects } from "@core/modules/projects/api.projects";
import { Project } from "@core/modules/projects/types.projects";
import ErrorMessage from "@design/Alert/ErrorMessage";
import ListItem from "@design/List/ListItem";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

const ProjectsLayout = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProjects()
      .then((projects) => {
        setProjects(projects);
      })
      .catch((err) => {
        setError(err.message || "An error occurred while fetching projects.");
      });
  }, []);

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (!projects) {
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
        renderItem={({ item }: { item: Project }) => (
          <ListItem title={item.name} href={`/projects/${item.id}`} />
        )}
      />
    </DefaultView>
  );
};

export default ProjectsLayout;
