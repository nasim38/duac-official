// Basic for submission with validation is done and running perfectly
// TODO: profile picture upload function is not implemented

// MAIN CODE STRATS HERE ------------------------------------------
import React, { useState, useEffect } from "react";
import { Container, Row, Stack } from "react-bootstrap";
// react-hook-form for form data management and validation
import { useForm } from "react-hook-form";

export default function CreateEvent() {
  // dynamic api url ------------------------
  const apiBaseUrl = "http://localhost:1337";
  // initiating states ----------------------
  const [error, setError] = useState();
  const [file, setFile] = useState(undefined); // file gets updated onChange of form input
  // stated of image preview
  const [preview, setPreview] = useState();

  // initiating react-hook-form assets
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useeffect state for updating image preview -------------------------------
  // code from: https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
  // ans from: Jay Wick
  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  // custom function to POST data using REST api ---------------------------------
  const postData = async (url, formData, postType) => {
    //checking for post header type for fetch api
    let header = { "Content-Type": "application/json" };
    // because multipart/form-data header is automatically get detected,
    // when body is a FormData() object.
    // source: https://github.com/github/fetch/issues/505 , Ans form: dgraham
    if (postType == "FormData") header = {};
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
      // copying inputData for modification without hampering oiginal input data
      let data = JSON.parse(JSON.stringify(inputData));
      // delteing 'picture' filed from new data object for applicaiton/json header type input
      delete data.profilePicture;

      // modifying original 'formData' before 'stringify', to match strapi json format--{ data: formData }--
      const submissionData = JSON.stringify({ data: data });

      // postedData must be awaited.
      const postedData = await postData(
        `${apiBaseUrl}/api/alumni`,
        submissionData
      );

      if (postedData.error)
        alert(
          `Error Code: ${postedData.error.status} \nError Name: ${postedData.error.name} \nError Message: ${postedData.error.message}`
        );
      else {
        // getting the refId of strapi collection data
        const entryId = postedData.data.id;
        console.log(`Created Entry Id: ${entryId}`);

        // --------------------------Second fetch: Uploading Image-----------------------------------------
        // ------------------uploading image to the newly created record-----------------------------------
        // creating FormData object
        const formData = new FormData();
        formData.append("files", file); //file state got updated from form input field
        formData.append("ref", "api::alumnus.alumnus"); //name of content type
        formData.append("refId", entryId); //id of content type
        formData.append("field", "profilePicture"); //name of key for the content type

        // logging formData object in tabular form in colsole for check
        // console.table(Object.fromEntries(formData));

        // posting newly formed formData with image file attached
        const postedFormData = await postData(
          `${apiBaseUrl}/api/upload`,
          formData,
          "FormData"
        );
        console.log(postedFormData);
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
        {/* Phone number field and validation ------------------  */}
        <label htmlFor="phoneNumber">Primary Phone Number</label>
        <input
          className="form-control"
          id="phoneNumber"
          type="text"
          placeholder="Your primary Phone Number"
          {...register("phoneNumber", {
            required: {
              value: true,
              message: "Primary phone number is required",
            },
            maxLength: { value: 11, message: "Must be 11 digit phone number" },
            minLength: { value: 11, message: "Must be 11 digit phone number" },
          })}
        />
        {errors.phoneNumber ? (
          <p className="text-danger">
            <small>* {errors.phoneNumber.message}</small>
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
        {/* Blood group field and validation -------------------- */}
        <label htmlFor="bloodGroup">Blood Group</label>
        <select
          className="form-control"
          id="bloodGroup"
          {...register("bloodGroup", { required: true })}
        >
          <option value="">Choose one </option>
          <option value="O positive">O+ </option>
          <option value="O negative">O- </option>
          <option value="A positive">A+ </option>
          <option value="A negative">A- </option>
          <option value="B positive">B+ </option>
          <option value="B negative">B- </option>
          <option value="AB positive">AB+ </option>
          <option value="AB negative">AB- </option>
        </select>
        {errors.bloodGroup ? (
          <p className="text-danger">
            <small>* Your blood group is required!</small>
          </p>
        ) : null}
        {/* Religion field and validation ------------------  */}
        <label htmlFor="religion">Religion</label>
        <select
          className="form-control"
          id="religion"
          {...register("religion", { required: true })}
        >
          <option value="">Choose one</option>
          <option value="Islam">Islam</option>
          <option value="Hindu">Hindu</option>
          <option value="Christian">Christian</option>
          <option value="Buddhist">Buddhist</option>
          <option value="Others">Others</option>
        </select>
        {errors.religion ? (
          <p className="text-danger">
            <small>* Your religion name is required!</small>
          </p>
        ) : null}
        {/* Marital status field and validation -------------- */}
        <div className="form-check">
          <input
            {...register("maritalStatus", { required: true })}
            className="form-check-input"
            id="married"
            type="radio"
            value={true}
          />
          <label className="form-check-label" htmlFor="married">
            {" "}
            Married
          </label>
        </div>
        <div className="form-check">
          <input
            {...register("maritalStatus", { required: true })}
            className="form-check-input"
            id="unmarried"
            type="radio"
            value={false}
          />
          <label className="form-check-label" htmlFor="unmarried">
            {" "}
            Unmarried
          </label>
        </div>
        {errors.maritalStatus ? (
          <p className="text-danger">
            <small>* Your marital status is required!</small>
          </p>
        ) : null}
        {/* Home district and validation --------------------- */}
        <label htmlFor="homeDistrict">Home District</label>
        <input
          className="form-control"
          id="homeDistrict"
          type="text"
          placeholder="homeDistrict"
          {...register("homeDistrict", { required: true })}
        />
        {errors.homeDistrict ? (
          <p className="text-danger">
            <small>* Your home district name is required!</small>
          </p>
        ) : null}
        {/* Current job field and validation -------------------- */}
        <label htmlFor="currentJob">Current Job Designation</label>
        <input
          className="form-control"
          id="currentJob"
          type="text"
          placeholder="currentJob"
          {...register("currentJob", { required: true })}
        />
        {errors.currentJob ? (
          <p className="text-danger">
            <small>* Your current job designation is required!</small>
          </p>
        ) : null}
        {/* Workplace address and validation ---------------------  */}
        <label htmlFor="workplaceAddress">Workplace Address</label>
        <input
          className="form-control"
          id="workplaceAddress"
          type="text"
          placeholder="workplaceAddress"
          {...register("workplaceAddress", { required: true })}
        />
        {errors.workplaceAddress ? (
          <p className="text-danger">
            <small>* Your workplace address is required!</small>
          </p>
        ) : null}
        {/* Present Address and validation ------------------- */}
        <label htmlFor="presentAddress">Present Address</label>
        <input
          className="form-control"
          id="presentAddress"
          type="text"
          placeholder="presentAddress"
          {...register("presentAddress", { required: true })}
        />
        {errors.presentAddress ? (
          <p className="text-danger">
            <small>* Your present address is required!</small>
          </p>
        ) : null}
        {/* Permanent address and validation --------------------  */}
        <label htmlFor="permanentAddress">Permanent Address</label>
        <input
          className="form-control"
          id="permanentAddress"
          type="text"
          placeholder="permanentAddress"
          {...register("permanentAddress", { required: true })}
        />
        {errors.permanentAddress ? (
          <p className="text-danger">
            <small>* Your permanent address is required!</small>
          </p>
        ) : null}
        {/* Dhaka university session field and validation -----------------  */}
        <label htmlFor="duSession">
          Dhaka University Session{" "}
          <span className="text-muted font-italic">
            <i>Ex: 2003-2004</i>
          </span>
        </label>
        <input
          className="form-control"
          id="duSession"
          type="text"
          placeholder="duSession"
          {...register("duSession", {
            required: {
              value: true,
              message: "* Dhaka university session information is required",
            },
            maxLength: {
              value: 9,
              message: "* Max length exceeded, try following the example",
            },
            pattern: {
              value: /(?:(?:18|19|20|21)[0-9]{2})-(?:(?:18|19|20|21)[0-9]{2})/i,
              message:
                "* Both year in session info must be 4 digits long each & separated by a hyphen (-)",
            },
          })}
        />
        {errors.duSession ? (
          <p className="text-danger">
            <small>{errors.duSession.message}</small>
          </p>
        ) : null}
        {/* Dhaka university department name field and validation -----------------  */}
        <label htmlFor="duDepartment">Dhaka University Department Name</label>
        <input
          className="form-control"
          id="duDepartment"
          type="text"
          placeholder="duDepartment"
          {...register("duDepartment", { required: true })}
        />
        {errors.duDepartment ? (
          <p className="text-danger">
            <small>* Your department name is required!</small>
          </p>
        ) : null}
        {/* Dhaka university hall name filed and validation --------------- */}
        <label htmlFor="duHall">Dhaka University Hall Name</label>
        <input
          className="form-control"
          id="duHall"
          type="text"
          placeholder="duHall"
          {...register("duHall", { required: true })}
        />
        {errors.duHall ? (
          <p className="text-danger">
            <small>* Your hall name is required!</small>
          </p>
        ) : null}
        {/* Alumnus Profile picture filed and validation --------------- */}
        <label className="custom-file-label" htmlFor="profilePicture">
          Select Profile Picture
        </label>
        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="profilePicture"
              {...register("profilePicture", {
                required: true,
                onChange: (e) => {
                  setFile(e.target.files[0]);
                },
              })}
            />
          </div>
          {/* previewing uploaded image file  */}
          {file && <img height={100} width={100} src={preview} />}
        </div>
        {errors.profilePicture ? (
          <p className="text-danger">
            <small>* Your profile picture is required!</small>
          </p>
        ) : null}{" "}
        {/* Submit button for final submission -----------------  */}
        <input className="btn btn-primary mt-3" type="submit" />
      </form>
    </Container>
  );
}
