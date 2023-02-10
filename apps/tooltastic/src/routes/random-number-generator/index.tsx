import { $, component$, useClientEffect$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Random, MersenneTwister19937 } from "random-js";

export const random = new Random(MersenneTwister19937.autoSeed());

export default component$(() => {
  const values = useStore({
    minimum: 0,
    maximum: 100,
  });

  const randomNumber = useSignal<number | undefined>();

  const onSubmit = $(async () => {
    randomNumber.value = random.integer(values.minimum, values.maximum);
  });

  return (
    <>
      <form
        class="flex flex-col gap-4"
        preventdefault:submit
        onSubmit$={onSubmit}
      >
        <div class="flex flex-col gap-2">
          <h5>1. Choose a maximum and a minimum</h5>
          <div class="flex gap-2">
            <input
              type="number"
              placeholder="Minimum"
              value={values.minimum}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="number_input"
              required={true}
              onChange$={(e) => {
                values.minimum = parseInt(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Maximum"
              min={values.minimum}
              value={values.maximum}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="number_input"
              required={true}
              onChange$={(e) => {
                values.maximum = parseInt(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Generate
        </button>
      </form>
      {randomNumber.value && (
        <div class="w-full font-bold text-xl text-center text-gray-900 dark:text-white p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {randomNumber.value}
        </div>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Filebin - Easily share files without registration",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
