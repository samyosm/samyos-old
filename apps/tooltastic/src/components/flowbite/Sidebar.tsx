import { $, component$, Slot, useSignal } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import Fuse from 'fuse.js';

export const SidebarLogo = component$(({ name }: { name: string }) => (
  <div class="flex items-center mb-5">
    <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      {name}
    </h4>
  </div>
));

export const SidebarItem = component$(
  ({
    name,
    description,
    href,
    selected,
  }: {
    name: string;
    description: string;
    href: string;
    selected: boolean;
  }) => {
    return (
      <Link
        href={href}
        class={`${
          selected ? 'outline border-blue-500 !outline-blue-500' : ''
        } dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer flex flex-col p-4 rounded-md border border-gray-300`}
      >
        <h5>{name}</h5>
        <p class="text-sm">{description}</p>
      </Link>
    );
  }
);

type Tool = {
  name: string;
  description: string;
  href: string;
};

export const Sidebar = component$(({ tools }: { tools: Tool[] }) => {
  const searchOptions = {
    keys: ['name', 'description'],
    threshold: 0.4
  } satisfies Fuse.IFuseOptions<Tool>;

  const { pathname } = useLocation();

  const filteredTools = useSignal(tools);

  const handleInputChange = $((value: string) => {

    if (!value) {
      filteredTools.value = tools;
      return;
    }

    const fuse = new Fuse(tools, searchOptions);

    const searchResults = fuse.search(value);

    console.log(searchResults);
    filteredTools.value = searchResults.map(e => e.item);
  });

  return (
    <nav class="w-full md:max-w-[18rem]">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Slot name="logo" />
        <div class="space-y-2">
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search tool..."
            onInput$={(e) =>
              handleInputChange((e.target as HTMLInputElement).value)
            }
          />
          {filteredTools.value.map(({ name, href, description }) => (
            <SidebarItem
              selected={pathname === href}
              href={href}
              name={name}
              description={description}
              key={href}
            />
          ))}
        </div>
      </div>
    </nav>
  );
});
