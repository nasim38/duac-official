import React, { useState } from "react";
import { Container, Row, Stack } from "react-bootstrap";
// react-hook-form for form data management and validation
import { useForm } from "react-hook-form";

export default function CloudinaryTest() {
  // initiating states ----------------------
  const [error, setError] = useState();
  const [file, setFile] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // custom function to POST data using REST api ---------------------------------
  const postData = async (url, formData, postType) => {
    //checking for post header type for fetch api
    let header = {};
    if (postType == "FormData")
      header = { "Content-Type": "multipart/form-data" };
    else header = { "Content-Type": "application/json" };
    console.log(header);
    try {
      const postedData = await fetch(url, {
        body: formData,
        headers: header,
        method: "POST",
        redirect: "follow",
      });
      // returning the 'promise' object from fetch api in json format
      return await postedData.json();
    } catch (err) {
      setError(err);
    }
  };

  // on submit handler ------------------------------------------------------------
  const onSubmit = async (inputData) => {
    try {
      console.log(inputData);
      // setting uploaded image to file state
      setFile(inputData.picture[0]);
      // copying inputData for modification without hampering oiginal input data
      let data = JSON.parse(JSON.stringify(inputData));
      // delteing 'picture' filed from data object for applicaiton/json header type input
      delete data.picture;

      // modifying original 'formData' before 'stringify' to match strapi json format--{ data: formData }--
      const submissionData = JSON.stringify({ data: data });
      // postedData must be awaited.
      const postedData = await postData(
        "http://localhost:1337/api/test-cloudinaries",
        submissionData
      );
      console.log(postedData);
      if (postedData.error)
        alert(
          `Error Code: ${postedData.error.status} \nError Name: ${postedData.error.name} \nError Message: ${postedData.error.message}`
        );
      else {
        // getting the refId of strapi collection data
        const entryId = postedData.data.id;
        console.log(`Created Entry Id: ${entryId}`);
        console.log(file);
        // creating FormData object
        const formData = new FormData();
        formData.append("files", file);
        // formData.append("files", inputData.picture[0]);
        formData.append("ref", "api::test-cloudinary.test-cloudinary"); //name of content type
        formData.append("refId", entryId); //id of content type
        formData.append("field", "picture"); //name of key for the content type
        // logging formData object in tabular form in colsole
        console.log("Form Data: ");
        console.table(Object.fromEntries(formData));
        // posting newly formed formData with file attached
        const postedFormData = await postData(
          "http://localhost:1337/api/upload",
          formData,
          "FormData"
        );
      }
    } catch (err) {
      console.log(`Error Happended: ${err}`);
    }

    // checking error and showing confirmation messege --------
    error
      ? alert("An error Occured! Try again, " + "Error Info: " + error)
      : alert("Registration form submitted successfully, Pending for approval");
  };

  return (
    <Container>
      <form name="registrationForm" onSubmit={handleSubmit(onSubmit)}>
        {/* Full name field and validation -------------------------  */}
        <label htmlFor="fullName">Full Name</label>
        <input
          className="form-control"
          id="fullName"
          type="text"
          placeholder="Your name"
          {...register("fullName", { required: true })}
        />
        {errors.fullName ? (
          <p className="text-danger">
            <small>* Your full name is required!</small>
          </p>
        ) : null}
        {/* email field and validation ----------------------- */}
        <label htmlFor="email">Email Address</label>
        <input
          className="form-control"
          id="email"
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email ? (
          <p className="text-danger">
            <small>* Email address is required!</small>
          </p>
        ) : null}

        {/* Alumnus Profile picture filed and validation --------------- */}
        <label className="custom-file-label" htmlFor="picture">
          Select Profile Picture
        </label>
        <div className="input-group">
          <div className="custom-file">
            <input
              name="picture"
              type="file"
              className="custom-file-input"
              id="picture"
              {...register("picture", { required: true })}
            />
          </div>
        </div>
        {errors.picture ? (
          <p className="text-danger">
            <small>* Your profile picture is required!</small>
          </p>
        ) : null}
        {/* Submit button for final submission -----------------  */}
        <input className="btn btn-primary mt-3" type="submit" />
      </form>
    </Container>
  );
}
