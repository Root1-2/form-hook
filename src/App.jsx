import Input from "./Input";
import { useForm } from "react-hook-form";

function App() {
  const { register } = useForm();

  return (
    <div className="h-screen bg-gray-200">
      <p className="pt-10 text-center text-2xl font-semibold underline">
        React Form Hook
      </p>

      <div className="flex justify-center">
        <div className="mt-10 w-1/2 rounded-lg bg-gray-300 p-5">
          <div className="flex flex-wrap gap-x-20">
            <Input
              label="First Name"
              id="fName"
              name="fName"
              register={register}
            />
            <Input
              label="Last Name"
              id="lName"
              name="lName"
              register={register}
            />
            <Input
              label="Username"
              id="uName"
              name="uName"
              register={register}
            />
            <Input
              label="Email Address"
              id="email"
              name="email"
              register={register}
            />
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
