import Banner from "../components/Banner"
import { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Card from "../components/Card"
const Home = () => {
  const [selectedCategory, setSelectedcategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data)
      setJobs(data)
    })
  },[])

  // handle input change
  const [query, SetQuery] = useState("");
  const handleInputChange = (event) => {
       SetQuery(event.target.value)
  }

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  // ..........radio filtering...........
  const handleChange = (event) => {
    setSelectedcategory(event.target.value)
  }

  //......button based filtering........
  const handleClick = (event) =>{
    setSelectedcategory(event.target.value)
  }

  // main function
  const filteredData =(jobs,selected, query) =>{
    let filteredJobs = jobs;
    if(query){
      filteredJobs = filteredItems;
    }


    if(selected){
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice,experienceLevel,salaryType,employmentType,postingDate}) =>(
        jobLocation.toLowerCase() === selected.toLowerCase() || 
        parseInt(maxPrice) <= parseInt(selected) ||
        experienceLevel === selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredJobs);
    }

   return filteredJobs.map((data, i) => <Card key = {i} data={data}/>)
  // return filteredJobs.map(())
  }

  const result = filteredData(jobs, selectedCategory, query);
  return (
    <div>
        <Banner query={query} handleInputChange= {handleInputChange}/>

        {/*main content */}
        <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
          <div className="bg-white p-4 rounded">Left</div>
          <div className="col-span-2 bg-white p-4 rounded-sm">
            <Jobs result={result}/>
          </div>
          <div className="bg-white p-4 rounded">Right</div>

        </div>
    </div>
  )
}

export default Home