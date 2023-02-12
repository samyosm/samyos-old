import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
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
        <h5 class="">2. Choose when the file will expire</h5>
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
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="submit"
      >
        Get Link
      </button>
    </form>
  );
});

export const head: DocumentHead = {
  title: 'Filebin - Easily share files without registration',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
