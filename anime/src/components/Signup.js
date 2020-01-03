import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

const SignUpForm = ({
  AuthSignUp,
  dispatch,
  touched,
  errors,
  isSubmitting,
  values
}) => {
  const logged = useSelector(state => state.login);

  console.log(logged);

  return (
    <div className="img-pic">
      <img src={require("../imgs/signin.jpg")} className="picture" />
      <div className="login_form">
        <Form>
          <Field
            type="text"
            name="email"
            placeholder="email"
            value={values.username}
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
            Sign Up!
          </button>
        </Form>
      </div>
    </div>
  );
};
const superSignUpForm = withFormik({
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

  handleSubmit(values, { props, resetForm, setSubmitting, setStatus }) {
    props.dispatch(props.AuthSignUp(values));

    setSubmitting(false);
  }
})(SignUpForm);

export default superSignUpForm;
