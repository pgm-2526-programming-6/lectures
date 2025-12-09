import ErrorMessage from "@design/Alert/ErrorMessage";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import DefaultView from "@design/View/DefaultView";
import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";

type Props<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T | null>;
  render: (data: T) => React.ReactNode;
};

const DataView = <T extends object>({ queryKey, queryFn, render }: Props<T>) => {
  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn,
  });

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !data) {
    return (
      <DefaultView>
        <LoadingIndicator />
      </DefaultView>
    );
  }

  return render(data);
};

export default DataView;
