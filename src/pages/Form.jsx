import React from "react";
import { Formik } from "formik";
import axios from "axios";

const Form = () => {
  return (
    <div>
      <h1>QR-code generator</h1>
      <Formik
        initialValues={{
          data: "",
          width: "",
          bg: "#FFFFFF",
          dots: "#000000",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.data) {
            errors.data = "Please, enter data";
          }
          if (values.width < 128 || values.width > 1000) {
            errors.width = "Please, enter number between 128 and 1000";
          }
          return errors;
        }}
        onSubmit={async (values) => {
          console.log(values);
          let res = await axios.get(
            `https://api.happi.dev/v1/qrcode?data=${values.data}&width=${values.width}&dots=${values.dots}&bg=${values.bg}&apikey=d289f0hWuYeUWAeLAVCj7T9TACNxkPbDXLbxpuJLoBBXHngD6uBJ1Msx`
          );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="data"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.data}
              placeholder="Enter data you want to save"
            />
            <p>{errors.data && touched.data && errors.data}</p>
            <input
              type="number"
              name="width"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.width}
              placeholder="Enter width of QR-code"
              step="10"
            />
            <p>{errors.width && touched.width && errors.width}</p>
            <input
              type="color"
              name="bg"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bg}
            />
            <br />
            <br />
            <input
              type="color"
              name="dots"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dots}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
