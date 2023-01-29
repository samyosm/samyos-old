import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      Hello, world!
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Tooltastic',
  meta: [
    {
      name: 'description',
      content: 'A fantastic app-filled app',
    },
  ],
};
