import { component$ } from '@builder.io/qwik';

type Props = {
    title: string,
    description: string,
}

export const NavItem = component$((props: Props) => {
  return (
    <div class="flex flex-col gap-2 hover:bg-slate-700 p-2 rounded-md cursor-pointer">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
});
