export const loginInputs = [
  {
    type: "text",
    name: "user_name",
    label: "Username",
    placeholder: "example@gmail.com",
    validation: {
      required: {
        value: true,
        message: "Username is required.",
      },
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "Invalid username.",
      },
    },
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "***************",
    validation: {
      required: {
        value: true,
        message: "Passowrd is required.",
      },
      minLength: {
        value: 8,
        message: "Password must be atleast 6 character.",
      },
      maxLength: {
        value: 14,
        message: "Password must not exceed 14 character.",
      },
    },
  },
];
