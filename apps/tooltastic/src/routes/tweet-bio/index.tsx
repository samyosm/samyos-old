import { $, component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { TextInput } from '~/components/system/TextInput';

export const getIP = async () => {
  const response = await fetch('https://api.ipify.org/');
  const ip = await response.text();

  return ip;
};

export default component$(() => {
  const params = useStore({
    description: '',
    tone: 'Fun',
  });

  const generatedBio = useStore({
    bio: '',
    tokenUsed: 0,
    tokenLeft: 0,
  });

  const handleSubmit = $(async () => {
    const ip = await getIP();
    const response = await fetch('https://api.tooltastic.app/api/tweet-bio', {
      method: 'post',
      body: JSON.stringify({
        description: params.description,
        tone: params.tone,
        ip,
      }),
    });
    console.log(response);
    const jsonResponse = await response.json();

    console.log(jsonResponse);

    generatedBio.bio = jsonResponse.bio;
    generatedBio.tokenLeft = jsonResponse.tokenLeft;
    generatedBio.tokenUsed = jsonResponse.tokenUsed;
  });

  return (
    <>
      <form
        class="flex flex-col gap-4"
        preventdefault:submit
        onSubmit$={handleSubmit}
      >
        <div class="flex flex-col gap-2">
          <h5>1. Chose what should the bio be about</h5>
          <TextInput
            value={params.description}
            onChange$={(v) => (params.description = v)}
            placeholder="A twitter bio about cars, and coding"
          />
        </div>
        <div class="flex flex-col gap-2">
          <h5>2. Chose the tone of your tweet</h5>
          <select
            value={params.tone}
            onChange$={(e) => (params.tone = e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required={true}
          >
            <option>Fun</option>
            <option>Happy</option>
            <option>Serious</option>
            <option>Sad</option>
            <option>Angry</option>
            <option>Curious</option>
            <option>Informative</option>
            <option>Cute</option>
            <option>Cool</option>
            <option>Controversial</option>
            <option>Funny</option>
          </select>
        </div>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Get Twitter Bio
        </button>
      </form>
      {generatedBio.bio && (
        <>
          <div class="w-full text-gray-900 dark:text-white p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {generatedBio.bio}
          </div>
          <div class="w-full text-gray-700 dark:text-gray-300">
            This prompt used <span class="text-red-500 font-bold">{generatedBio.tokenUsed}</span> token. You
            have <span class="text-green-500 font-bold">{generatedBio.tokenLeft}</span> token left.
          </div>
        </>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Filebin - Easily share files without registration',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
