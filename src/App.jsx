import Input from "./Input";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function App() {
  const { register, control, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      uName: "",
      fName: "",
      lName: "",
      email: "",
      pass: "",
      age: 0,
      dob: new Date(),
      social: {
        twitter: "",
        github: "",
      },
      phoneNumbers: ["", ""],
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log("Form Submitted", data);
  }

  renderCount++;

  const watchUsername = watch(["uName", "email"]);

  const validateEmail = {
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid Email Format",
    },
    validate: {
      notAdmin: (value) =>
        value !== "admin@example.com" || "Enter a Different Email Address",
      notBlackListed: (value) =>
        !value.endsWith("baddomain.com") || "This Domain is not supported",
    },
  };

  return (
    <div className="h-screen bg-gray-200">
      <p className="pt-10 text-center text-2xl font-semibold underline">
        React Form Hook ({renderCount / 2})
      </p>
      <p className="mt-3 text-center text-2xl text-red-500">
        Welcome: {watchUsername}
      </p>
      <p className="mt-3 text-center text-2xl text-red-500">
        Welcome: {watchUsername}
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
                errors={errors}
                validation={validateEmail}
              />
              <Input
                label="Primary Number"
                id="pNum"
                name="phoneNumbers.0"
                register={register}
                errors={errors}
              />
              <Input
                label="Secondary Number"
                id="sNum"
                name="phoneNumbers.1"
                register={register}
                errors={errors}
              />
              <Input
                label="Age"
                type="number"
                id="age"
                name="age"
                register={register}
                errors={errors}
              />
              <Input
                label="Date of Birth"
                type="date"
                id="dob"
                name="dob"
                register={register}
                errors={errors}
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
