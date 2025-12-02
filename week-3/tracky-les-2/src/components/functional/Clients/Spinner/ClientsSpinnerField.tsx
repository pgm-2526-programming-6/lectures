import { getClients } from "@core/modules/clients/api.clients";
import SpinnerField, { SpinnerFieldProps } from "@design/Form/SpinnerField";
import { useQuery } from "@tanstack/react-query";

const ClientsSpinnerField = (props: Omit<SpinnerFieldProps, "options">) => {
  const { data: clients } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  if (!clients) {
    return null;
  }

  return (
    <SpinnerField
      {...props}
      options={clients.map((c) => ({
        label: c.name,
        value: c.id,
      }))}
    />
  );
};

export default ClientsSpinnerField;
