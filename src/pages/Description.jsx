import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://joblisting-rd8f.onrender.com/api/jobs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch job details");
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {job ? (
        <>
          <img src={job.logo} alt="Company Logo" className="w-16 h-16 mb-4" />
          <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
          <p className="text-gray-600">{job.description}</p>
          <p className="text-gray-500 mt-2">Location: {job.location}</p>
          <p className="text-gray-500">Salary: {job.salary}</p>
        </>
      ) : (
        <p className="text-center text-gray-500">Job not found</p>
      )}
    </div>
  );
};

export default Description;
