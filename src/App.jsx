import React, { useEffect, useState } from "react";
import Feed from './Components/Feed';
import Filter from './Components/Filter';
import Header from './Components/Header';
import Pagination from './Components/Pagination';
import Search from './Components/Search';

function App() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const itemsPerPage = 4;

  // Fetch jobs with search and filters
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Build query parameters
        const params = new URLSearchParams({
          page: currentPage,
          limit: itemsPerPage,
          search: searchQuery,
          ...filters
        });

        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?${params}`
        );
        const data = await response.json();
        
        setJobs(data.jobs || []);
        setTotal(data.total || 0);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [currentPage, searchQuery, filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Reset all filters
  const handleResetFilters = () => {
    setFilters({});
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      
      <div className="container mx-auto px-4">
        {/* Search Component */}
        <div className="my-4">
          <Search
            query={searchQuery}
            setQuery={setSearchQuery}
            onSearch={() => setCurrentPage(1)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Component */}
          <div className="w-full md:w-1/4">
            <Filter
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <Feed jobs={jobs} />
            
            {/* Pagination */}
            {jobs.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(total / itemsPerPage)}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;