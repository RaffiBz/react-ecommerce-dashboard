const TextInput = ({
  fieldName,
  register,
  errors,
  placeHolder,
  isRequired,
  maximLength,
  minimLength,
}) => {
  return (
    //Input field
    <div className="form-field">
      <input
        placeholder={placeHolder}
        {...register(fieldName, {
          required: {
            value: isRequired,
            message: "This is required",
          },
          maxLength: {
            value: maximLength,
            message: `Value must be maximum ${maximLength}`,
          },
          minLength: {
            value: minimLength,
            message: `Value must be minimum ${minimLength}`,
          },
        })}
      />

      <p>
        {" "}
        {
          //Shows if error exist
          errors[fieldName] && errors[fieldName].message
        }{" "}
      </p>
    </div>
  );
};

export default TextInput;
