import { CreateProjectBody, Project } from "@core/modules/projects/types.projects";
import ErrorMessage from "@design/Alert/ErrorMessage";
import Button from "@design/Button/Button";
import InputField from "@design/Form/InputField";
import DefaultView from "@design/View/DefaultView";
import ClientsSpinnerField from "@functional/Clients/Spinner/ClientsSpinnerField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spacing } from "@style/theme";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  client_id: yup.number().required(),
});

type Props = {
  onSuccess: () => void;
  updateMethod: (data: CreateProjectBody) => Promise<Project | null>;
};

const ProjectForm = ({ updateMethod, onSuccess }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectBody>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const { mutate, error, isPending } = useMutation({
    mutationFn: updateMethod,
    onSuccess: () => {
      onSuccess();
    },
  });

  const handleOnSubmit = (data: CreateProjectBody) => {
    mutate(data);
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
              value={value}
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
              value={value}
              error={errors.client_id?.message}
            />
          )}
        />

        <Button style={styles.button} onPress={handleSubmit(handleOnSubmit)} disabled={isPending}>
          Aanmaken
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
