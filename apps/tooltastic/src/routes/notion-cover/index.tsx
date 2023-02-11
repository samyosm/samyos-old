import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SVG } from '@svgdotjs/svg.js';
import { ImagePreview } from '~/components/system/ImagePreview';

export const ColorChoice = component$(
  ({
    hex,
    label,
    chosenHex,
    onClick$: onClick,
  }: {
    hex: string;
    label: string;
    chosenHex?: string;
    onClick$: (hex: string) => void;
  }) => {
    return (
      <div
        onClick$={() => onClick(hex)}
        style={{
          backgroundColor: hex,
        }}
        class={`w-16 h-16 cursor-pointer text-white rounded-md flex justify-center items-center shadow-md ${
          chosenHex == hex ? 'outline outline-slate-800 dark:outline-white' : ''
        }`}
      >
        {label}
      </div>
    );
  }
);

export default component$(() => {
  const generatedSVG = useSignal<string>();

  const chosenHex = useSignal<string>('#3b82f6');

  const values = useStore({
    content: '',
  });

  const handleSubmit = $(async () => {
    const draw = SVG().size(150, 50);

    draw.rect(1500, 500).fill(chosenHex.value || '#ccc');

    draw
      .text((add) => add.tspan(values.content))
      .fill('#fff')
      .font({ size: 12, family: 'Verdana', weight: 'bold' })
      .center(150 / 2, 50 / 2);

    generatedSVG.value = 'data:image/svg+xml;base64,' + window.btoa(draw.svg());
  });

  const handleColorPress = $((hex: string) => {
    chosenHex.value = hex;
  });

  return (
    <>
      <div class="flex flex-col gap-4">
        <form
          preventdefault:submit
          onSubmit$={handleSubmit}
          class="flex flex-col gap-6"
        >
          <div class="flex flex-col gap-2">
            <h5>1. Write a title</h5>
            <input
              type="text"
              placeholder="Title"
              value={values.content}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="number_input"
              required={true}
              onInput$={(e) => {
                values.content = (e.target as HTMLInputElement).value;
              }}
            />
          </div>
          <div class="flex flex-col gap-2">
            <h5>2. Choose a color</h5>
            <div class="flex justify-between">
              <ColorChoice
                onClick$={handleColorPress}
                chosenHex={chosenHex.value}
                hex="#3b82f6"
                label="blue"
              />
              <ColorChoice
                onClick$={handleColorPress}
                chosenHex={chosenHex.value}
                hex="#ef4444"
                label="red"
              />
              <ColorChoice
                onClick$={handleColorPress}
                chosenHex={chosenHex.value}
                hex="#64748b"
                label="gray"
              />
              <ColorChoice
                onClick$={handleColorPress}
                chosenHex={chosenHex.value}
                hex="#f472b6"
                label="pink"
              />
              <ColorChoice
                onClick$={handleColorPress}
                chosenHex={chosenHex.value}
                hex="#4f46e5"
                label="indigo"
              />
              <ColorChoice
                onClick$={handleColorPress}
                chosenHex={chosenHex.value}
                hex="#7c3aed"
                label="violet"
              />
            </div>
          </div>
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="submit"
          >
            Get Image
          </button>
        </form>
      </div>
      {generatedSVG.value && (
        <ImagePreview label="notion-cover.svg" alt="Notion Cover" imageSrc={generatedSVG.value!} />
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Notion cover',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
