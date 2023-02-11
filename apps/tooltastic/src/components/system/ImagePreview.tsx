import { component$ } from '@builder.io/qwik';

export const ImagePreview = component$(
  ({
    imageSrc,
    alt,
    label = 'image.jpeg',
  }: {
    imageSrc: string;
    alt: string;
    label?: string;
  }) => {
    return (
      <div class="w-full gap-6 flex-col font-bold flex justify-center items-cneter text-gray-900 dark:text-white p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-md w-full h-full border" src={imageSrc} alt={alt} />
        <a
          href={imageSrc}
          download={label}
          class="cursor-pointer text-white w-full text-center bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-800"
        >
          Download
        </a>
      </div>
    );
  }
);
