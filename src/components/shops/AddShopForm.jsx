import React from 'react';
import { useFormik } from 'formik';
import '../auth/form.scss';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useAuthCtx } from '../../store/AuthProvider';

const AddShopForm = ({ onAddShop }) => {
  const { isLoading, inactive } = useAuthCtx();

  const posting = 'posting new shop . . .';
  const addNew = 'Add new shop ';
  const formik = useFormik({
    initialValues: {
      ImageUrl: '',
      description: '',
      shopName: '',
      startYear: +'',
      town: '',
    },

    validationSchema: Yup.object({
      ImageUrl: Yup.string().min(5).required('Image url is required'),
      description: Yup.string().min(6).required('Description is required'),
      shopName: Yup.string().min(4).required('Shop name is required'),
      startYear: Yup.number()
        .min(1970)
        .max(2022)
        .required('Start year is required'),
      town: Yup.string().min(4).required('Town is required'),
    }),

    onSubmit: (values) => {
      onAddShop(values);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="shopName">Shop name</label>
        <input
          id="shopName"
          name="shopName"
          type="text"
          placeholder="Name of shop"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.shopName}
        />
        {formik.touched.shopName && formik.errors.shopName ? (
          <div className="errorMsg">{formik.errors.shopName}</div>
        ) : (
          <div className="insvisible">insvisible</div>
        )}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Shop description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="errorMsg">{formik.errors.description}</div>
        ) : (
          <div className="insvisible">insvisible</div>
        )}
      </div>

      <div>
        <label htmlFor="town">Town</label>
        <input
          id="town"
          name="town"
          placeholder="City where shop is located"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.town}
        />
        {formik.touched.town && formik.errors.town ? (
          <div className="errorMsg">{formik.errors.town}</div>
        ) : (
          <div className="insvisible">insvisible</div>
        )}
      </div>
      <div>
        <label htmlFor="startYear">Start year</label>
        <input
          id="startYear"
          name="startYear"
          type="number"
          placeholder="1970 - 2022"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
        />
        {formik.touched.startYear && formik.errors.startYear ? (
          <div className="errorMsg">{formik.errors.startYear}</div>
        ) : (
          <div className="insvisible">insvisible</div>
        )}
      </div>
      <div>
        <label htmlFor="ImageUrl">Image Url</label>
        <input
          id="ImageUrl"
          name="ImageUrl"
          placeholder="Image url"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ImageUrl}
        />
        {formik.touched.ImageUrl && formik.errors.ImageUrl ? (
          <div className="errorMsg">{formik.errors.ImageUrl}</div>
        ) : (
          <div className="insvisible">insvisible</div>
        )}
      </div>
      <button className={inactive} disabled={isLoading} type="submit">
        {isLoading && posting}
        {!isLoading && addNew}
      </button>
    </form>
  );
};

AddShopForm.propTypes = {
  onAddShop: PropTypes.func,
};

export default AddShopForm;
