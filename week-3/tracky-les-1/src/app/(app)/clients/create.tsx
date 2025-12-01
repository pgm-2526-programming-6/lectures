import { createClient } from "@core/modules/clients/api.clients";
import ClientForm from "@functional/clients/ClientForm";
import { useQueryClient } from "@tanstack/react-query";
import { Stack, useRouter } from "expo-router";

const CreateClientScreen = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["clients"] });
    router.back();
  };

  return (
    <>
      <Stack.Screen options={{ title: "Add client" }} />
      <ClientForm updateMethod={createClient} onSuccess={handleSuccess} />
    </>
  );
};

export default CreateClientScreen;
