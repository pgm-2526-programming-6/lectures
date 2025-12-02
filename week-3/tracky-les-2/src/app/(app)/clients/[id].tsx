import { getClientById } from "@core/modules/clients/api.clients";
import ErrorMessage from "@design/Alert/ErrorMessage";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import DefaultView from "@design/View/DefaultView";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const ClientsDetailLayout = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    data: client,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["clients", id],
    queryFn: () => getClientById(parseInt(id)),
  });

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !client) {
    return (
      <DefaultView>
        <LoadingIndicator />
      </DefaultView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: client.name }} />
      <DefaultView>
        <Text>{client.name}</Text>
      </DefaultView>
    </>
  );
};

export default ClientsDetailLayout;
