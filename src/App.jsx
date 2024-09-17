import Input from "./Input";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function App() {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      uName: "",
      fName: "",
      lName: "",
      email: "",
      pass: "",
      social: {
        twitter: "",
        github: "",
      },
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log("Form Submitted", data);
  }

  renderCount++;

  return (
    <div className="h-screen bg-gray-200">
      <p className="pt-10 text-center text-2xl font-semibold underline">
        React Form Hook ({renderCount / 2})
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex justify-center">
          <div className="mt-10 w-1/2 rounded-lg bg-gray-300 p-5">
            <div className="flex flex-wrap gap-x-20">
              <Input
                label="First Name"
                id="fName"
                name="fName"
                register={register}
                errors={errors}
              />
              <Input
                label="Last Name"
                id="lName"
                name="lName"
                register={register}
                errors={errors}
              />
              <Input
                label="Username"
                id="uName"
                name="uName"
                register={register}
                errors={errors}
              />
              <Input
                label="Email Address"
                id="email"
                name="email"
                register={register}
                regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                error="Invalid Email Format"
                errors={errors}
                // placeholder="mew@example.com"
              />
              <Input
                label="Password"
                id="pass"
                name="pass"
                register={register}
                errors={errors}
              />
              <Input
                label="Confirm Password"
                id="conPass"
                name="conPass"
                register={register}
                errors={errors}
              />
              <Input
                label="Twitter"
                id="twitter"
                name="social.twitter"
                register={register}
                errors={errors}
              />
              <Input
                label="GitHub"
                id="github"
                name="social.github"
                register={register}
                errors={errors}
              />
            </div>
            <div className="mt-3 flex justify-end">
              <button className="rounded-2xl bg-emerald-600 px-3 py-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default App;
