import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="text-slate-200 flex flex-col items-center gap-10 p-20">
      <div class="w-full text-center flex flex-col gap-3">
        <h1 class="text-6xl">Tweet Generator</h1>
        <p class="w-full text-center mx-auto max-w-md">
          Easily generate a tweet from a tone and a description, you can then
          post it on twitter
        </p>
      </div>

      <div class="flex flex-col gap-5 w-full max-w-md">
        <div class="flex flex-col gap-2">
          <p>1. What is the tweet about?</p>
          <textarea
            class="p-2 bg-slate-600 rounded-md h-24 resize-none outline-none w-full text-slate-200"
            name="Tweet description"
            placeholder="A tweet about AI..."
          />
        </div>
        <div class="flex flex-col gap-2">
          <p>2. Select or write the tone of the tweet</p>
          <input
            type="text"
            class="p-2 bg-slate-600 rounded-md resize-none outline-none w-full text-slate-200"
            placeholder="Afraid"
          />
        </div>
        <div class="">
          <button class="p-2 bg-slate-800 w-full hover:bg-slate-900 rounded-md">Generate a tweet</button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'ToolTastic',
  meta: [
    {
      name: 'description',
      content: 'A fantastic app-filled app',
    },
  ],
};
