import { useFormik } from "formik";
import * as Yup from "yup";
import logo2 from "../assets/logo.png";

function JobPosting() {
  const ValidationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    type: Yup.string().required("Type is required"),
    experienceLevel: Yup.string().required("Experience Level is required"),
    salary: Yup.number().required("Salary is required"),
    company: Yup.string().required("Company is required"),
    logo: Yup.string()
      .url("Must be a valid URL")
      .required("Company Logo is required"),
    currency: Yup.string().required("Currency is required"),
    isBookMarked: Yup.boolean().required("Bookmark is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      type: "",
      experienceLevel: "",
      salary: "",
      company: "",
      logo: "",
      currency: "",
      isBookMarked: false,
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://joblisting-rd8f.onrender.com/api/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to post job");
        }

        const data = await response.json();
        console.log("Job created successfully:", data);
        alert("Job posted successfully!");
      } catch (error) {
        console.error("Error posting job:", error);
        alert("Failed to post job. Please try again.");
      }
    },
  });

  return (
    <div className="flex gap-18 justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col items-center ">
        <div className="bg-[#0034D1] w-[px] h-[45px] rounded-lg flex justify-center items-center p-2">
          <img src={logo2} alt="Small Logo" className="w-16" />
        </div>
        <h3 className="font-bold text-2xl mt-4">Enter Your Job Posting Detail</h3>
        <form onSubmit={formik.handleSubmit} className="mt-6 w-[320px] space-y-4">
  
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
            />
            {formik.errors.title && formik.touched.title && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
            )}
          </div>


          <div>
            <textarea
              name="description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
              rows={4}
            />
            {formik.errors.description && formik.touched.description && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
            />
            {formik.errors.location && formik.touched.location && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.location}</p>
            )}
          </div>

          <div>
            <select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            {formik.errors.type && formik.touched.type && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.type}</p>
            )}
          </div>

          <div>
            <select
              name="experienceLevel"
              value={formik.values.experienceLevel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Experience Level</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
              <option value="Executive">Executive</option>
            </select>
            {formik.errors.experienceLevel && formik.touched.experienceLevel && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.experienceLevel}</p>
            )}
          </div>


          <div>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={formik.values.salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
            />
            {formik.errors.salary && formik.touched.salary && (
                 <p className="text-red-500 text-sm mt-1">{formik.errors.salary}</p>
                )}
              </div>
    

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-2 border rounded-lg"
                />
                {formik.errors.company && formik.touched.company && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.company}</p>
                )}
              </div>
    

              <div>
                <input
                  type="url"
                  name="logo"
                  placeholder="Company Logo URL"
                  value={formik.values.logo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-2 border rounded-lg"
                />
                {formik.errors.logo && formik.touched.logo && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.logo}</p>
                )}
              </div>
    

              <div>
                <input
                  type="text"
                  name="currency"
                  placeholder="Currency"
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-2 border rounded-lg"
                />
                {formik.errors.currency && formik.touched.currency && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.currency}</p>
                )}
              </div>
    

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isBookMarked"
                    checked={formik.values.isBookMarked}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mr-2"
                  />
                  Bookmark this job
                </label>
                {formik.errors.isBookMarked && formik.touched.isBookMarked && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.isBookMarked}</p>
                )}
              </div>
    
 
              <button
                type="submit"
                className="bg-[#0034D1] text-white w-full py-2 rounded-lg cursor-pointer"
              >
                Post Job
              </button>
            </form>
          </div>
        </div>
      );
    }
    
    export default JobPosting;