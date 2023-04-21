import React from 'react';
import { useFormik } from 'formik';
import './form.scss';
import * as Yup from 'yup';

function RegisterForm({ onUserRegistration }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Incorrect email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Minimum 6 symbols required')
        .required('Password is required'),
    }),

    onSubmit: (values) => {
      console.log('Form values:', values);
      onUserRegistration(values);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errorMsg">{formik.errors.email}</div>
        ) : (
          <div className="insvisible">insvisible</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="errorMsg">{formik.errors.password}</div>
        ) : (
          <div className="insvisible">insvisible</div>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
