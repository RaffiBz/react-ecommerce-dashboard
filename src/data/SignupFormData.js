export const SignupFormData = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "write the tier name",
    pattern: {},
    target: "name",
  },
  {
    label: "Username",
    type: "text",
    placeholder: "write the tier name",
    pattern: {
      minLength: {
        value: 8,
        message: "Username should be more than 7 characters",
      },
    },
    target: "name",
  },
  {
    label: "Email address",
    type: "text",
    placeholder: "write the tier name",
    pattern: {
      minLength: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid email address",
      },
    },
    target: "email",
  },
];
