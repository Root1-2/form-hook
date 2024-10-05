import { emailValidation } from "../validation/emailValidation";
import Input from "./Input";
import PropTypes from "prop-types";
import SubmitButton from "./SubmitButton";
import ActionButtons from "./ActionButtons";

const Form = ({
  register,
  errors,
  watch,
  isDirty,
  isValid,
  isSubmitting,
  getValues,
  setValue,
  reset,
}) => {
  return (
    <div className="mt-10 flex justify-center bg-blue-50">
      <div className="w-3/4 rounded-lg bg-blue-100 p-8 shadow-md">
        <div className="mx-4 flex flex-wrap">
          <div className="w-1/2 px-4">
            <Input
              label="First Name"
              id="fName"
              name="fName"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Last Name"
              id="lName"
              name="lName"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Username"
              id="uName"
              name="uName"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Email Address"
              id="email"
              name="email"
              register={register}
              errors={errors}
              validation={emailValidation}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Primary Number"
              id="pNum"
              name="phoneNumbers.0"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Secondary Number"
              id="sNum"
              name="phoneNumbers.1"
              register={register}
              errors={errors}
              disabled={watch("phoneNumbers.0") === ""}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Age"
              type="number"
              id="age"
              name="age"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Date of Birth"
              type="date"
              id="dob"
              name="dob"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Password"
              id="pass"
              name="pass"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Confirm Password"
              id="conPass"
              name="conPass"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="Twitter"
              id="twitter"
              name="social.twitter"
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-1/2 px-4">
            <Input
              label="GitHub"
              id="github"
              name="social.github"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex flex-1 gap-2">
          <SubmitButton
            isDirty={isDirty}
            isValid={isValid}
            isSubmitting={isSubmitting}
          />
          <ActionButtons
            getValues={getValues}
            setValue={setValue}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
  isDirty: PropTypes.bool,
  isValid: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  getValues: PropTypes.object,
  setValue: PropTypes.func,
  reset: PropTypes.func,
};

export default Form;
