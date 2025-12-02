import Icons from "@expo/vector-icons/Feather";
import useUser from "@functional/Auth/useUser";
import { DefaultScreenOptions } from "@style/theme";
import { Tabs } from "expo-router";

const TabLayout = () => {
  const user = useUser();

  return (
    <Tabs screenOptions={DefaultScreenOptions}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icons size={size} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, size }) => <Icons size={size} name="folder" color={color} />,
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          ...(user.role === "admin" ? {} : { href: null }),
          title: "Clients",
          tabBarIcon: ({ color, size }) => <Icons size={size} name="briefcase" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => <Icons size={size} name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
