import React, { useEffect, useState } from "react";
import Feed from '../Components/Feed';
import Filter from '../Components/Filter';
import Pagination from '../Components/Pagination';
import Search from '../Components/Search';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [filters, setFilters] = useState({
    jobTypes: [],
    location: "",
    experienceLevel: "",
    currency: "",
    minValue: 20,
    maxValue: 2000,
  });
  const [jobTypes, setJobTypes] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          page: currentPage,
          limit: itemsPerPage,
          search: searchQuery,
          location: locationQuery,
          types: jobTypes.join(','), 
          ...filters
        });

        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?${params}`
        );
        const data = await response.json();
        
        if (!response.ok) throw new Error(data.message || "Failed to fetch");
        
        setJobs(data.jobs || []);
        setTotal(data.total || 0);
        setError(null);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [currentPage, searchQuery, locationQuery, filters, jobTypes]); // Add jobTypes to the dependency array

  const handleSearch = (query, location) => {
    setSearchQuery(query);
    setLocationQuery(location);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); 
  };

  const handleResetFilters = () => {
    setFilters({
      jobTypes: [], 
      location: "",
      experienceLevel: "",
      currency: "",
      minValue: 20,
      maxValue: 2000,
    });
    setSearchQuery("");
    setLocationQuery("");
    setCurrentPage(1);
    setJobTypes([]);
  };
  
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="my-4">
          <Search
            query={searchQuery}
            setQuery={setSearchQuery}
            onSearch={handleSearch}
            locQuery={locationQuery}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <Filter
              jobTypes={jobTypes}
              setJobTypes={setJobTypes}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </div>
          <div className="w-full md:w-3/4">
            {loading ? (
              <div className="text-center">Loading jobs...</div>
            ) : (
              <>
                <Feed 
                  jobs={jobs} 
                  loading={loading}
                  error={error}
                />
                {jobs.length > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(total / itemsPerPage)}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;