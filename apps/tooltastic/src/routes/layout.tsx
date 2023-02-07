import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Sidebar, SidebarItem, SidebarLogo } from "~/components/flowbite/Sidebar";

import menu from './menu.json'

export default component$(() => {
  const { pathname } = useLocation();

  return (
    <>
      <main class="w-full h-full flex bg-gray-50 dark:bg-gray-900">
        <Sidebar>
          <SidebarLogo name="ToolTastic" q:slot="logo" />
          {menu.tools.map(({name, href, description}) => (
            <SidebarItem selected={pathname === href} href={href} name={name} description={description} key={href}/>
          ))}
        </Sidebar>
        <Slot />
      </main>
    </>
  );
});
