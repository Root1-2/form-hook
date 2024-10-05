import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Form from "./components/Form";

function App() {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    getValues,
    setValue,
    watch,
  } = useForm({
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

  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } =
    formState;

  function onSubmit(data) {
    console.log("Form Submitted", data);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="flex h-screen flex-col items-center bg-blue-50">
      <p className="pt-10 text-center text-3xl font-bold">React Hook Form</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form
          register={register}
          errors={errors}
          watch={watch}
          isDirty={isDirty}
          isValid={isValid}
          isSubmitting={isSubmitting}
          getValues={getValues}
          setValue={setValue}
        />
      </form>
    </div>
  );
}

export default App;
