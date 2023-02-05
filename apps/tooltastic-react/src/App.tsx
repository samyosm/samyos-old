import {
  Sidebar,
  TextInput,
  Button,
  FileInput,
  Select,
} from 'flowbite-react';
import {} from 'react-icons/hi';

function App() {
  return (
    <div className="w-full h-full flex bg-gray-50 dark:bg-gray-900">
      <nav className="w-fit">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Logo href="/" img="vite.svg" imgAlt="ToolTastic">
            ToolTastic
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <TextInput type="text" placeholder="Search tool..." />

              <div className="hover:bg-gray-700 cursor-pointer flex flex-col p-4 rounded-md border border-gray-400 dark:bg-gray-800 dark:border-gray-7000">
                <h5>Filebin</h5>
                <p className="text-sm">
                  Easily share files without registration
                </p>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </nav>

      <main className="py-16 w-full flex flex-col gap-32">
        <div className="mx-auto w-full max-w-sm text-center flex flex-col gap-2">
          <h1 className="">Filebin</h1>
          <p>Easily share files without registration</p>
        </div>

        <div className="w-full max-w-md mx-auto flex flex-col gap-5">
          <form className="flex flex-col gap-4" onSubmit={(e) => console.log(e)}>
            <div className='flex flex-col gap-2'>
                <h5>1. Choose a file to upload</h5>
              <FileInput id="file_input" required={true} />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="">2. Choose expiration</h5>
              <Select required={true}>
                <option>1 Week</option>
                <option>2 Week</option>
                <option>2 Week</option>
                <option>4 Week</option>
                <option>Never</option>
              </Select>
            </div>
            <Button type="submit">Get Link</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
