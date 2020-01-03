import React from "react";
import styled from 'styled-components'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthAttempt } from "../Actions/Login";
import { useSelector, useDispatch } from "react-redux";
import { Solid, Primary } from './index';

const LoginForm = ({
  AuthAttempt,
  dispatch,
  touched,
  errors,
  isSubmitting,
  values
}) => {
  const logged = useSelector(state => state.login);

  return (
    <div className="pic">
      <img src={require("../imgs/anime.jpg")} className="picture" />
      <div className="login_form">
        <StyledForm>
          <Field
            type="text"
            name="email"
            placeholder="Email"
            value={values.email}
            className="form-control mb-4"
          />
          {touched.username && errors.username && <p>{errors.name}</p>}
          <Field
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            className="form-control mb-4"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <FormButton type="submit" disabled={isSubmitting}>
            Login!
          </FormButton>
        </StyledForm>
      </div>
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
  async handleSubmit(values, { props, resetForm, setSubmitting, setStatus }) {
    // user@gmail.com
    // pass
    console.log("values sent to endpoint", values);

    await props.dispatch(props.AuthAttempt(values));
    console.log(props.history, "this is the history sigin");

    props.history.push("/prList");
  }
})(LoginForm);
export default SuperLoginForm;

const StyledForm = styled(Form)`
  width: 50%;
  max-height: 100vh;
  padding-top: 4rem !important;
  a:hover {
    text-decoration: underline;
  }
  input:focus,
  textarea:focus {
    outline: none !important;
    border: 1px solid ${Primary.Purple};
    box-shadow: 0 0 10px #719ece;
  }

`;

const FormButton = styled.button.attrs({
  type: "submit"
})`
  color: ${Solid.WHITE};
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: ${Primary.Purple};
  white-space: nowrap;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0 0 1rem;
  padding: 0.5rem 2rem;
  text-decoration: none !important;
`;
