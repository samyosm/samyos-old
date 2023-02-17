import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { action$, Form } from '@builder.io/qwik-city';
import { TextInput } from '~/components/system/TextInput';
import { openai } from '../../../clients/OpenAI';

import { fdb } from '../../../clients/Firebase';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

export const getIP = async () => {
  const raw = await fetch('https://api.ipify.org/');
  return raw.text();
};

export const DEFAULT_TOKEN_COUNT = 1000;

export const useAddUser = action$(async ({ description, mood, ip }) => {
  console.log({ description, mood, ip });

  const trackerRef = collection(fdb, 'openai_token_tracker');

  const userDoc = doc(trackerRef, ip as string);
  const user = await getDoc(userDoc);

  const exist = user.exists();
  const originalTokenLeft = user.data()?.tokenLeft;

  if (exist && originalTokenLeft <= 0)
    return {
      text: 'You do not have enough token',
      tokenUsed: 0,
      tokenLeft: originalTokenLeft,
    };

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    best_of: 1,
    max_tokens: 200,
    temperature: 0,
    prompt: `Generate a Twitter bio with the following description: ${description}; and the following mood: ${mood}`,
  });

  const tokenUsed = response.data.usage!.total_tokens;
  const tokenLeft = exist
    ? originalTokenLeft - tokenUsed
    : DEFAULT_TOKEN_COUNT - tokenUsed;

  await setDoc(userDoc, {
    tokenLeft,
  });

  if (!response) return;

  return {
    text: response.data.choices[0].text,
    tokenUsed,
    tokenLeft,
  };
});

export default component$(() => {
  const ip = useSignal('');

  useBrowserVisibleTask$(async () => {
    ip.value = await getIP();
  });

  const action = useAddUser();

  return (
    <>
      <Form class="flex flex-col gap-4" action={action}>
        <div class="flex flex-col gap-2">
          <h5>1. Chose what should the bio be about</h5>
          <TextInput
            name="description"
            placeholder="A twitter bio about cars, and coding"
          />
        </div>
        <div class="flex flex-col gap-2">
          <h5>2. Chose the tone of your tweet</h5>
          <select
            name="mood"
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
        <input type="text" value={ip.value} name="ip" hidden />
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Get Twitter Bio
        </button>
      </Form>
      {action.value?.text && (
        <>
          <div class="w-full text-gray-900 dark:text-white p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {action.value.text}
          </div>
          <div class="w-full text-gray-700 dark:text-gray-300">
            This prompt used
            <span class="text-red-500 font-bold">
              {' '}
              {action.value.tokenUsed}{' '}
            </span>
            token. You have
            <span class="text-green-500 font-bold">
              {` ${action.value.tokenLeft} `}
            </span>
            token left.
          </div>
        </>
      )}

      {action.isRunning && (
        <>
          <div class="flex justify-center items-center w-full text-gray-900 dark:text-white p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
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
