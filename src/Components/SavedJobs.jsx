import React from 'react';
import { IoMdClose } from "react-icons/io";

const SavedJobs = ({ savedMessages, removeSavedJob }) => {
  return (
    <div className='bg-white min-w-[250px] flex flex-col items-center p-4 shadow-lg rounded-lg'>
        <h1 className="text-xl font-bold mb-4">Saved Jobs</h1>
        {savedMessages.length > 0 ? (
            savedMessages.map((job, index) => (
                <div key={index} className='bg-gray-100 w-full rounded-2xl p-2 mb-2 flex flex-col'>
                  <div className='flex justify-between items-center'>
                      <h2 className='text-[18px] font-bold'>{job.title}</h2>
                      <button onClick={() => removeSavedJob(job.title)} className="text-red-500">
                          <IoMdClose size={20} />
                      </button>
                  </div>
                  <p className="text-gray-600">{job.company}</p>
                </div>
            ))
        ) : (
            <p className="text-gray-500">No saved jobs yet.</p>
        )}
    </div>
  );
};

export default SavedJobs;
