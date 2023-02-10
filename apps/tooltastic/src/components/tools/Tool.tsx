import { component$, Slot } from "@builder.io/qwik";

export const ToolTitle = component$(
  ({ title, description }: { title: string; description: string }) => {
    return (
      <div class="mx-auto w-full max-w-2xl text-center flex flex-col gap-2">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
);

export const ToolBody = component$(() => {
  return (
    <div class="w-full max-w-md mx-auto flex flex-col gap-5">
      <Slot />
    </div>
  );
});
