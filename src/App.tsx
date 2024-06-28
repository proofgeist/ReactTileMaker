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
import { v4 as uuid } from "uuid";
interface SidebarItemsType {
  label: string;
  description: string;
  id: string;
}

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  const [sidebarItems, setSideBarItems] = useState<SidebarItemsType[]>([
    {
      label: "blah",
      description: "something",
      id: uuid(),
    },
    {
      label: "blah2",
      description: "something2",
      id: uuid(),
    },
    {
      label: "blah3",
      description: "something3",
      id: uuid(),
    },
  ]);
  // const [active, setActive] = useState<SidebarItemsType>(sidebarItems[0]);
  const [activeId, setActiveId] = useState<string>(sidebarItems[0].id);
  const activeItem = sidebarItems.find((item) => item.id === activeId);

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
              onClick={() => setActiveId(item.id)}
              label={item.label}
              variant="subtle"
              description={item.description}
              active={item.id === activeId}
            />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack>
          <Text>Label: {activeItem?.label}</Text>
          <Text size="sm">Description: {activeItem?.description}</Text>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
