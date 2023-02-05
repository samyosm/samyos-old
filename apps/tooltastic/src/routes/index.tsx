import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="w-full h-full flex bg-gray-50 dark:bg-gray-900">
      <nav class="w-fit ">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div class="flex items-center mb-5">
            <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ToolTastic
            </h4>
          </div>

          <div class="space-y-2">
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Search tool..."
            />

            <div class="dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer flex flex-col p-4 rounded-md border border-gray-300">
              <h5>Filebin</h5>
              <p class="text-sm">Easily share files without registration</p>
            </div>
          </div>
        </div>
      </nav>

      <main class="py-16 w-full flex flex-col gap-32">
        <div class="mx-auto w-full max-w-sm text-center flex flex-col gap-2">
          <h1 class="">Filebin</h1>
          <p>Easily share files without registration</p>
        </div>

        <div class="w-full max-w-md mx-auto flex flex-col gap-5">
          <form class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <h5>1. Choose a file to upload</h5>
              <input
                type="file"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                required={true}
              />
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="">2. Choose expiration</h5>
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              >
                <option>1 Week</option>
                <option>2 Week</option>
                <option>2 Week</option>
                <option>4 Week</option>
                <option>Never</option>
              </select>
            </div>
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="submit"
            >
              Get Link
            </button>
          </form>
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
