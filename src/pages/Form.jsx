import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

const Form = ({ setResult }) => {
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
        onSubmit={async (values, { resetForm }) => {
          const { data, width, bg, dots } = values;
          try {
            let res = await axios.get(`https://api.happi.dev/v1/qrcode`, {
              params: {
                data: data,
                width: width,
                dots: dots.slice(1),
                bg: bg.slice(1),
                apikey:
                  "d289f0hWuYeUWAeLAVCj7T9TACNxkPbDXLbxpuJLoBBXHngD6uBJ1Msx",
              },
            });

            if (res.data.success) {
              setResult(res.data);
              resetForm();
              toast.success("QR-code generated", {
                position: "top-right",
                theme: "colored",
              });
            }
          } catch (error) {
            toast.error("Something went wrong", {
              position: "top-right",
              theme: "colored",
            });
          }
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
