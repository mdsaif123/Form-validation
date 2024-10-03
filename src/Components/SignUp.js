import React from "react";
import { Formik, Form, Field } from "formik";
import signupValidation from "./signupValidatiom";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const SignUp = () => {
    const handleSubmit = async (values, { resetForm }) => {
       
        try {
          const {data} = await axios.post("http://localhost:5000/users", values );
          console.log("Data saved successfully:", data);
          toast.success("data submitted successfully")
          resetForm(); 
        } catch (error) {
          console.error("Error saving data:", error);
          toast.error("error while submitting data")
        }
      };
  

  return (
    <div>
      <div className="container mt-4">
      <Toaster />
        <div className="row">
          
          <div className="col-md-6 col-md-6-offset m-auto p-2">
            <Formik
              initialValues={initialValues}
              validationSchema={signupValidation}
              onSubmit={handleSubmit}
            >
              {({ errors }) => (
                <Form className="glass-form p-5"> 
                <h2 className="text-center text-primary mb-3">SignUp</h2>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                  <br />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                  <br />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <br />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                  <br />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  <br />
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                  <br />
                  <Field
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                  <br />
                  {errors.cpassword && (
                    <small className="text-danger">{errors.cpassword}</small>
                  )}
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill w-100"
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
