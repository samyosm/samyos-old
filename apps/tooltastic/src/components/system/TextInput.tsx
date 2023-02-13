import { component$ } from '@builder.io/qwik';

type Props = {
  placeholder: string;
  onChange$?: (value: string) => void;
  onInput$?: (value: string) => void;
  required?: boolean;
  value?: string;
};

export const TextInput = component$(
  ({ placeholder, onChange$, onInput$, required = true, value }: Props) => {
    return (
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange$={(e) => onChange$ && onChange$(e.target.value)}
        onInput$={(e) =>
          onInput$ && onInput$((e.target as HTMLInputElement).value)
        }
        value={value}
        required={required}
      />
    );
  }
);
