import { getClients } from "@core/modules/clients/api.clients";
import { Client } from "@core/modules/clients/types.clients";
import HeaderButtonLink from "@design/Button/HeaderButtonLink";
import Divider from "@design/List/Divider";
import ListItem from "@design/List/ListItem";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import DataView from "@functional/Data/DataView";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { FlatList } from "react-native";

const ClientsLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButtonLink href="clients/create" title="Voeg klant toe" icon="plus" />,
    });
  }, [navigation]);

  /*
   * Voor een nog generieker voorbeeld dan in de les, zie projects.tsx
   */

  return (
    <DataView
      queryKey={["clients"]}
      queryFn={getClients}
      render={(clients) =>
        clients.length === 0 ? (
          <EmptyView
            title="No Clients"
            description="You have not added any clients yet."
            icon="briefcase"
            href="/clients/create"
          />
        ) : (
          <DefaultView padding={false}>
            <FlatList
              ItemSeparatorComponent={Divider}
              data={clients}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }: { item: Client }) => (
                <ListItem title={item.name} href={`/clients/${item.id}`} />
              )}
            />
          </DefaultView>
        )
      }
    />
  );
};

export default ClientsLayout;
