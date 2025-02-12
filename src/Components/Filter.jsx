import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const Filter = ({ onFilterChange, onResetFilters }) => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(2000);
  const [datePosted, setDatePosted] = useState("Last 24 Hours");
  const [jobTypes, setJobTypes] = useState([]);
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Intermediate");
  const [currency, setCurrency] = useState("$Dollar");

  const minLimit = 20;
  const maxLimit = 2000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    onFilterChange({ minValue: value, maxValue });
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    onFilterChange({ minValue, maxValue: value });
  };

  const handleJobTypeChange = (type) => {
    const updatedTypes = jobTypes.includes(type)
      ? jobTypes.filter((t) => t !== type)
      : [...jobTypes, type];
    setJobTypes(updatedTypes);
    onFilterChange({ jobTypes: updatedTypes });
  };

  const handleResetFilters = () => {
    setMinValue(20);
    setMaxValue(2000);
    setDatePosted("Last 24 Hours");
    setJobTypes([]);
    setLocation("");
    setExperienceLevel("Intermediate");
    setCurrency("$Dollar");
    onResetFilters();
  };

  return (
    <div className="w-[90%] max-w-[300px] rounded-lg bg-white shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Filter</h2>

      {/* Date Posted */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Date Posted</h3>
        <select
          value={datePosted}
          onChange={(e) => setDatePosted(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Job Type</h3>
        {["Full-time", "Part-time", "Internship", "Contract", "Volunteer"].map((type) => (
          <label key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={jobTypes.includes(type)}
              onChange={() => handleJobTypeChange(type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>

      {/* Location */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <IoLocationOutline className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>
      {/* Experience Level */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Experience Level</h3>
        <select
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>Beginner</option>
          <option>Intermidiate</option>
          <option>Experienced</option>
        </select>
      </div>

      {/* Salary Range */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Salary Range</h3>
        <div className="relative w-full">
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full h-1 bg-transparent z-10"
          />
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full h-1 bg-transparent z-10"
          />
          <div className="relative w-full h-1 bg-gray-300 rounded mt-4">
            <div
              className="absolute h-1 bg-blue-600 rounded"
              style={{ left: `${(minValue / maxLimit) * 100}%`, right: `${100 - (maxValue / maxLimit) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-700">
            <span>${minValue}</span>
            <span>${maxValue}</span>
          </div>
        </div>
      </div>
       {/* Currency */}
       <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Currenc</h3>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>Dollar</option>
          <option>Euro</option>
          <option>Birr</option>
        </select>
      </div>
      {/* Reset Filters Button */}
      <button
        onClick={handleResetFilters}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;