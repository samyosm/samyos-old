import { component$ } from '@builder.io/qwik';
import { NavItem } from './NavItem';

export const Sidebar = component$(() => {
  return (
    <nav class="text-slate-200 w-full max-w-sm bg-slate-800 max-h-screen overflow-y-auto">
      <h1 class="text-center p-5">ToolTastic</h1>
      <hr class="border-slate-600 border" />
      <section class="p-5 flex flex-col gap-7">
        <div>
          <input
            class="w-full p-2 rounded-md bg-slate-700 placeholder:text-slate-500 text-slate-200 outline-none"
            type="text"
            placeholder="Search tool..."
          />
        </div>
        <div class="flex flex-col gap-5">
          <NavItem
            title="Tweet Generator"
            description="Generate a tweet from a tone and a description"
          />
          <NavItem
            title="Twitter Bio Generator"
            description="Generate a bio for your twitter account from a description and a tone"
          />
          <NavItem
            title="Youtube Comment Generator"
            description="Generate a comment for a YouTube video from a video title and a tone"
          />
                    <NavItem
            title="Tweet Generator"
            description="Generate a tweet from a tone and a description"
          />
          <NavItem
            title="Twitter Bio Generator"
            description="Generate a bio for your twitter account from a description and a tone"
          />
          <NavItem
            title="Youtube Comment Generator"
            description="Generate a comment for a YouTube video from a video title and a tone"
          />
                    <NavItem
            title="Tweet Generator"
            description="Generate a tweet from a tone and a description"
          />
          <NavItem
            title="Twitter Bio Generator"
            description="Generate a bio for your twitter account from a description and a tone"
          />
          <NavItem
            title="Youtube Comment Generator"
            description="Generate a comment for a YouTube video from a video title and a tone"
          />
                    <NavItem
            title="Tweet Generator"
            description="Generate a tweet from a tone and a description"
          />
          <NavItem
            title="Twitter Bio Generator"
            description="Generate a bio for your twitter account from a description and a tone"
          />
          <NavItem
            title="Youtube Comment Generator"
            description="Generate a comment for a YouTube video from a video title and a tone"
          />
                    <NavItem
            title="Tweet Generator"
            description="Generate a tweet from a tone and a description"
          />
          <NavItem
            title="Twitter Bio Generator"
            description="Generate a bio for your twitter account from a description and a tone"
          />
          <NavItem
            title="Youtube Comment Generator"
            description="Generate a comment for a YouTube video from a video title and a tone"
          />
        </div>
      </section>
    </nav>
  );
});
