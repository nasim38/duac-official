import React from "react";

const FormTest = () => {
  const submitHandler = (formData) => {
    formData.preventDefault();
    console.log(formData);
  };
  return (
    <form id="formElem" onSubmit={submitHandler}>
      <input type="text" name="name" value="John" />
      <input type="text" name="surname" value="Smith" />
      <input type="file" name="files" />
      <input type="submit" />
    </form>
  );
};

export default FormTest;
