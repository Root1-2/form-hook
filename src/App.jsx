import Input from "./components/Input";
import { useForm } from "react-hook-form";

function App() {
  const form = useForm();
  return (
    <div className="h-screen bg-gray-200">
      <p className="pt-10 text-center text-2xl font-semibold underline">
        React Form Hook
      </p>

      <div className="flex justify-center">
        <div className="mt-10 w-1/2 rounded-lg bg-gray-300 p-5">
          <div className="flex flex-wrap gap-x-20">
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Username" />
            <Input label="Email Address" />
          </div>
          <div className="mt-3 flex justify-end">
            <button className="rounded-2xl bg-emerald-600 px-3 py-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
