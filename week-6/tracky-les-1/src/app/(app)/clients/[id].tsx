import { getClientById, updateClient } from "@core/modules/clients/api.clients";
import ClientForm from "@functional/Clients/ClientForm";
import DataView from "@functional/Data/DataView";
import { useQueryClient } from "@tanstack/react-query";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

const ClientsDetailLayout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id } = useLocalSearchParams<{ id: string }>();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["clients"] });
    router.back();
  };

  return (
    <DataView
      queryKey={["clients", id]}
      queryFn={() => getClientById(parseInt(id))}
      render={(client) => (
        <>
          <Stack.Screen options={{ title: client.name }} />
          <ClientForm
            initialData={client}
            updateMethod={updateClient}
            onSuccess={handleSuccess}
            label="Updaten"
          />
        </>
      )}
    />
  );
};

export default ClientsDetailLayout;
