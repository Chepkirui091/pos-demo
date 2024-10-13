import { useFormik } from "formik";
import * as Yup from "yup";
import { Logo } from "@/components/logo";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required!"),
      password: Yup.string().required("Password is required!"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // Simulate a static login action
      console.log("Login Submitted: ", values);
      setSubmitting(false); // Simulate a quick response
      alert("Login successful (simulated)");
    },
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  return (
      <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-lg shadow-lg px-8 pt-8 pb-12"
      >
        <div className="mb-4">
          <Logo />
        </div>
        <div className="text-center mb-4">
          <p className="text-sm">Sign in to your account</p>
          {Boolean(formik.errors.submit) && (
              <div className="text-red-600">{formik.errors.submit}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={handleOnChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.username && formik.touched.username
                      ? "border-red-500"
                      : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={handleOnChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.password && formik.touched.password
                      ? "border-red-500"
                      : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
          )}
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Validating..." : "Login"}
        </button>
      </form>
  );
};

export default LoginForm;
