import React from 'react';
import { useFormik } from 'formik';

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value=""
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value=""
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
