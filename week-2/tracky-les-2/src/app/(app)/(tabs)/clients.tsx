import { getClients } from "@core/modules/clients/api.clients";
import { Client } from "@core/modules/clients/types.clients";
import ErrorMessage from "@design/Alert/ErrorMessage";
import ListItem from "@design/List/ListItem";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import { useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";

const ClientsLayout = () => {
  const {
    data: clients,
    error,
    isLoading,
  } = useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !clients) {
    return (
      <DefaultView>
        <LoadingIndicator />
      </DefaultView>
    );
  }

  if (clients.length === 0) {
    return (
      <EmptyView
        title="No Clients"
        description="You have not added any clients yet."
        icon="briefcase"
        href="/clients/create"
      />
    );
  }

  return (
    <DefaultView padding={false}>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: Client }) => (
          <ListItem title={item.name} href={`/clients/${item.id}`} />
        )}
      />
    </DefaultView>
  );
};

export default ClientsLayout;
