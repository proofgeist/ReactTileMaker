import {
  AppShell,
  Badge,
  Burger,
  Group,
  NavLink,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

interface SidebarItemsType {
  label: string;
  description: string;
}

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  const [sidebarItems, setSideBarItems] = useState<SidebarItemsType[]>([
    {
      label: "blah",
      description: "something",
    },
    {
      label: "blah2",
      description: "something2",
    },
    {
      label: "blah3",
      description: "something3",
    },
  ]);
  const [active, setActive] = useState<SidebarItemsType>(sidebarItems[0]);

  console.log(active);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack>
          {sidebarItems.map((item) => (
            <NavLink
              href="#required-for-focus"
              key={item.label}
              onClick={() => setActive(item)}
              label={item.label}
              variant="subtle"
              description={item.description}
              active={item.label === active.label}
            />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack>
          <Text>Label: {active.label}</Text>
          <Text size="sm">Description: {active.description}</Text>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
