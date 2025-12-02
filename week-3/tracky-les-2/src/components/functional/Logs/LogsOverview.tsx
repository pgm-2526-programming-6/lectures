import { getLogsByDate } from "@core/modules/logs/api.logs";
import { formatTimeToString } from "@core/modules/logs/utils.logs";
import ErrorMessage from "@design/Alert/ErrorMessage";
import ListItem from "@design/List/ListItem";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import { useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";

type Props = {
  date: Date;
};

const LogsOverview = ({ date }: Props) => {
  const {
    data: logs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["logs", date],
    queryFn: () => getLogsByDate(date),
  });

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !logs) {
    return (
      <DefaultView>
        <LoadingIndicator />
      </DefaultView>
    );
  }

  if (logs.length === 0) {
    return (
      <EmptyView
        title="No time entries"
        description="You have not added any time entries for this date yet."
        icon="calendar"
      />
    );
  }

  return (
    <DefaultView padding={false}>
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.description}
            description={item.project.name}
            onPress={() => {}}
            right={formatTimeToString(item.time)}
          />
        )}
      />
    </DefaultView>
  );
};

export default LogsOverview;
