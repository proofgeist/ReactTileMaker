import {
  AppShell,
  Badge,
  Burger,
  Group,
  NavLink,
  Skeleton,
  Stack,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState("blah2");
  const [sidebarItems, setData] = useState([
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
              onClick={() => setActive(item.label)}
              label={item.label}
              variant="subtle"
              description={item.description}
              active={item.label === active}
            />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
