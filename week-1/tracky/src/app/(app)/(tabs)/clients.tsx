import DefaultView from "@design/View/DefaultView";
import { Link } from "expo-router";
import { Text } from "react-native";

const ClientsLayout = () => {
  return (
    <DefaultView>
      <Text> Clients Screen </Text>
      <Link href="/clients/1"> Go to Client 1 Detail </Link>
    </DefaultView>
  );
};

export default ClientsLayout;
