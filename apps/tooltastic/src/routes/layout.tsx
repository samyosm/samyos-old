import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import {
  Sidebar,
  SidebarItem,
  SidebarLogo,
} from "~/components/flowbite/Sidebar";
import { ToolTitle } from "~/components/tools/Tool";

import menu from "./menu.json";

export default component$(() => {
  const { pathname } = useLocation();

  const selectedTool = menu.tools.find(({href}) => href === pathname);

  return (
    <>
      <main class="w-full h-full flex bg-gray-50 dark:bg-gray-900">
        <Sidebar>
          <SidebarLogo name="ToolTastic" q:slot="logo" />
          {menu.tools.map(({ name, href, description }) => (
            <SidebarItem
              selected={pathname === href}
              href={href}
              name={name}
              description={description}
              key={href}
            />
          ))}
        </Sidebar>
        <section class="py-16 w-full flex flex-col gap-32">
          <ToolTitle
            title={selectedTool!.name}
            description={selectedTool!.description}
          />
          <Slot />
        </section>
      </main>
    </>
  );
});
