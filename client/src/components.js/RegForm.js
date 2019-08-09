import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({ errors, touched, isSubmitting }) => {

  console.log("isSubmitting: ", isSubmitting);

  return (
    <div className="loginForm">
      <Form>
        <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="username" />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <button disabled={isSubmitting}>Submit</button>
        </div>
      </Form>
    </div>
  )
}

const FormikLoginForm = withFormik({

  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .trim("looks like there's a whitespace before or after your username.")
      .required("Please include your username"),
    password: Yup.string()
      .min(8, "Password must be 8 charaters or longer")
      .required("Please include your password")
  }),


  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    console.log('values in handleSubmit: ', values);
    axios
      .get('http://localhost:5000/api/restricted/data', values)
      .then(res => {
        resetForm();
        setStatus(res.data);
        console.log(res.data);
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      })
  }

})(LoginForm);

export default FormikLoginForm;