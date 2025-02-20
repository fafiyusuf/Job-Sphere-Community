import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import apple from "../assets/apple.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import Linkedin from "../assets/Linkedin.png";
import logo2 from "../assets/logo.png";
import work from "../assets/work.png";

const SignUp = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please insert your first name")
      .min(3, "What kind of name is that?")
      .max(15, "Name is too long"),
    lastName: Yup.string()
      .required("Please insert your last name")
      .min(3, "What kind of name is that?")
      .max(15, "Name is too long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please insert your email"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be at most 15 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Signup Data:", values);
    },
  });

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">
      <div className="bg-white  p-8 w-full max-w-md">
        <div className="flex justify-center mb-6 bg-blue-800 w-[158px] rounded-2xl p-2">
          <img src={logo2} alt="Logo" className="w-24" />
        </div>
        <h3 className="font-bold text-2xl text-center mb-4">Create your account</h3>

        <form onSubmit={formik.handleSubmit}>

          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border rounded-md p-2 w-full ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border rounded-md p-2 w-full ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

      
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border rounded-md p-2 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border rounded-md p-2 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border rounded-md p-2 w-full ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
            )}
          </div>

      
          <button
            type="submit"
            className="w-full h-12 rounded-md bg-[#0034D1] text-white font-medium text-lg hover:bg-blue-700 transition duration-200"
          >
            Create account
          </button>
        </form>

        <div className="flex justify-between items-center mt-6">
          <hr className="flex-grow border-gray-300" />
          <h4 className="mx-4 text-gray-600">OR</h4>
          <hr className="flex-grow border-gray-300" />
        </div>

 
        <div className="flex justify-center gap-4 mt-4">
          <img src={google} alt="Google" className="w-12 cursor-pointer" />
          <img src={apple} alt="Apple" className="w-12 cursor-pointer" />
          <img src={facebook} alt="Facebook" className="w-12 cursor-pointer" />
          <img src={Linkedin} alt="LinkedIn" className="w-12 cursor-pointer" />
        </div>

        <div className="flex justify-center mt-6">
          <h4 className="font-bold">Already have an account?</h4>
          <Link to="LoginPage" className="text-blue-600 ml-2 hover:underline">
            Login
          </Link>
        </div>
      </div>
      <div className="hidden md:block w-[650px] bg-gray-300 h-[588px] ml-5 rounded-lg overflow-hidden">
        <img src={work} alt="Work Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;