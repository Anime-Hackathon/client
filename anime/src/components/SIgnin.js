import React from "react";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthAttempt } from "../Actions/Login";
import { useSelector, useDispatch } from "react-redux";

const LoginForm = ({AuthAttempt,dispatch,touched, errors, isSubmitting, values }) => {
  
  const logged = useSelector(state => state.login);

  return (
    <div className="login_form">
      <Form>
        <Field
          type="text"
          name="email"
          placeholder="Email"
          value={values.email}
        />
        {touched.username && errors.username && <p>{errors.name}</p>}
        <Field
          type="password"
          placeholder="password"
          name="password"
          value={values.password}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <button type="submit" disabled={isSubmitting}>
          Login!
        </button>
      </Form>
    </div>
  );
};
const SuperLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required!"),
    password: Yup.string().required("Password is required!")
  }),
  handleSubmit(values, { props,resetForm, setSubmitting, setStatus }) {

    props.dispatch(AuthAttempt(values))

    console.log("it worked");
    setSubmitting(false);
  }
})(LoginForm);

export default SuperLoginForm;
