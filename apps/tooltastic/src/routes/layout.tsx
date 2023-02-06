import { component$, Slot } from "@builder.io/qwik";
import { Sidebar, SidebarItem, SidebarLogo } from "~/components/flowbite/Sidebar";

export default component$(() => {

  return (
    <>
      <main class="w-full h-full flex bg-gray-50 dark:bg-gray-900">
        <Sidebar>
          <SidebarLogo name="ToolTastic" q:slot="logo" />
          <SidebarItem
            name="Filebin"
            description="Easily share files without registration"
          />
        </Sidebar>
        <Slot />
      </main>
    </>
  );
});
