import { component$, Slot } from '@builder.io/qwik';
import { Sidebar } from '../components/sidebar/Sidebar';

export default component$(() => {
  return (
    <>
      <main>
        <Sidebar />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
