import React from 'react';
import { useFormik } from 'formik';
import '../auth/form.scss';

const AddShopForm = ({ onAddShop }) => {
  const formik = useFormik({
    initialValues: {
      ImageUrl: '',
      description: '',
      shopName: '',
      startYear: 2000,
      town: '',
    },

    onSubmit: (values) => {
      console.log(values);
      onAddShop(values);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="shopName">Shop name</label>
      <input
        id="shopName"
        name="shopName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.shopName}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />

      <label htmlFor="town">Town</label>
      <input
        id="town"
        name="town"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.town}
      />
      <label htmlFor="startYear">Start year</label>
      <input
        id="startYear"
        name="startYear"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.startYear}
      />
      <label htmlFor="ImageUrl">Image Url</label>
      <input
        id="ImageUrl"
        name="ImageUrl"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.ImageUrl}
      />
      <button type="submit">Add new shop</button>
    </form>
  );
};

export default AddShopForm;
