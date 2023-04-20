import React from 'react';
import { useFormik } from 'formik';
import './form.scss';

function RegisterForm({ onUserRegistration }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
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
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
