import axios from "axios";
import { useEffect, useState } from "react";
import TreatiesListItem from "./TreatiesListItem";


const AllTreaties = () => {
  const [allTreaties, setAllTreaties] = useState([]);
  useEffect(() => {
    getAllTreaties().
      then(treaties => {
        setAllTreaties(treaties.data)

      })
      
    }, [])
    const listOfAllTreaties = allTreaties.map(elem => {
      return <TreatiesListItem key={elem.id} id={elem.id} name={elem.name} city={elem.city} concluded={elem.concluded}/>
    })

  const getAllTreaties = async () => {
    return await axios.get("http://localhost:4000/treaties");
  }
  return (
    <div>
      {listOfAllTreaties}
    </div>
  )
}

export default AllTreaties;