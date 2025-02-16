import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const Filter = ({ 
  onFilterChange, 
  onResetFilters,
  jobTypes,
  setJobTypes,
  setCurrentPage,
  minLimit = 20,
  maxLimit = 200000
}) => {
  const [datePosted, setDatePosted] = useState("Last 24 Hours");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Mid Level");
  const [currency, setCurrency] = useState("USD");
  const [range, setRange] = useState({
    min: minLimit,
    max: maxLimit
  });

  // Handle all filter changes
  useEffect(() => {
    onFilterChange({ 
      minValue: range.min, 
      maxValue: range.max,
      jobTypes,
      experienceLevel,
      currency,
      location,
      datePosted
    });
  }, [range, jobTypes, experienceLevel, currency, location, datePosted]);

  // Salary range handlers
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), range.max - 20);
    setRange(prev => ({ ...prev, min: value }));
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), range.min + 20);
    setRange(prev => ({ ...prev, max: value }));
  };

  // Job type checkbox handler
  const handleJobTypeChange = (type) => {
    setJobTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  // Reset all filters
  const handleResetFilters = () => {
    setRange({ min: minLimit, max: maxLimit });
    setDatePosted("Last 24 Hours");
    setLocation("");
    setExperienceLevel("Mid Level");
    setCurrency("USD");
    setJobTypes([]);
    setCurrentPage(1);
    if (onResetFilters) onResetFilters();
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
        {["Full-time", "Hybrid", "Internship", "Contract", "Volunteer", "Remote"].map((type) => (
          <label key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={jobTypes.includes(type)}
              onChange={() => handleJobTypeChange(type)}
              className="mr-2 w-4 h-4 text-blue-600 rounded border-gray-300"
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
          <option value="Entry Level">Entry Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
      </div>

      {/* Salary Range */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Salary Range ($)</h3>
        <div className="relative w-full">
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            step="20"
            value={range.min}
            onChange={handleMinChange}
            className="absolute w-full h-4 bg-transparent z-30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-lg"
          />
          
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            step="20"
            value={range.max}
            onChange={handleMaxChange}
            className="absolute w-full h-4 bg-transparent z-20 appearance-none cursor-pointer [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-lg"
          />

          <div className="relative w-full h-1 bg-gray-200 rounded-full mt-4">
            <div
              className="absolute h-1 bg-blue-600 rounded-full transition-all duration-100"
              style={{
                left: `${((range.min - minLimit) / (maxLimit - minLimit)) * 100}%`,
                right: `${100 - ((range.max - minLimit) / (maxLimit - minLimit)) * 100}%`
              }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${range.min.toLocaleString()}</span>
            <span>${range.max.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Currency */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Currency</h3>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="USD">USD</option>
          <option value="ETB">ETB</option>
        </select>
      </div>

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