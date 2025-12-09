import { getProjects } from "@core/modules/projects/api.projects";
import HeaderButtonLink from "@design/Button/HeaderButtonLink";
import ListItem from "@design/List/ListItem";
import EmptyView from "@design/View/EmptyView";
import DataListView from "@functional/Data/DataListView";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

const ProjectsLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButtonLink href="/projects/create" title="Add project" icon="plus" />,
    });
  }, [navigation]);

  /*
   * Dit is een nog generieker voorbeeld dan in de les, met aparte DataView voor lists
   */

  return (
    <DataListView
      queryKey={["projects"]}
      queryFn={getProjects}
      renderEmptyView={() => (
        <EmptyView
          title="No Projects"
          description="You have not added any projects yet."
          icon="folder"
          href="/projects/create"
        />
      )}
      renderItem={({ item }) => (
        <ListItem title={item.name} description={item.client.name} href={`/projects/${item.id}`} />
      )}
    />
  );
};

export default ProjectsLayout;
