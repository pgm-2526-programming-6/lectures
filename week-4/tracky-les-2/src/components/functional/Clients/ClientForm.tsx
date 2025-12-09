import { Client } from "@core/modules/clients/types.clients";
import ErrorMessage from "@design/Alert/ErrorMessage";
import Button from "@design/Button/Button";
import InputField from "@design/Form/InputField";
import DefaultView from "@design/View/DefaultView";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spacing } from "@style/theme";
import { useMutation } from "@tanstack/react-query";
import { Controller, DefaultValues, useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";
import * as yup from "yup";

/*
 * Aanpassing tov les: extra type om type issues op te lossen
 */
type ClientFormData = {
  id?: number;
  name: string;
  created_at?: string;
  owner_id?: string;
};

const schema: yup.ObjectSchema<ClientFormData> = yup.object().shape({
  id: yup.number().optional(),
  name: yup.string().required(),
  created_at: yup.string().optional(),
  owner_id: yup.string().optional(),
});

type Props<T extends ClientFormData> = {
  onSuccess: () => void;
  updateMethod: (data: T) => Promise<Client | null>;
  initialData: DefaultValues<T>;
  label: string;
};

const ClientForm = <T extends ClientFormData>({ updateMethod, onSuccess, initialData, label }: Props<T>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormData>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const { mutate, error, isPending } = useMutation({
    mutationFn: updateMethod,
    onSuccess: () => {
      onSuccess();
    },
  });

  const handleOnSubmit = (data: ClientFormData) => {
    mutate(data as T);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <DefaultView>
        {!!error && <ErrorMessage error={error} />}

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <InputField
              label="Client name"
              name="name"
              placeholder="client name"
              disabled={isPending}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value ?? ""}
              error={errors.name?.message}
            />
          )}
        />

        <Button style={styles.button} onPress={handleSubmit(handleOnSubmit)} disabled={isPending}>
          {label}
        </Button>
      </DefaultView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: Spacing.sm,
  },
});

export default ClientForm;
