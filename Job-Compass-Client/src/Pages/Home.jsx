import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Card from "../components/Card";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedcategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cuurentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // handle input change
  const [query, SetQuery] = useState("");
  const handleInputChange = (event) => {
    SetQuery(event.target.value);
  };

  //filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // ..........radio filtering...........
  const handleChange = (event) => {
    setSelectedcategory(event.target.value);
  };

  //......button based filtering........
  const handleClick = (event) => {
    setSelectedcategory(event.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (cuurentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return { startIndex, endIndex };
  };

  // function for the next page
  const nextPage = () => {
    if (cuurentPage < Math.ceil(filteredItems.length / itemPerPage)) {
      setCurrentPage(cuurentPage + 1);
    }
  };

  //function for prev page
  const previousPage = () => {
    if (cuurentPage > 1) {
      setCurrentPage(cuurentPage - 1);
    }
  };

  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) => postingDate <= selected
      );
      console.log(filteredJobs);
    }
    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
    // return filteredJobs.map(())
  };

  const result = filteredData(jobs, selectedCategory, query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/*main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="p-4 bg-white rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* job card */}
        <div className="col-span-2 p-4 bg-white rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading On......</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="mb-2 text-lg font-bold">{result.length}Jobs</h3>
              <p>Oops ! No Data Found !</p>
            </>
          )}

          {/* Pagination here */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={previousPage} disabled={cuurentPage === 1}>
                Previous
              </button>
              <span>
                Page {cuurentPage} of{" "}
                {Math.ceil(filteredItems.length / itemPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  cuurentPage === Math.ceil(filteredItems.length / itemPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* right side */}
        <div className="p-4 bg-white rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
