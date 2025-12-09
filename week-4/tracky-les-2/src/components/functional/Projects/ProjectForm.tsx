import { Project } from "@core/modules/projects/types.projects";
import ErrorMessage from "@design/Alert/ErrorMessage";
import Button from "@design/Button/Button";
import InputField from "@design/Form/InputField";
import DefaultView from "@design/View/DefaultView";
import ClientsSpinnerField from "@functional/Clients/Spinner/ClientsSpinnerField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spacing } from "@style/theme";
import { useMutation } from "@tanstack/react-query";
import { Controller, DefaultValues, useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";
import * as yup from "yup";

type ProjectFormData = {
  name: string;
  client_id: number;
};

const schema: yup.ObjectSchema<ProjectFormData> = yup.object().shape({
  name: yup.string().required(),
  client_id: yup.number().required(),
});

type Props<T extends ProjectFormData> = {
  onSuccess: () => void;
  updateMethod: (data: T) => Promise<Project | null>;
  initialData: DefaultValues<T>;
  label: string;
};

const ProjectForm = <T extends ProjectFormData>({
  updateMethod,
  onSuccess,
  initialData,
  label,
}: Props<T>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const { mutate, error, isPending } = useMutation({
    mutationFn: updateMethod,
    onSuccess: () => {
      onSuccess();
    },
  });

  const handleOnSubmit = (data: ProjectFormData) => {
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
              label="Project name"
              name="name"
              placeholder="project name"
              disabled={isPending}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value ?? ""}
              error={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="client_id"
          render={({ field: { onChange, value, onBlur } }) => (
            <ClientsSpinnerField
              label="Client"
              name="client_id"
              disabled={isPending}
              onChange={onChange}
              onBlur={onBlur}
              value={value ?? 0}
              error={errors.client_id?.message}
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

export default ProjectForm;
