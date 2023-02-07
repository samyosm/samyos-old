import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const SidebarLogo = component$(({ name }: { name: string }) => (
  <div class="flex items-center mb-5">
    <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      {name}
    </h4>
  </div>
));

export const SidebarItem = component$(
  ({ name, description, href, selected }: { name: string; description: string, href: string, selected: boolean }) => {

    console.log(selected)

    return (
      <Link
        href={href}
        class={`${selected ? 'outline border-blue-500 !outline-blue-500' : ''} dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer flex flex-col p-4 rounded-md border border-gray-300`}
      >
        <h5>{name}</h5>
        <p class="text-sm">{description}</p>
      </Link>
    );
  }
);

export const Sidebar = component$(() => {

  return (
    <nav class="w-fit ">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Slot name="logo" />
        <div class="space-y-2">
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search tool..."
          />
          <Slot />
        </div>
      </div>
    </nav>
  );
});
