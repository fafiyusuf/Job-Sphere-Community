import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Search = ({ query, setQuery, deferredQuery, filteredQuery }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", query, "in location:", location);
  };

  return (
    <div className="ml-[300px] flex   rounded-[10px]    min-w-[627px] min-h-[58px] p-6 shadow-md">
      <div className=" w-[308px] h-[24px] flex items-center">
        <div><CiSearch className="w-24px h-24px mr-2 text-gray-500" /></div>
        <div> <input
          type="text"
          placeholder="Job title, Keywords, or Company name.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[184px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000] outline-none"
          aria-label="Search for job title, keywords, or company name"
        /></div>
      </div>

      {query && (
        <div className="absolute top-[38px] left-0 w-full bg-white rounded-[20px] border-[1px] mt-2 z-10">
          {deferredQuery !== query ? (
            <p className="p-2 text-gray-500">Loading...</p>
          ) : filteredQuery.length > 0 ? (
            <ul>
              {filteredQuery.map((job) => (
                <li
                  key={job.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {job.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2 text-gray-500">No results found.</p>
          )}
        </div>
      )}

      <div className="w-[208px] h-[24px] flex items-center ml-4">
        <IoLocationOutline className="w-[12px] h-[16px] mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-[184px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000] outline-none"
          aria-label="Enter location"
        />
      </div>

      <div className="w-[80px] h-[28px] rounded-[8px] pt-[2px] pr-[14px] pb-[10px] pl-[14px] gap-[4px] bg-[#0034D1] ml-4">
        <button
          className="font-[600] text-[17px] leading-[14px] text-[#FFFFFF]"
          aria-label="Search"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;