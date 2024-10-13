import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router"; // Import useRouter from next/router

const LoginForm = () => {
  const router = useRouter(); // Initialize the router

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
      console.log("Login Submitted: ", values);
      setSubmitting(false); // Simulate a quick response

      // Simulate successful login
      alert("Login successful (simulated)");

      // Redirect to dashboard after successful login
      router.push('/dashboard');
    },
  });

  return (
      <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-lg shadow-lg px-8 pt-8 pb-12 max-w-md mx-auto"
      >
        <div className="mb-6 flex items-center justify-center">
          {/* Logo with text beside it */}
          <img
              src="https://www.shutterstock.com/shutterstock/photos/1472127647/display_1500/stock-vector-p-o-s-letter-logo-design-vector-1472127647.jpg" // Logo URL
              alt="Your Logo"
              className="h-16 mr-2" // Make logo bigger
          />
          <h1 className="text-2xl font-semibold text-gray-800">POS System</h1>
        </div>
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600">Sign in to your account</p>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.username && formik.touched.username
                      ? "border-red-500"
                      : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.password && formik.touched.password
                      ? "border-red-500"
                      : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition duration-200"
            disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Validating..." : "Login"}
        </button>
      </form>
  );
};

export default LoginForm;
