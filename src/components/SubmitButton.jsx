import PropTypes from "prop-types";

const SubmitButton = ({ isDirty, isValid, isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={!isDirty || !isValid || isSubmitting}
      className="rounded-2xl bg-blue-600 px-3 py-2 text-white"
    >
      Submit
    </button>
  );
};

SubmitButton.propTypes = {
  isDirty: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
