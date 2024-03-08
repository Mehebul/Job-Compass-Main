import Banner from "../components/Banner"
import { useState } from "react";
const Home = () => {
  const [query, SetQuery] = useState("");
  const handleInputChange = (event) => {
       SetQuery(event.target.value)
  }
  return (
    <div>
        <Banner query={query} handleInputChange= {handleInputChange}/>
    </div>
  )
}

export default Home