export const emailValidation = {
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Invalid Email Format",
  },
  validate: {
    notAdmin: (fieldValue) =>
      fieldValue !== "admin@example.com" || "Enter a Different Email Address",
    notBlackListed: (fieldValue) =>
      !fieldValue.endsWith("baddomain.com") || "This Domain is not supported",
    emailAvailable: async (fieldValue) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`,
      );
      const data = await response.json();
      return data.length === 0 || "This email already exists";
    },
  },
};
