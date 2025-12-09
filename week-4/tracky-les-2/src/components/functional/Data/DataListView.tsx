import Divider from "@design/List/Divider";
import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { FlatList, ListRenderItem } from "react-native";
import DataView from "./DataView";

type Props<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T[]>;
  renderEmptyView: () => React.ReactNode;
  renderItem: ListRenderItem<T>;
};

const DataListView = <T extends { id: number }>({
  queryKey,
  queryFn,
  renderEmptyView,
  renderItem,
}: Props<T>) => {
  return (
    <DataView
      queryKey={queryKey}
      queryFn={queryFn}
      render={(items) =>
        items.length === 0 ? (
          renderEmptyView()
        ) : (
          <FlatList
            renderItem={renderItem}
            data={items}
            ItemSeparatorComponent={Divider}
            keyExtractor={(item) => String(item.id)}
          />
        )
      }
    />
  );
};

export default DataListView;
