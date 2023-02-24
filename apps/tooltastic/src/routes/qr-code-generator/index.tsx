import { $, component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { toDataURL as makeQr } from 'qrcode';
import { ImagePreview } from '~/components/system/ImagePreview';

export default component$(() => {
  const QRCode = useStore({
    high: '',
  });
  const values = useStore({
    content: '',
  });

  const onSubmit = $(async () => {
    const high = await makeQr(values.content, {
      'type': 'image/jpeg',
      margin: 1,
      scale: 20
    })
    QRCode.high = high;
  });

  return (
    <>
      <form
        class="flex flex-col gap-4"
        preventdefault:submit
        onSubmit$={onSubmit}
      >
        <div class="flex flex-col gap-2">
          <h5>1. Write your QRCode content</h5>
          <div class="flex gap-2">
            <input
              type="text"
              placeholder="Content"
              value={values.content}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="number_input"
              required={true}
              onChange$={(e) => {
                values.content = e.target.value;
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
      {QRCode.high && <ImagePreview imageSrc={QRCode.high} alt="QRCOde" /> }
    </>
  );
});

export const head: DocumentHead = {
  title: 'QR Code Generator - Easily create qr codes',
  meta: [
    {
      name: 'description',
      content: 'A tool that will allow you to generate a Qr Code very quickly',
    },
  ],
};
