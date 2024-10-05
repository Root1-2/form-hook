import PropTypes from "prop-types";

const ActionButtons = ({ getValues, setValue, reset }) => {
  return (
    <div className="mt-3 flex justify-start gap-4">
      <button
        type="button"
        onClick={() => console.log("Get Values:", getValues())}
        className="rounded-2xl bg-green-500 px-3 py-2 text-white"
      >
        Get Values
      </button>
      <button
        type="button"
        onClick={() => setValue("uName", "Boom")}
        className="rounded-2xl bg-orange-500 px-3 py-2 text-white"
      >
        Set Values
      </button>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-2xl bg-red-500 px-3 py-2 text-white"
      >
        Reset
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  getValues: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ActionButtons;
