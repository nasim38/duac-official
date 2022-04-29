import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Stack } from "react-bootstrap";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <option value="O+">O+ </option>
          <option value="O-">O- </option>
          <option value="A+">A+ </option>
          <option value="A-">A- </option>
          <option value="B+">B+ </option>
          <option value="B-">B- </option>
          <option value="AB+">AB+ </option>
          <option value="AB-">AB- </option>
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
            value="Married"
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
            value="Unmarried"
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
              message:
                "* Max length exceeded, try following suggested pattern of session info",
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
        {/* Submit button for final submission -----------------  */}
        <input className="btn btn-primary" type="submit" />
      </form>
    </Container>
  );
}
